import { addNewEvent } from './calendarSlice'

export const startAddingNewEvent = (calendarEvent) => {
  return async (dispatch) => {
    // TODO: Go to server and save event, response should give us an _id
    dispatch(addNewEvent(calendarEvent))
  }
}
