import React, { useState } from 'react';
import { Container } from 'semantic-ui-react'
import Picture from "../components/Picture";
import Layout from '../components/Layout';

export async function getStaticProps() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key='
    const response = await fetch(`${url}${process.env.NASA_KEY}`)
    const data = await response.json()
    console.log("DATA FROM NASA", data)

    return {
        props: { data }
    }
}
// Had to detructure data first before passing down to component
const nasaImage = ({ data }) => {
    console.log(Object.keys(data))

    const { copyright, date, explanation, hdurl, media_type, service_version, title, url } = data
    console.log(url)

    return (
        <>
            <Layout></Layout>
            <Picture image={url} text={explanation} credit={copyright}></Picture>
        </>
    )
}
export default nasaImage;