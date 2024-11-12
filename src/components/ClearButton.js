import React from "react"

  const ClearButton = ({ onClick, isVisible }) => {
    return (
        <div>
            {isVisible && <button onClick={onClick}>Clear</button>}
        </div>
    )
}

export default ClearButton;