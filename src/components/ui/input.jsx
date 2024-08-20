import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    className={`w-full p-2 border rounded ${className}`}
    ref={ref}
    {...props}
  />
));