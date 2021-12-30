import { createAction } from '@reduxjs/toolkit'
import { logoutSlice } from '../reducer/logout_reducer'

const sliceName = logoutSlice.name

export const { logoutFlowRequestSetter } = logoutSlice.actions

export const logoutAction = createAction(`${sliceName}/logoutAction`)
