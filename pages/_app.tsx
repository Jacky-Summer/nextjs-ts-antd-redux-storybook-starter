import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from 'src/redux'
import Layout from 'src/components/Layout'
import GlobalBaseStyle from 'src/styles/GlobalBaseStyle'

import 'src/i18n'

import 'antd/dist/antd.css'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <GlobalBaseStyle />
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(WrappedApp)
