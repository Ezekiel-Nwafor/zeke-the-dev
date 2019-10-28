import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const Blog = () =>{
    return(
        <Layout>
            <Container>
                <h2>Blog</h2>
                <p>My blog posts will go here</p>
            </Container>
        </Layout>
    )
};

export default Blog;