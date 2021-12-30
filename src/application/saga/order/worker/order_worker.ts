import { put as putTS, call as callTS } from 'typed-redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { order_action } from '..'
import { rest } from '../../../../infrastructure'

export function* watchOrder() {
  yield takeLatest(order_action.orderList.toString(), orderListWorker)
  yield takeLatest(order_action.orderCreate.toString(), orderCreateWorker)
}

export function* orderListWorker() {
  yield* putTS(order_action.orderListFlowRequestSetter(true))

  const { res, err } = yield* callTS(rest.order.order_res.RestOrderList)

  if (res) {
    yield* putTS(order_action.orderListResponseSuccessSetter(res.data))
    yield* putTS(order_action.orderListFlowSuccessSetter(true))
    yield* putTS(order_action.orderListFlowFailureSetter(false))
  } else {
    yield* putTS(order_action.orderListResponseFailureSetter(err.response.data))
    yield* putTS(order_action.orderListFlowSuccessSetter(false))
    yield* putTS(order_action.orderListFlowFailureSetter(true))
  }

  yield* putTS(order_action.orderListFlowRequestSetter(false))
}

export function* orderCreateWorker(
  action: ReturnType<typeof order_action.orderCreate>
) {
  yield* putTS(order_action.orderListFlowRequestSetter(true))

  const { res, err } = yield* callTS(
    rest.order.order_res.RestOrderCreate,
    action.payload
  )

  if (res) {
    yield* putTS(order_action.orderListResponseSuccessSetter(res.data))
    yield* putTS(order_action.orderListFlowSuccessSetter(true))
    yield* putTS(order_action.orderListFlowFailureSetter(false))
  } else {
    yield* putTS(order_action.orderListResponseFailureSetter(err.response.data))
    yield* putTS(order_action.orderListFlowSuccessSetter(false))
    yield* putTS(order_action.orderListFlowFailureSetter(true))
  }

  yield* putTS(order_action.orderListFlowRequestSetter(false))
}
