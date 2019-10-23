import React from "react"
import styled from 'styled-components';
import Layout from '../components/layout'

const IntroSection = styled.section`
    display: flex;
    align-items: center;
    margin-top: 75px;
`

const StyledDiv = styled.div`
    max-width: 33%;
    margin: 0 auto;
`

const StyledH1 = styled.h1`
    margin-bottom: 5px;
`

const Index = () => {
    return (

        <Layout>
            <IntroSection>
                <StyledDiv>
                    <h1>Welcome!</h1>
                    <p>I am Ezekiel Nwafor (call me Zeke). I'm a developer living in Massachusetts. I like to share the things that I'm learning and doing in web development. </p>
                </StyledDiv>
            </IntroSection>
        </Layout>
        
    )
}

export default Index;
