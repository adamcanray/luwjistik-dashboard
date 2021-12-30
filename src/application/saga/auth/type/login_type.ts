export type TLoginResponseSuccess = {
  data: {
    email: string
    session: string
  }
}
export type TLoginResponseFailure = {
  status: string
  message: string
}

export type TLoginRequest = {
  email: string
  password: string
}
