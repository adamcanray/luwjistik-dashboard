import { put as putTS } from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { color_variant_action } from '..'
import { colorVariantSetter, Tcolors } from '../../../../core'

export function* watchColorVariant() {
  yield takeLatest(
    color_variant_action.colorVariant.toString(),
    colorVariantWorker
  )
}

export function* colorVariantWorker(
  action: ReturnType<typeof color_variant_action.colorVariant>
) {
  colorVariantSetter(action.payload as keyof Tcolors)

  yield* putTS(
    color_variant_action.themeCurrentColorVariantSetter(action.payload)
  )
}
