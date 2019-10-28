import React from 'react'
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
`

const Li = styled.li`
    margin-right: 1.2rem;
`

const ParagraphContainer = styled.div `
    margin-right: 1.2rem;

`

const LinkContainer = styled.div`
    margin-left: 1.2rem;

`


const Footer = () => {
    return (
        <StyledFooter>
            <ParagraphContainer>
                <p>&#9400; 2019 Ezekiel Nwafor </p>
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