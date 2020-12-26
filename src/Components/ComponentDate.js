import React, { useState, useCallback } from 'react';
import DatePicker from 'react-date-picker';
import "./DatePicker.css"
export default function ComponentDate(props) {
  const [value, onChange] = useState(new Date());
  const onChangeDate=(value)=>
  {
    let{setDate} = props;
    setDate(value)
     onChange(value);
  }
  return (
    <div>
      <DatePicker className="DatePicker"
        onChange={onChangeDate}
        value={value}
      />
    </div>
  );
}
