import React, { FC } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import Link from 'src/components/Link'

interface Props {
  menuItems: MenuGlobal.MenuItem[]
}

const NavMenu: FC<Props> = ({ menuItems }) => {
  const router = useRouter()
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[router.pathname]}>
      {menuItems?.map(item => (
        <Menu.Item key={item.key}>
          <Link href={item.pathname}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
export default NavMenu
