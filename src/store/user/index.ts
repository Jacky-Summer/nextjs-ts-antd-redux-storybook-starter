import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  GetProfileRequestPayload,
  GetProfileSuccessPayload,
  GetProfileFailurePayload,
  UserState,
} from './types'

const initialState: UserState = {
  profile: null,
  isLoading: false,
  errors: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProfileRequest: (state, action: PayloadAction<GetProfileRequestPayload>) => {
      state.isLoading = true
      state.errors = []
    },
    getProfileSuccess: (state, action: PayloadAction<GetProfileSuccessPayload>) => {
      state.isLoading = false
      state.profile = action.payload.profile
      state.errors = []
    },
    getProfileFailure: (state, action: PayloadAction<GetProfileFailurePayload>) => {
      state.isLoading = false
      state.errors = action.payload.errors
    },
  },
})

export const { getProfileRequest, getProfileSuccess, getProfileFailure } = userSlice.actions

export const userReducer = userSlice.reducer
