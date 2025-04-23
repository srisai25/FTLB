import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [message, setMessage] = useState('');

  const handleMouseOver = () => {
    setMessage('Mouse is over the element!');
  };

  const handleMouseOut = () => {
    setMessage('Mouse has left the element!');
  };
  return (
    <div className="container">
      <div
        className="message-box"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          padding: '20px',
          border: '2px solid black',
          display: 'inline-block',
          cursor: 'pointer',
        }}
      >
        Hover over me!
      </div>

      <br />

      <p>{message}</p>
    </div>
  );
}
export default App;
