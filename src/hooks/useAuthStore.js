import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../store/auth/thunks'

export const useAuthStore = () => {
  const { errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const initLogin = ({ email, password }) => {
    dispatch(startLogin({ email, password }))
  }

  return {
    errorMessage,
    initLogin,
  }
}
