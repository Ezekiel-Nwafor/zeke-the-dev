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

const Index = () => {
    return (
        <Layout>
            <Container>
                <h1>Welcome!</h1>
                <p>I am Ezekiel Nwafor (call me Zeke). I'm a developer living in Massachusetts. I like to share the things that I'm learning and doing in web development. </p>
            </Container>
        </Layout>
    )
}

export default Index;
