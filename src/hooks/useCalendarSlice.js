import { useDispatch, useSelector } from 'react-redux'
import { setActiveEvent, startAddingNewEvent } from '../store'

export const useCalendarSlice = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  const handleSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event))
  }

  const handleAddNewEvent = (event) => {
    dispatch(startAddingNewEvent(event))
  }

  return {
    activeEvent,
    events,
    handleAddNewEvent,
    handleSetActiveEvent,
  }
}
