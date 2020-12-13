declare namespace Store {
  interface State {
    user: UserGlobal.UserState
  }
  type RootState = State
}
