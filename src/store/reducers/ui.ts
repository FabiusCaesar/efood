import { createSlice } from '@reduxjs/toolkit'

interface UIState {
  step: 'hidden' | 'cart' | 'delivery' | 'payment' | 'success'
}

const initialState: UIState = {
  step: 'hidden'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    goToCart: (state) => {
      state.step = 'cart'
    },
    goToDelivery: (state) => {
      state.step = 'delivery'
    },
    goToPayment: (state) => {
      state.step = 'payment'
    },
    goToSuccess: (state) => {
      state.step = 'success'
    },
    closeSidebar: (state) => {
      state.step = 'hidden'
    }
  }
})

export const {
  closeSidebar,
  goToDelivery,
  goToPayment,
  goToSuccess,
  goToCart
} = uiSlice.actions

export default uiSlice.reducer
