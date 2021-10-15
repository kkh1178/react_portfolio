import React from 'react';
import { Card, Image } from "semantic-ui-react";

const RoverCard = ({ img, size, name, description, handleClick }) => {
    return (
        <Card>
            <a>
                <Image alt={name} src={img} size={size} onClick={(event) => {
                    handleClick(event, name)
                }} />
            </a>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default RoverCard;