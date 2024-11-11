import React from 'react';

const MinuteSelection = ({ minute, setMinute }) => {
  return (
    <div>
      <label>Each:
        <input
          type="number"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
        minutes</label>
    </div>
  );
};

export default MinuteSelection;