import React from 'react';
import { Image, Grid, Segment, Container } from 'semantic-ui-react';

const Picture = ({ image, text, title }) => {
    return (
        <Container style={{ marginTop: '10px' }}>
            <h3 style={{ textAlign: "center", marginTop: '20px' }}>{title}</h3>
            <p>{text}</p>
            <Image alt={title} src={image} fluid></Image>
        </Container >
    )
}

export default Picture;