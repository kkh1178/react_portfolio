import React, { useState, useEffect } from 'react';
import { Grid, Container, Message, Icon } from "semantic-ui-react";

import RoverCard from '../components/RoverCard';
import Layout from '../components/Layout';
import DisplayResult from '../components/DisplayResult';
// Created an array of objects with information about the three rovers 
import roverInfo from '../components/helperfunctions/roverInfo';



const marsRover = () => {
    // Setting state for the rover name for the API call
    const [rover, setRover] = useState();
    const [loading, setLoading] = useState(false);

    // When a user clicks on a rover pic, get the rover name, and query the API
    const handleClick = async (e, name) => {
        e.preventDefault();
        // set the rover name
        const lowercaseName = name.toLowerCase();

        // tell user that you are waiting on results
        setLoading(true)

        // send a request to nasaAPI.js
        const response = await fetch("/api/nasaAPI", {
            method: "POST",
            body: JSON.stringify({ name: lowercaseName })
        })

        // Get the data back from nasaAPI
        const { data } = await response.json();
        setRover(data.photos)


        // Reset the loading message if data is returned
        if (data) {
            setLoading(false)
        }
    }

    // Mapping through the above roverInfo array and returning the JSX the way we want to view it
    let roverArray = roverInfo.map(function (rover) {
        return (
            <Grid.Column key={rover.key}>
                <RoverCard img={rover.img} size={rover.size} name={rover.name} description={rover.description} handleClick={handleClick} />
            </Grid.Column>
        )
    })


    // If the rover data is returned, display it below
    const displayResults = (data) => {
        // Make sure that the data exists first
        if (rover != undefined) {
            const display = rover.map(function (r) {
                return (
                    <DisplayResult name={r.name} date={r.earth_date} id={r.id} img={r.img_src} />
                )
            });
            return display;
        }
    }



    return (
        <>
            <Layout />
            <Container>
                <h1 style={{ textAlign: "center", marginTop: '10px' }}>Which rover images would you like to see?</h1>
                <Grid>
                    <Grid.Row columns={3}>
                        {roverArray}
                    </Grid.Row>
                </Grid>
            </Container>
            <Container style={{ marginTop: '10px' }}>
                <Grid>
                    {/* if loading is true, show the loading message; if not, display results */}
                    {loading ? <Message icon><Icon name={'circle notch'} loading />"Loading"</Message> : <Grid.Row columns={5}>{displayResults(rover)}</Grid.Row>}

                </Grid>
            </Container>
        </>

    )
}


export default marsRover;