import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { getProfileRequest } from 'src/redux/user/actions'
import Profile from './Profile'

const Title = styled.h2`
  font-size: 22px;
`

const User: FC = () => {
  const user = useSelector((state: Store.RootState) => state.user)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    if (!user.profile) {
      dispatch(getProfileRequest({ id: 1 }))
    }
  }, [])

  return (
    <>
      <Title>{t('user.title')}</Title>
      <Profile profile={user.profile} isLoading={user.isLoading} />
    </>
  )
}

export default User
