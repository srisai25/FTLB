import React, { useState } from 'react';
import Message from './Message';

const MessageDemo = () => {
  const [messages, setMessages] = useState([]);
  const [position, setPosition] = useState('bottom-right');
  const [duration, setDuration] = useState(5000);
  const [showIcon, setShowIcon] = useState(true);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const [animate, setAnimate] = useState(true);

  const addMessage = (type) => {
    const id = Date.now();
    const messageText = `This is a ${type} message with ID: ${id}`;
    
    setMessages([
      ...messages,
      {
        id,
        text: messageText,
        type,
        position,
        duration: parseInt(duration),
        showIcon,
        showCloseButton,
        animate
      }
    ]);
  };

  const removeMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <div className="container-custom section">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Message Component Demo</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">Test our beautiful responsive message component with different options.</p>
        
        <div className="bg-white rounded-lg shadow-card p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">Configuration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <select 
                id="position" 
                className="input-field"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-center">Top Center</option>
                <option value="bottom-center">Bottom Center</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration (ms)</label>
              <input 
                type="number" 
                id="duration" 
                className="input-field"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                min="0"
                step="1000"
              />
              <p className="text-xs text-gray-500 mt-1">Set to 0 for no auto-dismiss</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="showIcon" 
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              <label htmlFor="showIcon" className="ml-2 block text-sm text-gray-700">Show Icon</label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="showCloseButton" 
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={showCloseButton}
                onChange={(e) => setShowCloseButton(e.target.checked)}
              />
              <label htmlFor="showCloseButton" className="ml-2 block text-sm text-gray-700">Show Close Button</label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="animate" 
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                checked={animate}
                onChange={(e) => setAnimate(e.target.checked)}
              />
              <label htmlFor="animate" className="ml-2 block text-sm text-gray-700">Animate</label>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => addMessage('info')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Info Message
            </button>
            <button 
              onClick={() => addMessage('success')}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Success Message
            </button>
            <button 
              onClick={() => addMessage('warning')}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Warning Message
            </button>
            <button 
              onClick={() => addMessage('error')}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Error Message
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">Active Messages</h2>
          
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No active messages. Click the buttons above to create messages.</p>
          ) : (
            <ul className="space-y-2">
              {messages.map(msg => (
                <li key={msg.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div>
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      msg.type === 'info' ? 'bg-blue-500' :
                      msg.type === 'success' ? 'bg-green-500' :
                      msg.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></span>
                    <span>{msg.text}</span>
                  </div>
                  <button 
                    onClick={() => removeMessage(msg.id)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Remove message"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Render all active messages */}
      {messages.map(msg => (
        <Message
          key={msg.id}
          message={msg.text}
          type={msg.type}
          duration={msg.duration}
          position={msg.position}
          showIcon={msg.showIcon}
          showCloseButton={msg.showCloseButton}
          animate={msg.animate}
          onClose={() => removeMessage(msg.id)}
        />
      ))}
    </div>
  );
};

export default MessageDemo; 