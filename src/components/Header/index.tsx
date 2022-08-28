import React, { FC } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import { IMenuItem } from './types'

interface IProps {
  menuItems: IMenuItem[]
}

const HeaderWrapper = styled.header`
  padding: 0 15px;
`

const Header: FC<IProps> = ({ menuItems }) => (
  <HeaderWrapper>
    <NavMenu menuItems={menuItems} />
  </HeaderWrapper>
)

export default Header
