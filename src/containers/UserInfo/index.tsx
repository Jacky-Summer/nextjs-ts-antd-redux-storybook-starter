import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileRequest } from 'src/redux/user/actions'
import ProfileCard from 'src/components/ProfileCard'

const UserInfo: FC = () => {
  const user = useSelector((state: Store.RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.profile) {
      dispatch(getProfileRequest({ id: 1 }))
    }
  }, [])

  return (
    <div>
      <ProfileCard profile={user.profile} />
    </div>
  )
}

export default UserInfo
