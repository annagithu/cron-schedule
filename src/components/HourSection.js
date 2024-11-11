import React from 'react';

const HourSection = ({ hour, setHour }) => {
  return (
    <div>
      <label>
        Each:
        <input
          type="number"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        hours
      </label>
    </div>
  );
};

export default HourSection;