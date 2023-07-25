import { useSelector } from 'react-redux'

export const useCalendarSlice = () => {
  const { events } = useSelector((state) => state.calendar)

  return {
    events,
  }
}
