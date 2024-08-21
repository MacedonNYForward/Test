import React from 'react';

export const Button = ({ className, ...props }) => (
  <button
    className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...props}
  />
);