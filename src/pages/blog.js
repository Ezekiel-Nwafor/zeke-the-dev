import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`

const Ol = styled.ol`
    list-style-type: none;
    margin: 0;
`

const P = styled.p`
    margin: 0;
`

const H3 = styled.h3`
    margin-bottom: 0.5rem;
    margin-top: 0;
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
                        fields {
                            slug
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

                <Ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li>
                                <StyledLink to={`/blog/${edge.node.fields.slug}`} >
                                    <H3>{edge.node.frontmatter.title}</H3>
                                    <P>{edge.node.frontmatter.date}</P>
                                </StyledLink>
                            </li>
                        )
                    })}
                </Ol>
            </Container>
        </Layout>
    )
};

export default Blog;