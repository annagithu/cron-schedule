import React from 'react';

const MinuteSelection = ({ minute, setMinute, isVisible }) => {
  return (
    <div className="number">
      <label>Each:<input
        type="number"
        disabled={isVisible}
        min="0"
        max="59"
        value={minute}
        onChange={(e) => setMinute(e.target.value)}
      /> minutes</label>
    </div>
  );
};

export default MinuteSelection;