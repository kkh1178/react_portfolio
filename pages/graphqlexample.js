import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import { Grid, Container, Image } from "semantic-ui-react";
import Layout from "../components/Layout";
import Link from 'next/link';

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
        // console.log(img.slug)
        const imgPage = `/images/${img.slug}`
        return (
            <Grid.Column>
                <Link href={imgPage}>
                    <a>
                        <Image style={{ marginTop: '20px', width: "357px", height: "238px", objectFit: "cover" }} id={img.id} src={img.jpeg.url} alt={img.description} ></Image>
                    </a>
                </Link>
            </Grid.Column>
        )
    })

    return (
        <div>
            <Layout />
            <Container>
                <h4 style={{ marginTop: '20px', textAlign: "center" }}>
                    Using GraphCMS, I created an API of space themed images then returned the data I wanted using graphql.
                </h4>
                <Grid>
                    <Grid.Row columns={3}>
                        {imageArray}
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default graphQlExample;