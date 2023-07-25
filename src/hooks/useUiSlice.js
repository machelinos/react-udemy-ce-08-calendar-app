import { useDispatch, useSelector } from 'react-redux'
import { setModalClosed, setModalOpen } from '../store/'

export const useUiSlice = () => {
  const dispatch = useDispatch()
  const { isDateModalOpen } = useSelector((state) => state.ui)

  const openModal = () => {
    dispatch(setModalOpen())
  }

  const closeModal = () => {
    dispatch(setModalClosed())
  }

  return {
    isDateModalOpen,
    openModal,
    closeModal,
  }
}
