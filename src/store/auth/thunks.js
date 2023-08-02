import { calendarApi } from '../../api'
import {
  clearErrorMessage,
  loginUser,
  logoutUser,
  setChecking,
} from './authSlice'

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(setChecking())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(loginUser({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(logoutUser('Invalid credentials'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }
}
