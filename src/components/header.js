import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const IndexLink = styled(Link)`

`
const BlogLink = styled(Link)`

`
const AboutLink = styled(Link)`

`
const ContactLink = styled(Link)`

`

const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Zeke The Dev</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Let's Talk!</Link>
            </nav>
        </header>
    )
};

export default Header;