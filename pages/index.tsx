import React from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import Link from 'src/components/Link'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  margin: 40px 0;
  font-size: 30px;
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
    <Wrapper>
      <Title>Nextjs-TS-Antd-Redux-Storybook-Jest-Starter</Title>
      <LinkButton>
        <Link href="/user">{t('home.user')}</Link>
      </LinkButton>
      <LinkButton>
        <Link href="/articles">{t('home.articles')}</Link>
      </LinkButton>
      <Button onClick={changeLanguage}>{t('home.change_lang')}</Button>
    </Wrapper>
  )
}
export default Home
