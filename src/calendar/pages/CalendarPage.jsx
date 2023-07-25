import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, CalendarForm, CalendarModal, Navbar } from '../'
import { localizer } from '../../helpers'
import { useCalendarSlice, useUiSlice } from '../../hooks'

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month',
  )

  const { events, handleSetActiveEvent } = useCalendarSlice()

  const { openModal } = useUiSlice()

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      background: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style,
    }
  }

  const handleEventDoubleClick = (event) => {
    console.log(event)
    openModal()
  }

  const handleEventSelect = (event) => {
    handleSetActiveEvent(event)
  }

  const handleViewChange = (event) => {
    console.log(event)
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />

      <Calendar
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={handleEventDoubleClick}
        onSelectEvent={handleEventSelect}
        onView={handleViewChange}
      />

      <CalendarModal>
        <CalendarForm />
      </CalendarModal>
    </>
  )
}
