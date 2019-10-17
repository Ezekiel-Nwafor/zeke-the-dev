import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: inline-flex;
`

const Footer = () => {
    return (
        <FooterContainer>
            <section>
                <Link to='/contact'>Contact</Link>
            </section>

            <section>
                <p>&#9400; 2019 Ezekiel Nwafor </p>
            </section>

            <section>
                <Link to='/about'>About</Link>
            </section>
        </FooterContainer>
    )
};

export default Footer;