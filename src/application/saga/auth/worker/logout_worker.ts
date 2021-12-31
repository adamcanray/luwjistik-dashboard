import { put as putTS } from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { logout_action } from '..'
import { authSessionRemover } from '../../../../core'

export function* watchLogout() {
  yield takeLatest(logout_action.logoutAction.toString(), logoutAction)
}

export function* logoutAction() {
  yield* putTS(logout_action.logoutFlowRequestSetter(true))

  authSessionRemover()

  yield* putTS(logout_action.logoutFlowRequestSetter(false))
}
