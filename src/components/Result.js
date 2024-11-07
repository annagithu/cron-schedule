import React, { useState } from "react"
import SaveToFileButton from "./SaveToFileButton"
import LoadButton from "./LoadButton";

function Result(props) {

    const [value, setValue] = useState('');
    const [isVisible, setVisible] = useState(); 

    let dayOfWeek = props.dayOfWeek
    let month = new Date(props.date).toLocaleString('en-EN', { month: "numeric" })
    let day = new Date(props.date).toLocaleString('en-EN', { day: "numeric" })

    const generateCronString = () => {
        if (props.period == "Monthly") { month = "*"; dayOfWeek = "*" }
        if (props.period == "Daily") { month = "*"; dayOfWeek = "*"; day = "*" }
        if (props.period == "Weekly") { month = "*"; day = "*" }

        return `${props.minute} ${props.hour} ${day} ${month} ${dayOfWeek}`
    }

    const handleLoadButton = () => {
        
    } 


    const handleInputChange = (e) => {
        const inputValue = e.target.value

        const regex = /^([0-5]?\d)\s([01]?\d|2[0-3])\s(0?[1-9]|[12]\d|3[01])\s(0?[1-9]|1[0-2])\s(MON|TUE|WED|THU|FRI|SAT|SUN)$/
        var input = document.getElementById("input")
        if (regex.test(inputValue)) {
            input.style.color = 'green'
            setVisible(true)
        }
        else {
            input.style.color = 'red'
            setVisible(false)
        }
        setValue(inputValue)
    }

    return (
        <div>
            <LoadButton onClick = {handleLoadButton} visible = {isVisible}/>
            <input
                id="input"
                type="text"
                className="input-group"
                value={props.disabled ? generateCronString() : value}
                disabled={props.disabled}
                onChange={handleInputChange}
                placeholder="mn h d mh dw"
            />
            <SaveToFileButton visible={isVisible} />
        </div>
    )
}



export default Result