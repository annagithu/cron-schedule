import React from "react"

const SaveToFileButton = (props) => {
    return (
        <div>
            {props.isVisible && <button className = "button" onClick={props.onClick}>Save to file</button>}
        </div>
    )
  }

export default SaveToFileButton