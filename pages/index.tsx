import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Link from 'src/components/Link'
import { Title } from 'src/components/common'

const CoreTitle = styled(Title)`
  margin: 40px 0;
  font-weight: 700;
`

const LinkButton = styled(Button)`
  margin-right: 20px;
`

const Home: NextPage = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh_CN' ? 'en_US' : 'zh_CN')
  }
  return (
    <div>
      <CoreTitle>Nextjs-TS-Antd-Redux-Storybook-Jest-Starter</CoreTitle>
      <LinkButton>
        <Link href="/user">{t('home.user')}</Link>
      </LinkButton>
      <LinkButton>
        <Link href="/articles">{t('home.articles')}</Link>
      </LinkButton>
      <Button onClick={changeLanguage}>{t('home.change_lang')}</Button>
    </div>
  )
}
export default Home
