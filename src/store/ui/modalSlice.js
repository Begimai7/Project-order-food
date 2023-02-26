import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 isOpen: false
}

export const modalSlice = createSlice({
 name: 'modal',
 initialState,
 reducers: {
  openModal(state) {
   state.isOpen = true
  },
  closeModal(state) {
   state.isOpen = initialState
  }
 }
})
export const modalActions = modalSlice.actions