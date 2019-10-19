import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    Width: 100%;
    height: 5%;
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

const SectionLink = styled.a`
    
`

const Footer = () => {
    return (
        <FooterContainer>
            <section>
                <Link to='/contact'>Contact</Link>
            </section>

            <CopyrightSection>
                <CopyrightParagraph>&#9400; 2019 Ezekiel Nwafor </CopyrightParagraph>
            </CopyrightSection>

            <section>
                <Link to='/about'>About</Link>
            </section>
        </FooterContainer>
    )
};

export default Footer;