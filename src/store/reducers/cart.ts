import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../models/Restaurant'

type CartState = {
  isOpen: boolean
  items: Dish[]
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
    addToCart(state, action: PayloadAction<Dish>) {
      state.items.push(action.payload)
      state.isOpen = true
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const indexToRemove = state.items.findIndex(
        (item) => item.id === action.payload
      )

      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1)
      }
    }
  }
})

export const { closeCart, openCart, addToCart, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer
