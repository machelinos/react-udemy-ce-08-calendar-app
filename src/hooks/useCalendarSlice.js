import { useDispatch, useSelector } from 'react-redux'
import { setActiveEvent } from '../store'

export const useCalendarSlice = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  const handleSetActiveEvent = (event) => {
    dispatch(setActiveEvent(event))
  }

  return {
    activeEvent,
    events,
    handleSetActiveEvent,
  }
}
