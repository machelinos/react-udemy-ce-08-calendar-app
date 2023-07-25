import Modal from 'react-modal'
import { useUiSlice } from '../../hooks'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

export const CalendarModal = ({ children }) => {
  const { isDateModalOpen, closeModal } = useUiSlice()
  const handleModalClose = () => {
    closeModal()
  }

  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      isOpen={isDateModalOpen}
      overlayClassName="modal-fondo"
      onRequestClose={handleModalClose}
      style={customStyles}
    >
      {children}
    </Modal>
  )
}
