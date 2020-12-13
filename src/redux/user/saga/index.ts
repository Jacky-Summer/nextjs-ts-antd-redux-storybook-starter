import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import { getProfileSuccess, getProfileFailure } from '..'
import { GetProfileRequestPayload } from '../types'

function getProfileApi(id: number) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.data)
    .catch(reject => reject.data)
}

export function* updateProfileRequest({ id }: GetProfileRequestPayload) {
  try {
    const profile = yield call(getProfileApi, id)
    yield put(getProfileSuccess({ profile }))
    // ...setProfileAction
  } catch (errors) {
    yield put(getProfileFailure({ errors }))
  }
}
