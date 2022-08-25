import {
  GetProfileRequestPayload,
  GetProfileSuccessPayload,
  GetProfileFailurePayload,
} from './types'

// eslint-disable-next-line
export enum actionTypes {
  GET_PROFILE_REQUEST = 'user/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = 'user/GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE = 'user/GET_PROFILE_FAILURE',
}

export interface getProfileRequestAction {
  type: typeof actionTypes.GET_PROFILE_REQUEST
  payload: GetProfileRequestPayload
}

interface getProfileSuccessAction {
  type: typeof actionTypes.GET_PROFILE_SUCCESS
  payload: GetProfileSuccessPayload
}
interface getProfileFailureAction {
  type: typeof actionTypes.GET_PROFILE_FAILURE
  payload: GetProfileFailurePayload
}

export type UserAction = getProfileRequestAction | getProfileSuccessAction | getProfileFailureAction

export const getProfileRequest = (id: GetProfileRequestPayload): UserAction => ({
  type: actionTypes.GET_PROFILE_REQUEST,
  payload: id,
})

export const getProfileSuccess = (profile: GetProfileSuccessPayload): UserAction => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: profile,
})

export const getProfileFailure = (errors: GetProfileFailurePayload): UserAction => ({
  type: actionTypes.GET_PROFILE_FAILURE,
  payload: errors,
})
