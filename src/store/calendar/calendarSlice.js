import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = {
  _id: 123422,
  title: '',
  notes: '',
  start: new Date().getTime(),
  end: addHours(new Date(), 2).getTime(),
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
  },
})

// Action creators are generated for each case reducer function
export const { addNewEvent, setActiveEvent } = calendarSlice.actions
