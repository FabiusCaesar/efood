import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PratoModel } from '../../models/RestauranteModel'

type CartState = {
  isOpen: boolean
  items: PratoModel[]
}

const initialState: CartState = {
  isOpen: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
    addToCart(state, action: PayloadAction<PratoModel>) {
      state.items.push(action.payload)
      state.isOpen = true
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { closeCart, openCart, addToCart, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
