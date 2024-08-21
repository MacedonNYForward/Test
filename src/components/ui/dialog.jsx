import React from 'react';
import { Button } from './button';

export function Dialog({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div className="mb-6">{children}</div>
          <div className="flex justify-end space-x-2">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

Dialog.displayName = "Dialog";