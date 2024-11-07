import React, {useState} from 'react'

const PeriodSection = ({ onPeriodChange }) => {
    const [period, setPeriod] = useState('*')
  
    const handleChange = (event) => {
      const newPeriod = event.target.value
      setPeriod(newPeriod)
      onPeriodChange(newPeriod)
    }
  
    return(
        <div>
        <label>
          <input 
            type="radio" 
            value="Weekly"
            checked={period === 'Weekly'}
            onChange={handleChange}
          />
        Weekly
        </label>

        <label>
          <input 
            type="radio" 
            value="Daily"
            checked={period === 'Daily'}
            onChange={handleChange}
          />
        Daily
        </label>

        <label>
          <input 
            type="radio" 
            value="Monthly"
            checked={period === 'Monthly'}
            onChange={handleChange}
          />
        Monthly
        </label>

        <label>
          <input 
            type="radio" 
            value="Custom"
            checked={period === 'Custom'}
            onChange={handleChange}
          />
        Custom
        </label>
        </div>
  )
  }
  
  export default PeriodSection