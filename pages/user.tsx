import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import User from 'src/components/User'
import { Title } from 'src/components/common'

const UserPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Title>{t('user.title')}</Title>
      <User />
    </div>
  )
}
export default UserPage
