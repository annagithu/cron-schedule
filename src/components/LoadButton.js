import React from "react"

  const LoadButton = (props) => {
    return (
        <div>
            {props.visible && <button onClick={props.onClick}>LOAD</button>}
        </div>
    )
  }

export default LoadButton