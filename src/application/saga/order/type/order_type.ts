export type TOrder = {
  order_id: string
  consignee_name: string
  consignee_number: string
  consignee_address: string
  consignee_postal: string
  consignee_country: string
  consignee_city: string
  consignee_state: string
  consignee_province: string
  consignee_email: string
  length: number
  width: number
  height: number
  weight: number
  payment_type: string
  pickup_contact_name: string
  pickup_contact_number: string
  pickup_address: string
  pickup_postal: string
  pickup_country: string
  pickup_city: string
  pickup_state: string
  pickup_province: string
  user_id: string
}

export type TOrderListResponseSuccess = {
  data: Array<TOrder>
}
export type TOrderListResponseFailure = {
  status: string
  message: string
}

export type TOrderCreateResponseSuccess = {
  data: TOrder
}

export type TOrderCreateResponseFailure = {
  status: string
  message: string
}

export type TOrderCreateRequest = {
  consignee_name: string
  consignee_number: string // only accept number
  consignee_address: string
  consignee_postal: string // only accept number
  consignee_country: string
  consignee_city: string
  consignee_state: string
  consignee_province: string
  consignee_email: string // valid email
  length: number
  width: number
  height: number
  weight: number
  payment_type: string
  pickup_contact_name: string
  pickup_contact_number: string // only accept number
  pickup_address: string
  pickup_postal: string // only accept number
  pickup_country: string
  pickup_city: string
  pickup_state: string
  pickup_province: string
}
