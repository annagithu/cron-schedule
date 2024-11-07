import React, { useState } from 'react'

const SelectionDayOfWeek = ({ onDayChange }) => {
  const [dayOfWeek, setDayOfWeek] = useState('0')

  const handleChange = (event) => {
    const newDay = event.target.value
    setDayOfWeek(newDay)
    onDayChange(newDay)
  }

  return(
       
    <div>
        <label>Every day:</label>
        <select value={dayOfWeek} onChange={handleChange} defaultChecked = "MON">
            <option>MON</option>
            <option>TUE</option>
            <option>WED</option>
            <option>THU</option>
            <option>FRI</option>
            <option>SAT</option>
            <option>SUN</option>
        </select>
    </div> 
)
}

export default SelectionDayOfWeek


