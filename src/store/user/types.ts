export interface GetProfileRequestPayload {
  id: UserGlobal.Profile['id']
}

export interface GetProfileSuccessPayload {
  profile: UserGlobal.Profile
}

export interface GetProfileFailurePayload {
  errors: unknown
}
