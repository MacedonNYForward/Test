import React from 'react';

export const Select = ({ value, onValueChange, children, ...props }) => (
  <select
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    className="w-full p-2 border rounded"
    {...props}
  >
    {children}
  </select>
);