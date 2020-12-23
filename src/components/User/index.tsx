import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileRequest } from 'src/redux/user/actions'
import Profile from './Profile'

const User: FC = () => {
  const user = useSelector((state: Store.RootState) => state.user)
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
