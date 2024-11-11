import React from 'react';

const SelectionDayOfWeek = ({ selectedDay, setdayOfWeek, isVisible }) => {
  return (
    <div>
      <label>Every day:</label>
      <select disabled = {isVisible} value={selectedDay} onChange={(e) => setdayOfWeek(e.target.value)}>
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectionDayOfWeek;


