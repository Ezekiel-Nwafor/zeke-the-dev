import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuRight = styled.div`
    display: flex;
    justify-content: space-between;
`

const MenuRightFirstLink = styled(Link)`
    text-decoration-line: none;
`
const MenuRightMidLink = styled(Link)`
    text-decoration-line: none;
    margin-left: 15px;
    margin-right: 15px;
`

const MenuRightEndLink = styled(Link)`
    text-decoration-line: none;
    margin-right: 40px;
`

const MenuLeft = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
`

const MenuLeftLink = styled(Link)`
    text-decoration-line: none;
`

const StyledHeader = styled.header`
    height: 10%;
    width: 100%;
    top: 0;
    position: fixed;
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return(
        <StyledHeader>
            <StyledNav>
                <MenuLeft>
                    <MenuLeftLink to='/'>Zeke The Dev</MenuLeftLink>
                </MenuLeft>

                <MenuRight>                
                    <MenuRightFirstLink to='/blog'>Blog</MenuRightFirstLink>
                    <MenuRightMidLink to='/about'>About</MenuRightMidLink>
                    <MenuRightEndLink to='/contact'>Let's Talk!</MenuRightEndLink>
                </MenuRight>
            </StyledNav>
        </StyledHeader>
    )
};

export default Header;