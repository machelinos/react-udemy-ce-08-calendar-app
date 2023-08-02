import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'authenticated' 'not-authenticated',
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    setChecking: (state) => {
      state.status = 'checking'
    },

    loginUser: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = undefined
    },
    logoutUser: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
  },
})

// Action creators are generated for each case reducer function
export const { clearErrorMessage, loginUser, logoutUser, setChecking } =
  authSlice.actions
