import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: {slug: {eq: $slug} }) {
         frontmatter {
             title
             date
            }
            html
        }
    }
`

const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const blogTemplate = (props) => {
    return(
        <Layout>
            <Container>
                <h3>{props.data.markdownRemark.frontmatter.title}</h3>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={ {__html: props.data.markdownRemark.html} } ></div>
            </Container>
        </Layout>
    )
}

export default blogTemplate;