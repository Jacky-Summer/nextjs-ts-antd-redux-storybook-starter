import { all, takeLatest } from 'redux-saga/effects'

import { actionTypes } from 'src/redux/user/actions'
import { updateProfileRequest } from 'src/redux/user/saga'

function* rootSaga() {
  // @ts-ignore
  yield all([takeLatest(actionTypes.GET_PROFILE_REQUEST, updateProfileRequest)])
}

export default rootSaga
