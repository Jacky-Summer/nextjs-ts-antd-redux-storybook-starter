import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => (
  <div>
    <h1>Home Page</h1>
    <div>
      <Link href="/user">
        <a>Go to User Page</a>
      </Link>
    </div>
  </div>
)

export default Home
