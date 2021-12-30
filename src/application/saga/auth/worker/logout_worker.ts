import { put as putTS } from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { login_action, logout_action } from '..'
import { authSessionRemover } from '../../../../core'

export function* watchLogout() {
  yield takeLatest(logout_action.logoutAction.toString(), logoutAction)
}

export function* logoutAction() {
  yield* putTS(login_action.loginFlowSuccessSetter(false))

  yield* putTS(logout_action.logoutFlowRequestSetter(true))

  authSessionRemover()

  yield* putTS(logout_action.logoutFlowRequestSetter(false))
}
