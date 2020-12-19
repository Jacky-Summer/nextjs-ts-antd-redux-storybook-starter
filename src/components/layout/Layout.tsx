import React, { FC } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout: FC = ({ children }) => (
  <div className="layout">
    <Header />
    <div style={{ padding: '0 50px' }}>
      <div className="site-layout-content">{children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout
