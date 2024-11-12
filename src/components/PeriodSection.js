import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const PeriodSection = ({ selectedPeriod, setSelectedPeriod, isVisible }) => {
  return (
    <div>
      
      {['Daily', 'Weekly', 'Monthly', 'Custom'].map((period) => (
        <label key={period}>
          <input className="custom-control radio"
            disabled = {isVisible}
            type="radio"
            value={period}
            checked={selectedPeriod === period}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          />
          {period}
        </label>
      ))}
    </div>
    
  );
};

export default PeriodSection;