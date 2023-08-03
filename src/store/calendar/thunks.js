import Swal from 'sweetalert2'
import { calendarApi } from '../../api'
import {
  addNewEvent,
  deleteEvent,
  setEvents,
  updateEvent,
} from './calendarSlice'
import { convertEventDates } from '../../helpers'

export const startAddingNewEvent = (calendarEvent) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth
    try {
      const { data } = await calendarApi.post('/events', calendarEvent)
      dispatch(
        addNewEvent({
          ...calendarEvent,
          id: data.event.id,
          user: { _id: user.uid, name: user.name },
        }),
      )
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'Couldnt save your event, please try again!', 'error')
    }
  }
}

export const startUpdatingEvent = (calendarEvent) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth
    if (user.uid !== calendarEvent.user._id) {
      return Swal.fire(
        'Not authorized',
        'Only event creator can modify event',
        'error',
      )
    }
    try {
      await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
      dispatch(updateEvent(calendarEvent))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeletingEvent = (calendarEvent) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth
    if (user.uid !== calendarEvent.user._id) {
      return Swal.fire(
        'Not authorized',
        'Only event creator can delete event',
        'error',
      )
    }

    try {
      await calendarApi.delete(`/events/${calendarEvent.id}`, calendarEvent)
      dispatch(deleteEvent(calendarEvent))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startLoadingEvents = () => {
  return async (dispatch) => {
    try {
      const { data } = await calendarApi.get('/events/')
      const events = convertEventDates(data.events)
      dispatch(setEvents(events))
    } catch (error) {
      console.log(error)
    }
  }
}
