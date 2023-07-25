import { addHours } from 'date-fns'
import { useCalendarSlice, useUiSlice } from '../../hooks'

export const AddNewFabButton = () => {
  const { openModal } = useUiSlice()
  const { handleSetActiveEvent } = useCalendarSlice()

  const handleAddNewEvent = () => {
    handleSetActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Joy Marcelle',
      },
    })
    openModal()
  }
  return (
    <>
      <button className="btn btn-primary fab" onClick={handleAddNewEvent}>
        <i className="fas fa-plus"></i>
      </button>
    </>
  )
}
