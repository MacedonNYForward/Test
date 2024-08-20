import React from 'react';

export const Checkbox = ({ checked, onCheckedChange, ...props }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="w-5 h-5 border rounded"
    {...props}
  />
);