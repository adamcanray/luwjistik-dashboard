import { all, fork } from 'redux-saga/effects'

import { login_worker, logout_worker } from './auth'
import { layout_worker } from './layout'
import { order_worker } from './order'
import { color_variant_worker } from './theme'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* saga() {
  yield all([
    fork(order_worker.watchOrder),
    fork(login_worker.watchLogin),
    fork(logout_worker.watchLogout),
    fork(color_variant_worker.watchColorVariant),
    fork(layout_worker.watchLayout),
  ])
}

export default saga
