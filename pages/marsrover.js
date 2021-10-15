import React, { useState, useEffect } from 'react';
import { Button, Card, Grid, Image, Container, Message } from "semantic-ui-react";
import RoverCard from '../components/RoverCard';
import Layout from '../components/Layout';



const marsRover = () => {

    // Created an array of objects with information about the three rovers that have images on NASA API.
    const roverInfo = [
        {
            "name": "Curiosity",
            "key": 1,
            "img": "/img/pia23378-16.jpeg",
            "size": "medium",
            "description": "NASA's Curiosity rover took this selfie on Oct. 11, 2019, the 2,553rd Martian day, or sol, of its mission."

        },
        {
            "name": "Opportunity",
            "key": 2,
            "img": "/img/pia20852_sol4501b_p2449_1_l257f.jpeg",
            "size": "medium",
            "description": "This scene from the panoramic camera (Pancam) on NASA's Mars Exploration Rover Opportunity shows 'Spirit Mound' overlooking the floor of Endeavour Crater"
        },
        {
            "name": "Spirit",
            "key": 3,
            "img": "/img/156151main_image_feature_645_ys_full.jpeg",
            "size": "medium",
            "description": "As the Mars Exploration Rover Spirit began collecting images for a 360-degree panorama of new terrain, the rover captured this view of a dark boulder with an interesting surface texture."
        }
    ]

    // Setting state for the rover name for the API call
    const [rover, setRover] = useState();
    const [loading, setLoading] = useState(false);

    // When a user clicks on a rover pic, get the rover name, and query the API
    const handleClick = async (e, name) => {
        e.preventDefault();
        // set the rover name
        const lowercaseName = name.toLowerCase();
        // console.log(lowercaseName)


        // tell user that you are waiting on results
        setLoading(true)

        // send a request to nasaAPI.js
        const response = await fetch("/api/nasaAPI", {
            method: "POST",
            body: JSON.stringify({ name: lowercaseName })
        })

        // Get the data back from nasaAPI
        const { data } = await response.json();
        // console.log(data)
        setRover(data)
        console.log(Object.keys(data))

        // Reset the loading message if data is returned
        if (data) {
            setLoading(false)
        }
    }

    console.log("RoverData", rover)

    // Mapping through the above roverInfo array and returning the JSX the way we want to view it
    let roverArray = roverInfo.map(function (rover) {
        return (
            <Grid.Column key={rover.key}>
                <RoverCard img={rover.img} size={rover.size} name={rover.name} description={rover.description} handleClick={handleClick} />
            </Grid.Column>
        )
    })





    return (
        <>
            <Layout></Layout>
            <Container>
                <h2 style={{ textAlign: "center", marginTop: '10px' }}>Which rover images would you like to see?</h2>
                <Grid>
                    <Grid.Row columns={3}>
                        {roverArray}
                    </Grid.Row>
                </Grid>
            </Container>
            <Container>

                {/* <Message>{loading ? "Please Wait" : null}</Message> */}
                {JSON.stringify(rover)}
            </Container>
        </>

    )
}


export default marsRover;