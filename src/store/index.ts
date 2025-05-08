import { configureStore } from '@reduxjs/toolkit'

import overlayReducer from './reducers/overlay'
import cartReducer from './reducers/cart'
import uiReducer from './reducers/ui'
import modalReducer from './reducers/modal'
import restaurantReducer from './reducers/restaurant'
import checkoutReducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    cart: cartReducer,
    ui: uiReducer,
    modal: modalReducer,
    restaurant: restaurantReducer,
    checkout: checkoutReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
