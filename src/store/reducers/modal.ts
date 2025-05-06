import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../models/Restaurant'

interface ModalState {
  isModalOpen: boolean
  selectedDish: Dish | null
  isRequestingClose: boolean
}

const initialState: ModalState = {
  isModalOpen: false,
  selectedDish: null,
  isRequestingClose: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    requestCloseModal: (state) => {
      state.isRequestingClose = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.selectedDish = null
      state.isRequestingClose = false
    },
    setSelectedDish: (state, actions: PayloadAction<Dish | null>) => {
      state.selectedDish = actions.payload
    }
  }
})

export const { closeModal, openModal, setSelectedDish, requestCloseModal } =
  modalSlice.actions

export default modalSlice.reducer
