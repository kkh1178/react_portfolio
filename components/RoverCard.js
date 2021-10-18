import React, { useState } from 'react';
import { Card, Image } from "semantic-ui-react";

const RoverCard = ({ img, size, name, description, handleClick }) => {

    // State for the 'read more' button in the text description 
    const [readMore, setReadMore] = useState(false);

    return (
        <Card>
            {/* Adding a link to the image */}
            <a>
                <Image alt={name} src={img} width={300}
                    height={200} onClick={(event) => {
                        handleClick(event, name)
                    }} />
            </a>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {/* If someone wants to read more, click the 'readmore' button */}
                    {readMore ? description : `${description.substring(0, 60)}...`}
                    <a
                        style={{ width: "120px", height: "60px", color: 'blueviolet', textDecoration: "underline", letterSpacing: "1px", cursor: "pointer", outline: "none" }}
                        onClick={() => setReadMore(!readMore)
                        }>
                        {readMore ? 'show less' : 'read more'}
                    </a>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default RoverCard;