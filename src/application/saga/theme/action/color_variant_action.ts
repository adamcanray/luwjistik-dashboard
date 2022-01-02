import { createAction } from '@reduxjs/toolkit'
import { colorVariantSlice } from '../reducer/color_variant_reducer'

const sliceName = colorVariantSlice.name

export const { themeCurrentColorVariantSetter } = colorVariantSlice.actions

export const colorVariant = createAction<string>(`${sliceName}/colorVariant`)
