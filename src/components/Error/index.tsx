import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import Link from 'src/components/Link'

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const ErrorContainer = styled.div`
  width: 400px;
  border-radius: 8px;
  border: 1px solid #ececec;
  text-align: center;
  padding: 24px;
`

const BackButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  font-size: 18px;
`

const Message = styled.span`
  font-size: 16px;
`

interface IProps {
  statusCode: number
  message: string
}

const Error: FC<IProps> = ({ statusCode, message }) => {
  const { t } = useTranslation()
  return (
    <ErrorWrapper>
      <ErrorContainer>
        <h2>{statusCode}</h2>
        <h3>{t(`error.${statusCode}`)}</h3>
        <Message>{message}</Message>
        <BackButton type="primary">
          <Link href="/">{t('back_home')}</Link>
        </BackButton>
      </ErrorContainer>
    </ErrorWrapper>
  )
}

export default Error
