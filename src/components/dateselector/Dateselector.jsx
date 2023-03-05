import "./Dateselector.css"
import React, { useState } from 'react';

const Dateselector = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-selector">
      <label htmlFor="date-picker">Select a date:</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Dateselector;

