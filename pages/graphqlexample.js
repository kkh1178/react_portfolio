import React from 'react';
import request, { gql, GraphQLClient } from 'graphql-request';

export const getStaticProps = async () => {
    const url = process.env.GRAPHCMS_URL;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPHCMS_KEY}`
        }
    })


    const imgsQuery = gql`
      query {
            images {
                createdAt,
                id,
                title,
                description,
                slug,
                tags,
                photographer,
                jpeg {
                    url
                }
            }
        }
    `
    const imagesData = await graphQLClient.request(imgsQuery)
    // console.log(imagesData.images)
    const images = imagesData.images
    return {
        props: {
            images
        }
    }

}

const graphQlExample = ({ images }) => {


    const imageArray = images.map(function (img) {
        console.log("image array", img.id)
    })


    return (
        <div>
            <h4>Using GraphCMS, I created an API of space themed images and queried the api using graphql.</h4>
            {imageArray}
        </div>
    )
}

export default graphQlExample;