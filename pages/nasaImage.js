import React, { useState } from 'react';
import Picture from "../components/Picture";
import Layout from '../components/Layout';

export async function getStaticProps() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key='
    const response = await fetch(`${url}${process.env.NASA_KEY}`)
    const data = await response.json()

    return {
        props: { data }
    }
}
// Had to detructure data first before passing down to component
const nasaimage = ({ data }) => {
    const { copyright, date, explanation, hdurl, media_type, service_version, title, url } = data
    return (
        <>
            <Layout></Layout>

            <Picture title={title} image={url} text={explanation} credit={copyright}></Picture>
        </>
    )
}
export default nasaimage;