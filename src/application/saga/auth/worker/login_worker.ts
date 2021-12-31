import { login_action, login_selector } from '..'
import {
  put as putTS,
  select as selectTS,
  call as callTS,
} from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { authSessionSetter, toMd5 } from '../../../../core'
import { rest } from '../../../../infrastructure'

export function* watchLogin() {
  yield takeLatest(login_action.loginSubmit.toString(), loginSubmit)
}

export function* loginSubmit(
  action: ReturnType<typeof login_action.loginSubmit>
) {
  yield* putTS(login_action.loginFlowRequestSetter(true))

  const { res, err } = yield* callTS(rest.auth.login_rest.RestLogin, {
    email: action.payload.email,
    password: toMd5(action.payload.password),
  })

  if (res) {
    yield* putTS(login_action.loginResponseSuccessSetter(res.data))

    yield* putTS(login_action.loginFlowSuccessSetter(true))

    const session = yield* selectTS(
      login_selector.loginResponseSuccessDataSessionSelector
    )

    const expires = new Date(new Date().getTime() + 60 * 60 * 1000)

    authSessionSetter(session, { expires: expires })
  } else {
    yield* putTS(login_action.loginResponseFailureSetter(err.response.data))

    yield* putTS(login_action.loginFlowFailureSetter(true))
  }

  yield* putTS(login_action.loginFlowRequestSetter(false))
  yield* putTS(login_action.loginFlowSuccessSetter(false))
  yield* putTS(login_action.loginFlowFailureSetter(false))
}
