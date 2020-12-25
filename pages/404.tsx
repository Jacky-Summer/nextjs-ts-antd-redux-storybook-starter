import React from 'react'
import { NextPage } from 'next'
import Error from 'src/components/Error'

const Error404Page: NextPage = () => <Error statusCode={404} message="Not Found" />

export default Error404Page
