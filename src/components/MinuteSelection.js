import React, { useState } from 'react'

const MinuteSelection = ({ onMinuteChange }) => {
  const [minutes, setMinutes] = useState('0')

  const handleChange = (event) => {
    const newMinutes = event.target.value
    setMinutes(newMinutes)
    onMinuteChange(newMinutes)
  }

  return (
    <div>
      <label>Each: <input type="number" min="0" max="59" value={minutes} onChange={handleChange} /> minutes</label>
    </div>
  )
}

export default MinuteSelection