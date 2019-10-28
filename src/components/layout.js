import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
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