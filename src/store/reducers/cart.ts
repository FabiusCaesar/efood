import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../models/Restaurant'

type CartState = {
  items: Dish[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Dish>) {
      state.items.push(action.payload)
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

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
