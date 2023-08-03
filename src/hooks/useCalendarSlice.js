import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveEvent,
  startAddingNewEvent,
  startDeletingEvent,
  startLoadingEvents,
  startUpdatingEvent,
} from '../store'
import { useAuthStore } from './useAuthStore'

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

  const handleLoadEvents = () => {
    dispatch(startLoadingEvents())
  }

  return {
    activeEvent,
    events,
    handleAddNewEvent,
    handleDeleteEvent,
    handleLoadEvents,
    handleSetActiveEvent,
    handleUpdateEvent,
  }
}
