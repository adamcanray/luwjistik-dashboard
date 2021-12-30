import { RootState } from '../../../store'

export const loginResponseSuccessDataSessionSelector = (state: RootState) =>
  state.login.response.success.data.session
