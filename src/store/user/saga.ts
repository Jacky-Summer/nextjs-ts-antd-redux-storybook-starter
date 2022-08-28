import { call, put, takeLatest } from 'redux-saga/effects'
import { getProfileApi } from 'src/api/user'
import { getProfileRequest } from 'src/store/user'
import { GetProfileRequestPayload } from 'src/store/user/types'
import { PayloadAction } from '@reduxjs/toolkit'

import { getProfileSuccess, getProfileFailure } from '.'

export function* updateProfileRequest(action: PayloadAction<GetProfileRequestPayload>) {
  try {
    const data = yield call(getProfileApi, action.payload.id)
    yield put(getProfileSuccess({ profile: data.data }))
  } catch (errors: unknown) {
    yield put(getProfileFailure({ errors }))
  }
}

export default function* userSaga() {
  yield takeLatest(getProfileRequest.type, updateProfileRequest)
}
