import React, { FC } from 'react'
import styled from 'styled-components'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainWrapper = styled.div`
  text-align: center;
  padding-bottom: 70px;
`

// you should todo: mock data or fetch actual api to get menu items
const menuItems = [
  {
    key: '/',
    title: '主页',
    desc: '项目主页面',
    pathname: '/',
  },
  {
    key: '/user',
    title: '用户页',
    desc: '用户信息',
    pathname: '/user',
  },
  {
    key: '/articles',
    title: '文章列表页',
    desc: '文章列表来展示请求数据',
    pathname: '/articles',
  },
]

const Layout: FC = ({ children }) => (
  <>
    <Header menuItems={menuItems} />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </>
)

export default Layout
