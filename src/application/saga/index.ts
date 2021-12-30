import { all, fork } from 'redux-saga/effects'

import { login_worker, logout_worker } from './auth'
import { order_worker } from './order'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* saga() {
  yield all([
    fork(order_worker.watchOrder),
    fork(login_worker.watchLogin),
    fork(logout_worker.watchLogout),
  ])
}

export default saga
