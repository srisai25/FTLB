import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Message = ({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose,
  position = 'bottom-right',
  showIcon = true,
  showCloseButton = true,
  animate = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); // Match this with the transition duration
  };

  if (!isVisible) return null;

  // Define position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  // Define type-specific classes and icons
  const typeClasses = {
    info: 'border-blue-500 bg-blue-50 text-blue-800',
    success: 'border-green-500 bg-green-50 text-green-800',
    warning: 'border-yellow-500 bg-yellow-50 text-yellow-800',
    error: 'border-red-500 bg-red-50 text-red-800',
  };

  const icons = {
    info: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    success: (
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    ),
  };

  // Define animation classes
  const animationClasses = animate 
    ? isLeaving 
      ? 'animate-fade-out' 
      : position.includes('top') 
        ? 'animate-slide-in-from-top' 
        : 'animate-slide-up'
    : '';

  return (
    <div 
      className={`fixed ${positionClasses[position]} max-w-sm z-50 transform transition-all duration-300 ${isLeaving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${animationClasses}`}
      role="alert"
    >
      <div className={`rounded-lg shadow-lg border-l-4 ${typeClasses[type]} p-4 flex items-start`}>
        {showIcon && (
          <div className="flex-shrink-0 mr-3">
            {icons[type]}
          </div>
        )}
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {showCloseButton && (
          <button 
            onClick={handleClose}
            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center']),
  showIcon: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  animate: PropTypes.bool
};

export default Message; 