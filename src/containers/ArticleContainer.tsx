import React, { FC } from 'react'
import ArticleList from 'src/components/Article'
import { IArticleInfo } from 'src/types/articles'

interface IProps {
  articles: IArticleInfo[]
}

const ArticleContainer: FC<IProps> = ({ articles }) => (
  <>
    <ArticleList articles={articles} />
  </>
)

export default ArticleContainer
