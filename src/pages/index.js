import React from "react"
import styled from 'styled-components';
import Layout from '../components/layout'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const H1 = styled.h1`
    margin: 0.5rem;
`

const P = styled.p`
    margin: 0;
`

const Index = () => {
    return (
        <Layout>
            <Container>
                <H1>Welcome!</H1>
                <P>I am Ezekiel Nwafor (call me Zeke). I'm a developer living in Massachusetts. I like to share the things that I'm learning and doing in web development. </P>
            </Container>
        </Layout>
    )
}

export default Index;
