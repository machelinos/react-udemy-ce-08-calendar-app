import { useDispatch, useSelector } from 'react-redux'
import { startLogin, startRegister } from '../store/auth/thunks'
import { loginUser, logoutUser } from '../store'
import { calendarApi } from '../api'

export const useAuthStore = () => {
  const { errorMessage, status, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const initLogin = ({ email, password }) => {
    dispatch(startLogin({ email, password }))
  }

  const initRegister = ({ name, email, password }) => {
    dispatch(startRegister({ name, email, password }))
  }

  const initLogout = () => {
    localStorage.clear()
    dispatch(logoutUser())
  }

  const checkTokenAuth = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      return dispatch(logoutUser())
    }

    try {
      const { data } = await calendarApi.get('/auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(loginUser({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(logoutUser())
    }
  }

  return {
    errorMessage,
    status,
    user,
    checkTokenAuth,
    initLogin,
    initLogout,
    initRegister,
  }
}
