import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import { getProfileSuccess, getProfileFailure, getProfileRequestAction } from '..'

function getProfileApi(id: number) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.data)
    .catch(reject => reject.data)
}

export function* updateProfileRequest({ payload }: getProfileRequestAction) {
  const { id } = payload
  try {
    const profile = yield call(getProfileApi, id)
    yield put(getProfileSuccess({ profile }))
  } catch (errors) {
    yield put(getProfileFailure({ errors }))
  }
}
