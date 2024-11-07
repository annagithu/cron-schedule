import React, { useState } from 'react'
import Result from './Result'
import SelectionDayOfWeek from './SelectionDayOfWeek'
import MinuteSelection from './MinuteSelection'
import HourSelection from './HourSection'
import DateSelection from './DateSelection'
import PeriodSection from './PeriodSection'
import ChangeButton from './ChangeButton'

const CronGenerator = () => {

    const [period, setSelectedPeriod] = useState('Custom')
    const [selectedMinutes, setSelectedMinutes] = useState('0');
    const [hour, setSelectedHour] = useState('0')
    const [date, setSelectedDate] = useState(new Date().toISOString().substring(0, 10))
    const [dayOfWeek, setDayOfWeek] = useState('MON')

    const [isDisabled, setIsDisabled] = useState(true)
    const [resultValue, setResultValue] = useState('')
    const [isVisible, setVisible] = useState(false)

    const handleChangeButton = () => {
        setIsDisabled(prev => !prev)
        setVisible(prev => !prev)
      };

      const handleInputChange = (event) => {
        setResultValue(event.target.value)
        
      };

      const handleDayChange = (newDay) => {
        setDayOfWeek(newDay)
      }
  
      const handleMinuteChange = (newMinutes) => {
        setSelectedMinutes(newMinutes)
      }

      const handleHourChange = (newHour) => {
        setSelectedHour(newHour)
      }

      const handleDateChange = (newDate) => {
        setSelectedDate(newDate) 
      }

      const handleChangePeriod = (newPeriod) => {
       setSelectedPeriod(newPeriod)
      }

  return (
    <div>
        <PeriodSection onPeriodChange={handleChangePeriod}/>

        <SelectionDayOfWeek onDayChange={handleDayChange}/>

        <DateSelection onDateChange = {handleDateChange}/>
     
        <MinuteSelection onMinuteChange={handleMinuteChange} />

        <HourSelection onHourChange={handleHourChange} />

        <ChangeButton onClick={handleChangeButton} />
     
        <Result onChange={handleInputChange} period = {period} dayOfWeek = {dayOfWeek} date = {date} minute = {selectedMinutes} hour = {hour} value={resultValue} disabled={isDisabled}/>
      
    </div>
  )
}

export default CronGenerator