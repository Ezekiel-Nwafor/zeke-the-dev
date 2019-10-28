import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const Contact = () =>{
    return(
        <Layout>
            <Container>
                <p>This is my contact me page</p>
            </Container>
        </Layout>
    )
};

export default Contact;