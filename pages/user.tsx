import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import UserInfo from 'src/containers/UserInfo'

const User: NextPage = () => {
  const { i18n } = useTranslation()
  return (
    <div>
      <Button
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'zh_CN' ? 'en_US' : 'zh_CN')
        }}
      >
        Change Lang
      </Button>
      <UserInfo />
    </div>
  )
}
export default User
