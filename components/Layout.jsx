import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

//components
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Head><title>Exogear Store</title></Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`

main {
  max-width: 1400px;
  margin: 0 auto;
}
`

export default Layout