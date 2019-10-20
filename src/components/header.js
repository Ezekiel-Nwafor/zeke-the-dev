import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration-line: none;
`
const StyledHeader = styled.header`
    height: 10%;
    width: 100%;
    top: 0;
    position: fixed;
`

const Header = () => {
    return(
        <StyledHeader>
            <nav>
                <StyledLink to='/'>Zeke The Dev</StyledLink>
                <StyledLink to='/blog'>Blog</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
                <StyledLink to='/contact'>Let's Talk!</StyledLink>
            </nav>
        </StyledHeader>
    )
};

export default Header;