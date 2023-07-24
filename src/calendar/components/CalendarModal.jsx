import { useState } from 'react'
import Modal from 'react-modal'

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
  const [isOpen, setIsOpen] = useState(true)
  const handleModalClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      isOpen={isOpen}
      overlayClassName="modal-fondo"
      onRequestClose={handleModalClose}
      style={customStyles}
    >
      {children}
    </Modal>
  )
}
