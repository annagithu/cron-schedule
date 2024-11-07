import React, { useState } from 'react'

const DateSelection = ({ onDateChange }) => {
  const [date, setDate] = useState('*')

  const handleChange = (event) => {
    const newDate = event.target.value
    setDate(newDate)
    onDateChange(newDate)
  }

  return (
    <div>
      <label>
        At: <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} onChange={handleChange} />
      </label>
    </div>
  )
}

export default DateSelection