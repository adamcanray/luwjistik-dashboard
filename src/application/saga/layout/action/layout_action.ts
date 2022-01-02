import { createAction } from '@reduxjs/toolkit'
import { layoutSlice } from '../reducer/layout_reducer'

const sliceName = layoutSlice.name

export const { layoutSidebarIsOpenSetter } = layoutSlice.actions

export const sidebarOnOpen = createAction(`${sliceName}/sidebarOnOpen`)
export const sidebarOnClose = createAction(`${sliceName}/sidebarOnClose`)
