import { actionTypes, UserAction } from './actions'

type UserState = UserGlobal.UserState

export const initialState: UserState = {
  profile: null,
  isLoading: false,
  errors: [],
}

export const reducers = (state: UserState = initialState, action: UserAction): UserState => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: [],
      }
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: [],
        ...payload,
      }
    case actionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        ...payload,
      }
    default:
      return state
  }
}
