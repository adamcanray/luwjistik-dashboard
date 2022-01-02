import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IorderState {
  sidebar: {
    isOpen: boolean
  }
}

const orderState: IorderState = {
  sidebar: {
    isOpen: false,
  },
}

export const layoutSlice = createSlice({
  name: 'color_variant',
  initialState: orderState,
  reducers: {
    layoutSidebarIsOpenSetter: (state, action: PayloadAction<boolean>) => {
      state.sidebar.isOpen = action.payload
    },
  },
})

export const layoutReducer = layoutSlice.reducer
