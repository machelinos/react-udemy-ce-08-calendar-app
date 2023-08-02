import { useDispatch, useSelector } from 'react-redux'
import { startLogin, startRegister } from '../store/auth/thunks'

export const useAuthStore = () => {
  const { errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const initLogin = ({ email, password }) => {
    dispatch(startLogin({ email, password }))
  }

  const initRegister = ({ name, email, password }) => {
    dispatch(startRegister({ name, email, password }))
  }

  return {
    errorMessage,
    initLogin,
    initRegister,
  }
}
