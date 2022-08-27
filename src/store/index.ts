import createSagaMiddleware from 'redux-saga'
import rootReducer from 'src/store/rootReducers'
import rootSaga from 'src/store/rootSagas'
import { configureStore } from '@reduxjs/toolkit'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  })
  sagaMiddleware.run(rootSaga)
  return store
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export default store
