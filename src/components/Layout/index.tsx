import React, { FC } from 'react'
import styled from 'styled-components'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainWrapper = styled.div`
  padding-bottom: 70px;
`

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </>
)

export default Layout
