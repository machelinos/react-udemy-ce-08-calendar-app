import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = {
  _id: 123422,
  title: '',
  notes: '',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Joy Marcelle',
  },
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    addNewEvent: (state, { payload }) => {
      state.events.push(payload)
    },
    deleteEvent: (state, { payload }) => {
      state.events = state.events.filter((event) => event._id !== payload._id)
    },
    updateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload
        }
        return event
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewEvent, deleteEvent, setActiveEvent, updateEvent } =
  calendarSlice.actions
