import React from 'react';
import { Image, Grid, Segment, Container } from 'semantic-ui-react';

const Picture = ({ image, text, title }) => {

    return (

        <Container style={{ marginTop: '10px' }}>
            <p>{text}</p>
            <Image alt={title} src={image} fluid></Image>
        </Container >


    )
}

export default Picture;