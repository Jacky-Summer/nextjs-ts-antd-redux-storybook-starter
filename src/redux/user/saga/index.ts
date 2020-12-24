import { call, put } from 'redux-saga/effects'
import { getProfileApi } from 'server/api/user'

import { getProfileSuccess, getProfileFailure, getProfileRequestAction } from '..'

export function* updateProfileRequest({ payload }: getProfileRequestAction) {
  const { id } = payload
  try {
    const data = yield call(getProfileApi, id)
    yield put(getProfileSuccess({ profile: data.data }))
  } catch (errors) {
    yield put(getProfileFailure({ errors }))
  }
}
