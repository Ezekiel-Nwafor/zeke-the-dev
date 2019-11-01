import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'


const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const Blog = () =>{
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }       
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <Container>
                <h2>Blog</h2>

                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })}
                </ol>
            </Container>
        </Layout>
    )
};

export default Blog;