import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Container = styled.div`
    margin: 1.5rem;
    padding-top: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
`

const H4 = styled.h4`
    margin-bottom: 0.5rem;
`

const Ul = styled.ul`
    margin-top: 0.5rem;
`

const A = styled.a`
    color: #FCFCFC;
`

const About = () =>{
    return(
        <Layout>
            <Container>
                <p>Hello and welcome! I am Ezekiel Nwafor (Zeke), I'm a web developer from Massachusetts. I created this site as a means to document and share what I've learned during my journey as a web developer.</p>

                <p>you can find me on <A href='https://twitter.com/Ezekiel_Nwafor'>Twitter</A> and <A href='https://github.com/Ezekiel-Nwafor'>GitHub</A>.</p>

                <H4>Books - Some of what I read this year</H4>
                <Ul>
                    <li>Can't Hurt Me - David Goggins</li>
                    <li>Broken Earth Trilogy - N. K. Jemisin</li>
                    <li>Homegoing - Yaa Gyasi</li>
                    <li>Quiet - Susan Cain</li>
                </Ul>

                <H4>Podcasts - A very non-exhaustive list</H4>
                <Ul>
                    <li>
                        <A href='https://syntax.fm/'>Syntax.fm</A>
                    </li>
                        
                    <li>
                    <A href='https://www.vice.com/en_us/topic/waypoint-radio'>Waypoint Radio</A>
                    </li>

                    <li>
                        <A href='https://reactpodcast.simplecast.fm/'>React Podcast</A>
                    </li>

                    <li>
                        <A href='https://changelog.com/jsparty'>JS Party</A>
                    </li>
                </Ul>
            </Container>
        </Layout>
    )
};

export default About;