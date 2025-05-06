import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OverlayState {
  context: 'modal' | 'checkout' | null
  active: boolean
}

const initialState: OverlayState = {
  context: null,
  active: false
}

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setOverlayContext: (
      state,
      action: PayloadAction<OverlayState['context']>
    ) => {
      state.context = action.payload
      state.active = true
    },
    clearOverlay: (state) => {
      state.context = null
      state.active = false
    }
  }
})

export const { clearOverlay, setOverlayContext } = overlaySlice.actions

export default overlaySlice.reducer
