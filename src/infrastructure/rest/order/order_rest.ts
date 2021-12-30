import axios from 'axios'
import {
  TOrderCreateRequest,
  TOrderCreateResponseSuccess,
  TOrderListResponseSuccess,
} from '../../../application/saga/order/type/order_type'
import { authSessionGetter } from '../../../core'

const BASE_URL = 'https://frontend-screening-v1.herokuapp.com'

export function RestOrderList(): Promise<any> {
  return axios
    .get(`${BASE_URL}/order`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authSessionGetter() || '',
      },
    })
    .then((res: TOrderListResponseSuccess) => ({ res }))
    .catch((err: any) => ({ err: err }))
}

export function RestOrderCreate(body: TOrderCreateRequest): Promise<any> {
  return axios
    .post(`${BASE_URL}/order`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authSessionGetter() || '',
      },
    })
    .then((res: TOrderCreateResponseSuccess) => ({ res }))
    .catch((err: any) => ({ err: err }))
}
