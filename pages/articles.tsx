import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'
import ArticleContainer from 'src/containers/ArticleContainer'
import { Title } from 'src/components/common'
import { getArticles } from 'server/api/articles'

interface Props {
  articles: ArticleGlobal.Article[]
}

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Title>{t('articles.title')}</Title>
      <ArticleContainer articles={articles} />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await getArticles()
  const articles: Props['articles'] = res?.data

  return {
    props: {
      articles,
    },
  }
}

export default ArticlesPage
