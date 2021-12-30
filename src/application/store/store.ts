import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSageMiddleware from 'redux-saga'
import saga from '../saga'
import { login_reducer, logout_reducer } from '../saga/auth'
import { order_reducer } from '../saga/order'

const rootReducer = combineReducers({
  login: login_reducer.loginReducer,
  logout: logout_reducer.logoutReducer,
  order: order_reducer.orderReducer,
})

const sagaMiddleware = createSageMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { sagaMiddleware }

sagaMiddleware.run(saga)
