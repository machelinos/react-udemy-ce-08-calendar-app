import { useState } from 'react'
import { addHours } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const CalendarForm = () => {
  const [formValues, setFormValues] = useState({
    title: 'Note Title',
    notes: 'Some notes text',
    start: new Date(),
    end: addHours(new Date(), 2),
  })

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

  return (
    <>
      <h1> New Event </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Star date</label>
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
            className="form-control"
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
