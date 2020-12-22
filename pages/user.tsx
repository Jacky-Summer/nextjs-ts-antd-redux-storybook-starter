import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import User from 'src/components/User'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`

const UserPage: NextPage = () => (
  <Wrapper>
    <User />
  </Wrapper>
)
export default UserPage
