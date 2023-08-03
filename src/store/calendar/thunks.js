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
      dispatch(addNewEvent({ ...calendarEvent, id: data.event.id, user }))
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'Couldnt save your event, please try again!', 'error')
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
