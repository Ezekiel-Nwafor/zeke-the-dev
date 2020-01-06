import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Head from '../components/head'

const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const NotFound = () => {
    return (
        <Layout>
            <Head title='404 Not Found'/>
            <Container>
                <h1>Page not found</h1>
                <Link to='/'>Home</Link>
            </Container>
        </Layout>
    )
}

export default NotFound;