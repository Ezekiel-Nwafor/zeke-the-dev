import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const footerContainer = styled.footer`
    display: inline-flex;
    width: 100%;
    height: 15%;
`;

const Section = styled.section`
    justify-content: space-around;
`;

const Footer = () => {
    return (
        <footerContainer>
            <section>
                <Link to='/contact'>Contact</Link>
            </section>

            <section>
                <p>&#9400; 2019 Ezekiel Nwafor </p>
            </section>

            <section>
                <Link to='/about'>About</Link>
            </section>
        </footerContainer>
    )
};

export default Footer;