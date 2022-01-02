import { put as putTS } from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { layout_action } from '..'

export function* watchLayout() {
  yield takeLatest(layout_action.sidebarOnOpen.toString(), sidebarOnOpenWorker)
  yield takeLatest(
    layout_action.sidebarOnClose.toString(),
    sidebarOnCloseWorker
  )
}

export function* sidebarOnOpenWorker() {
  yield* putTS(layout_action.layoutSidebarIsOpenSetter(true))
}
export function* sidebarOnCloseWorker() {
  yield* putTS(layout_action.layoutSidebarIsOpenSetter(false))
}
