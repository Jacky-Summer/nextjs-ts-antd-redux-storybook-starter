import React, { FC } from 'react'
import ArticleList from 'src/components/Article'

interface Props {
  articles: ArticleGlobal.Article[]
}

const ArticleContainer: FC<Props> = ({ articles }) => (
  <>
    <ArticleList articles={articles} />
  </>
)

export default ArticleContainer
