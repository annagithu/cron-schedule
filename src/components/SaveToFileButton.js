import React from "react"

const SaveToFileButton = (props) => {
    return (
        <div>
            {props.visible && <button onClick={props.onClick}>Save to file</button>}
        </div>
    )
  }

export default SaveToFileButton