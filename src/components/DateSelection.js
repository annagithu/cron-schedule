import React from 'react';

const DateSelection = ({ date, setDate }) => {
  return (
    <div>
      <label>At:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateSelection;