import React from 'react';

const DateSelection = ({ date, setDate, isVisible }) => {
  return (
    <div>
      <label>At:
        <input
          disabled = {isVisible}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateSelection;