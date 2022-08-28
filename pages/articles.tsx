import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'
import ArticleContainer from 'src/containers/ArticleContainer'
import { Title } from 'src/components/common'
import { getArticles } from 'src/api/articles'
import { IArticleInfo } from 'src/types/articles'

interface IProps {
  articles: IArticleInfo[]
}

const ArticlesPage: NextPage<IProps> = ({ articles }) => {
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
  const articles: IProps['articles'] = res?.data

  return {
    props: {
      articles,
    },
  }
}

export default ArticlesPage
