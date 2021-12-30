import { createAction } from '@reduxjs/toolkit'
import { loginSlice } from '../reducer/login_reducer'
import { TLoginRequest } from '../type/login_type'

const sliceName = loginSlice.name

export const {
  loginResponseSuccessSetter,
  loginResponseFailureSetter,
  loginFlowRequestSetter,
  loginFlowSuccessSetter,
  loginFlowFailureSetter,
} = loginSlice.actions

export const loginSubmit = createAction<TLoginRequest>(
  `${sliceName}/loginSubmit`
)
