import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DeliveryFormValues {
  fullName: string
  address: string
  city: string
  zip: string
  number: string
  adressDetails?: string
}

interface PaymentFormValues {
  cardOwner: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

interface CheckoutState {
  deliveryData: DeliveryFormValues
  paymentData: PaymentFormValues
  orderId: string | null
}

const initialState: CheckoutState = {
  deliveryData: {
    fullName: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    adressDetails: ''
  },
  paymentData: {
    cardOwner: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  },
  orderId: null
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    saveDeliveryData(state, action: PayloadAction<DeliveryFormValues>) {
      state.deliveryData = action.payload
    },
    savePaymentData(state, action: PayloadAction<PaymentFormValues>) {
      state.paymentData = action.payload
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload
    }
  }
})

export const { saveDeliveryData, savePaymentData, setOrderId } =
  checkoutSlice.actions
export default checkoutSlice.reducer
