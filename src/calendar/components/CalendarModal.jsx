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
  const handleModalClose = () => {
    console.log('Closing modal')
  }

  return (
    <Modal isOpen={true} onRequestClose={handleModalClose} style={customStyles}>
      {children}
    </Modal>
  )
}
