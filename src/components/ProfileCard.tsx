import React, { FC, memo } from 'react'

interface Props {
  profile: UserGlobal.Profile | null
}

const ProfileCard: FC<Props> = ({ profile }) => (
  <div>
    <h2>ProfileCard</h2>
    <div>id: {profile?.id}</div>
    <div>username: {profile?.username}</div>
    <div>name: {profile?.name}</div>
  </div>
)

export default memo(ProfileCard)
