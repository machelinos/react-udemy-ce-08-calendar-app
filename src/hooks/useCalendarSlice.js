import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveEvent,
  startAddingNewEvent,
  startDeletingEvent,
  startUpdatingEvent,
} from '../store'

export const useCalendarSlice = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  const handleSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event))
  }

  const handleAddNewEvent = (event) => {
    dispatch(startAddingNewEvent(event))
  }

  const handleDeleteEvent = (event) => {
    dispatch(startDeletingEvent(event))
  }

  const handleUpdateEvent = (event) => {
    dispatch(startUpdatingEvent(event))
  }

  return {
    activeEvent,
    events,
    handleAddNewEvent,
    handleDeleteEvent,
    handleSetActiveEvent,
    handleUpdateEvent,
  }
}
