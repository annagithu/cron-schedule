import React from 'react';

const ChangeButton = ({ onClick }) => {
  return <div>
    <button className = "button" onClick={onClick}>Enter</button>
  </div> 
};

export default ChangeButton;