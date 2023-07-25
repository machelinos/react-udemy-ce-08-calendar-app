import { useEffect, useMemo, useState } from 'react'
import { addHours, differenceInSeconds } from 'date-fns'
import Swal from 'sweetalert2'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useCalendarSlice, useUiSlice } from '../../hooks'

export const CalendarForm = () => {
  const [formValues, setFormValues] = useState({
    title: 'Note Title',
    notes: 'Some notes text',
    start: new Date().getTime(),
    end: addHours(new Date(), 2).getTime(),
  })

  const [hasFormBeeenSubmitted, setHasFormBeeenSubmitted] = useState(false)

  const { activeEvent, handleAddNewEvent } = useCalendarSlice()
  const { closeModal } = useUiSlice()
  const inputClass = useMemo(() => {
    if (!hasFormBeeenSubmitted) return ''

    return formValues.title.length <= 0 ? 'is-invalid' : ''
  }, [hasFormBeeenSubmitted, formValues.title])

  const handleDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    })
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setHasFormBeeenSubmitted(true)

    const timeDifference = differenceInSeconds(formValues.end, formValues.start)

    if (isNaN(timeDifference) || timeDifference <= 0) {
      Swal.fire('Error', 'Invalid dates', 'error')
      return
    }

    if (formValues.title.length <= 0) return

    if (!formValues._id) {
      handleAddNewEvent({ ...formValues, _id: new Date().getTime() })
    } else {
      // Update event
    }
    closeModal()
  }

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent })
    }
  }, [activeEvent])

  return (
    <>
      <h1> New Event </h1>
      <hr />
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="form-group mb-2">
          <label>Start date</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            selected={formValues.start}
            showTimeSelect
            onChange={(event) => {
              handleDateChange(event, 'start')
            }}
          />
        </div>

        <div className="form-group mb-2">
          <label>End date</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            minDate={formValues.start}
            selected={formValues.end}
            showTimeSelect
            onChange={(event) => {
              handleDateChange(event, 'end')
            }}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Title and Notes</label>
          <input
            type="text"
            className={`form-control ${inputClass}`}
            placeholder="Event title"
            name="title"
            autoComplete="off"
            onChange={handleInputChange}
            value={formValues.title}
          />
          <small id="emailHelp" className="form-text text-muted">
            Short description
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional info
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </>
  )
}
