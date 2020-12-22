import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Card } from 'antd'

const Intro = styled.div`
  font-size: 16px;
`

const CardContainer = styled(Card)`
  width: 400px;
  margin: 20px auto;
  text-align: left;
`

const Item = styled.div`
  margin: 10px 0;
`

interface Props {
  profile: UserGlobal.Profile | null
  isLoading: boolean
}

const Profile: FC<Props> = ({ profile, isLoading }) => {
  const { t } = useTranslation()

  return (
    <>
      <Intro>{t('user.intro')}</Intro>
      <CardContainer title={t('user.info')} loading={isLoading}>
        <Item>
          {t('user.id')}：{profile?.id}
        </Item>
        <Item>
          {t('user.username')}：{profile?.username}
        </Item>
        <Item>
          {t('user.name')}：{profile?.name}
        </Item>
      </CardContainer>
    </>
  )
}

export default Profile
