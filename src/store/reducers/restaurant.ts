import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Restaurant } from '../../models/Restaurant'

interface RestaurantState {
  isLoading: boolean
  restaurant: Restaurant | null
}

const initialState: RestaurantState = {
  isLoading: false,
  restaurant: null
}

export const fetchRestaurant = createAsyncThunk(
  'restaurante/fetchRestaurant',
  async (id: string) => {
    const response = await fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
    )
    return await response.json()
  }
)

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRestaurant.fulfilled, (state, action) => {
        state.restaurant = action.payload
        state.isLoading = false
      })
      .addCase(fetchRestaurant.rejected, (state) => {
        state.isLoading = false
        state.restaurant = null
      })
  }
})

export default restaurantSlice.reducer
