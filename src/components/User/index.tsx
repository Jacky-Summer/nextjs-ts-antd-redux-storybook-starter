import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store'
import { getProfileRequest } from 'src/store/user'
import Profile from './Profile'

const User: FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.profile) {
      dispatch(getProfileRequest({ id: 1 }))
    }
  }, [])

  return (
    <>
      <Profile profile={user.profile} isLoading={user.isLoading} />
    </>
  )
}

export default User
