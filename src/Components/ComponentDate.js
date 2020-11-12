import React, { useState, useCallback } from 'react';
import DatePicker from 'react-date-picker';
import "./DatePicker.css"
export default function ComponentDate() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <DatePicker className="DatePicker"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
