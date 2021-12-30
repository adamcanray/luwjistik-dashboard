import axios from 'axios'
import {
  TLoginRequest,
  TLoginResponseSuccess,
} from '../../../application/saga/auth/type/login_type'

const BASE_URL = 'https://frontend-screening-v1.herokuapp.com'

export function RestLogin(body: TLoginRequest): Promise<any> {
  return axios
    .post(`${BASE_URL}/login`, body, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res: TLoginResponseSuccess) => ({ res }))
    .catch((err: any) => ({ err: err }))
}
