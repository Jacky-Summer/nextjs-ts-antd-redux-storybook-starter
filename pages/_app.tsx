import React, { FC } from 'react'
import { AppProps } from 'next/app'
import store from 'src/store'
import { Provider } from 'react-redux'
import Layout from 'src/components/Layout'
import GlobalBaseStyle from 'src/styles/GlobalBaseStyle'

import 'src/i18n'

import 'antd/dist/antd.css'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <GlobalBaseStyle />
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default App
