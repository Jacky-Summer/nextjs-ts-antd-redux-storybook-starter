import React, { FC } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'

interface Props {
  menuItems: MenuGlobal.MenuItem[]
}

const HeaderWrapper = styled.header`
  padding: 0 15px;
`

const Header: FC<Props> = ({ menuItems }) => (
  <HeaderWrapper>
    <NavMenu menuItems={menuItems} />
  </HeaderWrapper>
)

export default Header
