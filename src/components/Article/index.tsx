import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { IArticleInfo } from 'src/types/articles'
import ArticleCard from './ArticleCard'

const Intro = styled.div`
  font-size: 16px;
`

interface IProps {
  articles: IArticleInfo[]
}

const ArticleList: FC<IProps> = ({ articles }) => {
  const { t } = useTranslation()
  return (
    <>
      <Intro>{t('articles.intro')}</Intro>
      {articles.map(article => (
        <ArticleCard id={article.id} title={article.title} body={article.body} key={article.id} />
      ))}
    </>
  )
}

export default ArticleList
