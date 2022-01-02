import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { colorVariantGetter, Tcolors } from '../../../../core'

interface IorderState {
  currentColorVariant: keyof Tcolors
}

const orderState: IorderState = {
  currentColorVariant: colorVariantGetter() as keyof Tcolors,
}

export const colorVariantSlice = createSlice({
  name: 'color_variant',
  initialState: orderState,
  reducers: {
    themeCurrentColorVariantSetter: (state, action: PayloadAction<string>) => {
      state.currentColorVariant = action.payload as keyof Tcolors
    },
  },
})

export const colorVariantReducer = colorVariantSlice.reducer
