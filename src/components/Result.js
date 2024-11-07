import React, { useState } from "react"
import SaveToFileButton from "./SaveToFileButton"
import LoadButton from "./LoadButton";

function Result(props) {

    const [value, setValue] = useState('');
    const [isVisible, setVisible] = useState(props.disabled ? false : true); 

    let dayOfWeek = props.dayOfWeek
    let month = new Date(props.date).toLocaleString('en-EN', { month: "numeric" })
    let day = new Date(props.date).toLocaleString('en-EN', { day: "numeric" })

    const generateCronString = () => {
        if (props.period == "Monthly") { month = "*"; dayOfWeek = "*" }
        if (props.period == "Daily") { month = "*"; dayOfWeek = "*"; day = "*" }
        if (props.period == "Weekly") { month = "*"; day = "*" }

        return `${props.minute} ${props.hour} ${day} ${month} ${dayOfWeek}`
    }

    const handleLoad = () => {
        if (isVisible) {
          const inputArray = value.split(' '); 
          props.onLoad(inputArray);
        } else {
          alert('Некорректный формат. Пожалуйста, используйте формат "mn h d mh dw".');
        }
      };


    const handleInputChange = (e) => {
        const inputValue = e.target.value

        const regex = /^(?:(\*|[0-5]?[0-9]) (\*|[01]?[0-9]|2[0-3]) (\*|[0-2]?[0-9]|3[01]) (\*|0?[1-9]|1[0-2]) (\*|MON|TUE|WED|THU|FRI|SAT|SUN))?$/
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
            <LoadButton onLoad={handleLoad} visible = {isVisible}/>
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