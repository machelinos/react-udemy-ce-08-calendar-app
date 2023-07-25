import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    setModalOpen: (state) => {
      state.isDateModalOpen = true
    },
    setModalClosed: (state) => {
      state.isDateModalOpen = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModalOpen, setModalClosed } = uiSlice.actions
