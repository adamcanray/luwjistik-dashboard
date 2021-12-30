import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  TLoginResponseFailure,
  TLoginResponseSuccess,
} from '../type/login_type'

interface IloginState {
  response: {
    success: TLoginResponseSuccess
    failure: TLoginResponseFailure
  }
  flow: {
    request: boolean
    success: boolean
    failure: boolean
  }
}

const loginState: IloginState = {
  response: {
    success: {
      data: {
        email: '',
        session: '',
      },
    },
    failure: {
      status: '',
      message: '',
    },
  },
  flow: {
    request: false,
    success: false,
    failure: false,
  },
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginState,
  reducers: {
    loginResponseSuccessSetter: (
      state,
      action: PayloadAction<TLoginResponseSuccess>
    ) => {
      state.response.success = action.payload
    },
    loginResponseFailureSetter: (
      state,
      action: PayloadAction<TLoginResponseFailure>
    ) => {
      state.response.failure = action.payload
    },
    loginFlowRequestSetter: (state, action: PayloadAction<boolean>) => {
      state.flow.request = action.payload
    },
    loginFlowSuccessSetter: (state, action: PayloadAction<boolean>) => {
      state.flow.success = action.payload
    },
    loginFlowFailureSetter: (state, action: PayloadAction<boolean>) => {
      state.flow.failure = action.payload
    },
  },
})

export const loginReducer = loginSlice.reducer
