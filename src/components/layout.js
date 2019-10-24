import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 768;
    padding: 3%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
`

const Layout = ({ children }) => {
    return(
        <Container>
            <Header />
                {children}
            <Footer />
        </Container>
    )
};

export default Layout;