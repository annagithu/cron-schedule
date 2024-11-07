import React from "react"

const LoadButton = (props) => {
    return (
        <div>
            {props.visible && <button onClick={props.onClick}>Load from file</button>}
        </div>
    )
}

export default LoadButton