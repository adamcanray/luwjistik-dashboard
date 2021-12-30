import { createAction } from '@reduxjs/toolkit'
import { orderSlice } from '../reducer/order_reducer'
import { TOrderCreateRequest } from '../type/order_type'

const sliceName = orderSlice.name

export const {
  orderListFlowFailureSetter,
  orderListFlowRequestSetter,
  orderListFlowSuccessSetter,
  orderListResponseFailureSetter,
  orderListResponseSuccessSetter,
  orderCreateFlowFailureSetter,
  orderCreateFlowRequestSetter,
  orderCreateFlowSuccessSetter,
  orderCreateResponseFailureSetter,
  orderCreateResponseSuccessSetter,
} = orderSlice.actions

export const orderList = createAction(`${sliceName}/orderList`)
export const orderCreate = createAction<TOrderCreateRequest>(
  `${sliceName}/orderCreate`
)
