import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
  AddNewFabButton,
  CalendarEvent,
  CalendarForm,
  CalendarModal,
  Navbar,
} from '../'
import { getEnvVariables, localizer } from '../../helpers'
import { useCalendarSlice, useUiSlice } from '../../hooks'
import { useEffect } from 'react'

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month',
  )

  const { events, handleLoadEvents, handleSetActiveEvent } = useCalendarSlice()

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
    openModal()
  }

  const handleEventSelect = (event) => {
    handleSetActiveEvent(event)
  }

  const handleViewChange = (event) => {
    localStorage.setItem('lastView', event)
  }

  useEffect(() => {
    handleLoadEvents()
  }, [])

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

      <AddNewFabButton />
    </>
  )
}
