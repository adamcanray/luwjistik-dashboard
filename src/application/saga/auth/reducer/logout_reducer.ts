import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IlogoutState {
  flow: {
    request: boolean
  }
}

const logoutState: IlogoutState = {
  flow: {
    request: false,
  },
}

export const logoutSlice = createSlice({
  name: 'logout',
  initialState: logoutState,
  reducers: {
    logoutFlowRequestSetter: (state, action: PayloadAction<boolean>) => {
      state.flow.request = action.payload
    },
  },
})

export const logoutReducer = logoutSlice.reducer
