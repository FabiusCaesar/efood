import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OverlayState {
  context: 'modal' | 'checkout' | null
}

const initialState: OverlayState = {
  context: null
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
    },
    clearOverlay: (state) => {
      state.context = null
    }
  }
})

export const { clearOverlay, setOverlayContext } = overlaySlice.actions

export default overlaySlice.reducer
