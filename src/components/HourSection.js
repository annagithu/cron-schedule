import React from 'react';

const HourSection = ({ hour, setHour, isVisible }) => {
  return (
    <div className="number">
      <label>
        Each:
        <input
          type="number"
          disabled={isVisible}
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