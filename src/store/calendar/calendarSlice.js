import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = {
  title: 'Event title',
  notes: 'Buy cake',
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
    increment: (state) => {},
  },
})

// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions
