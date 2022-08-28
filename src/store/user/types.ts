import { IProfile } from 'src/types/user'

export interface GetProfileRequestPayload {
  id: IProfile['id']
}

export interface GetProfileSuccessPayload {
  profile: IProfile
}

export interface GetProfileFailurePayload {
  errors: unknown
}

export interface UserState {
  profile: IProfile | null
  isLoading: boolean
  errors: unknown
}
