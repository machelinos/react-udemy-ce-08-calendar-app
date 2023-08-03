import Swal from 'sweetalert2'
import { calendarApi } from '../../api'
import { addNewEvent, deleteEvent, updateEvent } from './calendarSlice'

export const startAddingNewEvent = (calendarEvent) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth
    try {
      const { data } = await calendarApi.post('/events', calendarEvent)
      console.log({ data })
      dispatch(addNewEvent({ ...calendarEvent, id: data.event.id, user }))
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'Couldnt save your event, lease try again!', 'error')
    }
  }
}

export const startUpdatingEvent = (calendarEvent) => {
  return async (dispatch) => {
    dispatch(updateEvent(calendarEvent))
  }
}

export const startDeletingEvent = (calendarEvent) => {
  return async (dispatch) => {
    dispatch(deleteEvent(calendarEvent))
  }
}
