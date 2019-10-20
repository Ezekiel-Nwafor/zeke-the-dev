import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    Width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    padding-bottom: 25px;
`

const CopyrightSection = styled.section`
    margin-left: 30px;
    margin-right: 30px;
`

const CopyrightParagraph = styled.p`
    display: inline;
`

const StyledLink = styled(Link)`
    text-decoration-line: none;
`

const Footer = () => {
    return (
        <FooterContainer>
            <section>
                <StyledLink to='/contact'>Contact</StyledLink>
            </section>

            <CopyrightSection>
                <CopyrightParagraph>&#9400; 2019 Ezekiel Nwafor </CopyrightParagraph>
            </CopyrightSection>

            <section>
                <StyledLink to='/about'>About</StyledLink>
            </section>
        </FooterContainer>
    )
};

export default Footer;