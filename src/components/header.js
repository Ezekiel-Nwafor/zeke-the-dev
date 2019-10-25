import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`
const StyledHeader = styled.header`
    width: 100%;
`

const Ul = styled.ul`
    list-style-type: none;
    display: inline-flex;
    margin: 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
const MenuContainerRight = styled.div`
    width: 33%;
`

const Li = styled.li`
    margin-right: 1.2rem;
`

const Header = () => {
    return(
        <StyledHeader>
            <Nav>
                <div>
                    <StyledLink to='/'>Zeke The Dev</StyledLink>
                </div>

                <MenuContainerRight>
                    <Ul>
                        <Li>
                            <StyledLink to='/blog'>Blog</StyledLink>
                        </Li>

                        <Li>
                            <StyledLink to='/about'>About</StyledLink>
                        </Li>

                        <Li>
                            <StyledLink to='/contact'>Let's Talk!</StyledLink>
                        </Li>
                    </Ul>                
                </MenuContainerRight>
            </Nav>
        </StyledHeader>
    )
};

export default Header;