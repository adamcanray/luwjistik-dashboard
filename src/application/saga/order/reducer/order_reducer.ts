import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  TOrderCreateResponseFailure,
  TOrderCreateResponseSuccess,
  TOrderListResponseFailure,
  TOrderListResponseSuccess,
} from '../type/order_type'

interface IorderState {
  list: {
    response: {
      success: TOrderListResponseSuccess
      failure: TOrderListResponseFailure
    }
    flow: {
      request: boolean
      success: boolean
      failure: boolean
    }
  }
  create: {
    response: {
      success: TOrderCreateResponseSuccess
      failure: TOrderCreateResponseFailure
    }
    flow: {
      request: boolean
      success: boolean
      failure: boolean
    }
  }
}

const orderState: IorderState = {
  list: {
    response: {
      success: {
        data: [],
      },
      failure: {
        status: '',
        message: '',
      },
    },
    flow: {
      request: false,
      success: false,
      failure: false,
    },
  },
  create: {
    response: {
      success: {
        data: {
          order_id: '',
          consignee_name: '',
          consignee_number: '',
          consignee_address: '',
          consignee_postal: '',
          consignee_country: '',
          consignee_city: '',
          consignee_state: '',
          consignee_province: '',
          consignee_email: '',
          length: 0,
          width: 0,
          height: 0,
          weight: 0,
          payment_type: '',
          pickup_contact_name: '',
          pickup_contact_number: '',
          pickup_address: '',
          pickup_postal: '',
          pickup_country: '',
          pickup_city: '',
          pickup_state: '',
          pickup_province: '',
          user_id: '',
        },
      },
      failure: {
        status: '',
        message: '',
      },
    },
    flow: {
      request: false,
      success: false,
      failure: false,
    },
  },
}

export const orderSlice = createSlice({
  name: 'order',
  initialState: orderState,
  reducers: {
    orderListFlowRequestSetter: (state, action: PayloadAction<boolean>) => {
      state.list.flow.request = action.payload
    },
    orderListFlowSuccessSetter: (state, action: PayloadAction<boolean>) => {
      state.list.flow.success = action.payload
    },
    orderListFlowFailureSetter: (state, action: PayloadAction<boolean>) => {
      state.list.flow.failure = action.payload
    },
    orderListResponseSuccessSetter: (
      state,
      action: PayloadAction<TOrderListResponseSuccess>
    ) => {
      state.list.response.success = action.payload
    },
    orderListResponseFailureSetter: (
      state,
      action: PayloadAction<TOrderListResponseFailure>
    ) => {
      state.list.response.failure = action.payload
    },

    orderCreateFlowRequestSetter: (state, action: PayloadAction<boolean>) => {
      state.create.flow.request = action.payload
    },
    orderCreateFlowSuccessSetter: (state, action: PayloadAction<boolean>) => {
      state.create.flow.success = action.payload
    },
    orderCreateFlowFailureSetter: (state, action: PayloadAction<boolean>) => {
      state.create.flow.failure = action.payload
    },
    orderCreateResponseSuccessSetter: (
      state,
      action: PayloadAction<TOrderCreateResponseSuccess>
    ) => {
      state.create.response.success = action.payload
    },
    orderCreateResponseFailureSetter: (
      state,
      action: PayloadAction<TOrderCreateResponseFailure>
    ) => {
      state.create.response.failure = action.payload
    },
  },
})

export const orderReducer = orderSlice.reducer
