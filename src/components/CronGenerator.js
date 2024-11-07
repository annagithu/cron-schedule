import React, { useState } from 'react'
import Result from './Result'
import SelectionDayOfWeek from './SelectionDayOfWeek'
import MinuteSelection from './MinuteSelection'
import HourSelection from './HourSection'
import DateSelection from './DateSelection'
import PeriodSection from './PeriodSection'
import ChangeButton from './ChangeButton'
import { useEffect } from 'react'

const CronGenerator = () => {

    const [period, setSelectedPeriod] = useState('Custom')
    const [selectedMinutes, setSelectedMinutes] = useState('0');
    const [hour, setSelectedHour] = useState('0')
    const [date, setSelectedDate] = useState(new Date().toISOString().substring(0, 10))
    const [dayOfWeek, setDayOfWeek] = useState('MON')

    const [isDisabled, setIsDisabled] = useState(true)
    const [resultValue, setResultValue] = useState('')

    const handleChangeButton = () => {
        setIsDisabled(prev => !prev)
      };

      const handleInputChange = (event) => {
        setResultValue(event.target.value)
      };

      const handleLoad = (loadValue) => {
        setSelectedMinutes(loadValue[0])
        setSelectedHour(loadValue[1])
        setSelectedDate(`${loadValue[3]}-${loadValue[2]}-${new Date().getFullYear().toString()}`) 
        setDayOfWeek(loadValue[4])
        setSelectedPeriod("Custom")
      };

      useEffect(() => { }, [dayOfWeek]);

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
     
        <Result onLoad={handleLoad}
        onChange={handleInputChange} 
        period = {period} 
        dayOfWeek = {dayOfWeek} 
        date = {date} 
        minute = {selectedMinutes} 
        hour = {hour} 
        value={resultValue} 
        disabled={isDisabled}
        />
      
    </div>
  )
}

export default CronGenerator