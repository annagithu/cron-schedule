import React, {useState} from "react";

const HourSelection = ({ onHourChange }) => {
    const [hour, setHour] = useState('0')
  
    const handleChange = (event) => {
      const newHour = event.target.value
      setHour(newHour)
      onHourChange(newHour)
    }
  
    return (
      <div>
      <label>Each: <input type="number" min = "0" max = "23" value={hour} onChange={handleChange} /> hours</label>
    </div>
    )
  }
  
  export default HourSelection;