import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    bottom: 0;
    height: 10%;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Ul = styled.ul`
    list-style-type: none;
    display: inline-flex;
    margin: 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FCFCFC;
`

const Li = styled.li`
    margin-right: 1.2rem;
`
const P = styled.p`
    margin: 0;
`

const ParagraphContainer = styled.div `
    margin-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LinkContainer = styled.div`
    margin-left: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <StyledFooter>
            <ParagraphContainer>
                <P>&#9400; 2019 {data.site.siteMetadata.author} </P>
            </ParagraphContainer>

            <LinkContainer>
                <Ul>
                    <Li>
                        <StyledLink to='/contact'>Contact</StyledLink>
                    </Li>

                    <Li>
                        <StyledLink to='/about'>About</StyledLink>
                    </Li>
                </Ul>
            </LinkContainer>  
        </StyledFooter>
    )
};

export default Footer;