import React from "react"
import styled from 'styled-components';
import Layout from '../components/layout'

const IntroSection = styled.section`
    padding-top: 75px;
`

const Index = () => {
    return (

        <Layout>
            <IntroSection>
                <div>
                    <h1>Welcome!</h1>
                    <p>I am Ezekiel Nwafor (call me Zeke). I'm a developer living in Massachusetts. I like to share the things that I'm learning and doing in web development. </p>
                </div>
            </IntroSection>
        </Layout>
        
    )
}

export default Index;
