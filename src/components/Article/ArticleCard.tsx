import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Card } from 'antd'
import { IArticleInfo } from 'src/types/articles'

const Text = styled.div`
  font-size: 16px;
  margin: 5px 0;
`

const CardContainer = styled(Card)`
  width: 600px;
  text-align: left;
  margin: 40px auto;
`

const ArticleCard: FC<IArticleInfo> = ({ id, title, body }) => {
  const { t } = useTranslation()

  return (
    <>
      <CardContainer title={title}>
        <Text>
          {t('articles.article_id')}： {id}
        </Text>
        <Text>
          {t('articles.article_body')}：{body}
        </Text>
      </CardContainer>
    </>
  )
}

export default ArticleCard
