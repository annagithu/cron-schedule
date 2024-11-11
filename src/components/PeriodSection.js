import React from 'react';

const PeriodSection = ({ selectedPeriod, setSelectedPeriod }) => {
  return (
    <div>
      {['Daily', 'Weekly', 'Monthly', 'Custom'].map((period) => (
        <label key={period}>
          <input
            type="radio"
            value={period}
            checked={selectedPeriod === period}
            onChange={() => setSelectedPeriod(period)}
          />
          {period}
        </label>
      ))}
    </div>
  );
};

export default PeriodSection;