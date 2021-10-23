import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import Picture from '../../components/Picture';

export const getServerSideProps = async (pageContext) => {
    const url = process.env.GRAPHCMS_URL;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPHCMS_KEY}`
        }
    })

    const pageSlug = pageContext.query.slug;

    const query = gql`
        query($pageSlug: String!) {
            image(where: {
              slug: $pageSlug
            }) {
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
    `;
    const variables = {
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables);
    // console.log({ data });
    const image = data.image
    // console.log(image);
    return {
        props: {
            image
        }
    }
}

const pic = ({ image }) => {
    // console.log(image)
    return (
        <div>
            <Picture image={image.jpeg.url} title={image.title} />
            <p style={{ textAlign: "center" }}>Image created by {image.photographer}</p>
            <p style={{ textAlign: "center" }}> {image.description}</p>
        </div>
    )
}

export default pic;