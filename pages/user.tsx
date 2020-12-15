import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import UserInfo from 'src/containers/UserInfo'

const User: NextPage = () => (
  <div>
    <Button>This is Button</Button>
    <UserInfo />
  </div>
)

export default User
