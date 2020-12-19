import React, { FC } from 'react'
import styled from 'styled-components'
import { GithubOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import Link from 'src/components/Link'

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  color: #6c757d;
  background: #e9ecef;
  font-size: 16px;
  text-align: center;
`
const FooterText = styled.span``

const GithubLink = styled(Link)`
  margin-left: 6px;
  color: #000;
`

const Footer: FC = () => {
  const { t } = useTranslation()
  return (
    <FooterWrapper>
      <FooterText>
        {t('footer.copyright')}
        <GithubLink href="https://github.com/Jacky-Summer" target="_blank">
          <GithubOutlined />
        </GithubLink>
      </FooterText>
    </FooterWrapper>
  )
}

export default Footer
