import React from 'react';

const Result = ({ isVisible, data, onChange }) => {
  return (
    <div>
      <h3>Result</h3>
      <input
        value={data}
        id="input"
        onChange={onChange}
        readOnly={!isVisible}
        placeholder="mn h d mh dw" />
    </div>
  );
};

export default Result