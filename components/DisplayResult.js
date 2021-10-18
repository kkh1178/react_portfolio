import React from 'react';
import { Image, Grid } from "semantic-ui-react";

const DisplayResult = ({ name, date, id, img }) => {
    const altText = `Image of ${name} taken on ${date}`
    return (
        <Grid.Column key={id} style={{ marginTop: "5px" }}>
            <Image size="small" src={img} alt={altText} />
        </Grid.Column>
    )
}

export default DisplayResult;

