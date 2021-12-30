import { RootState } from '../../../store'

export const orderListResponseSuccess = (state: RootState) =>
  state.order.list.response.success
export const orderListResponseFailure = (state: RootState) =>
  state.order.list.response.failure
