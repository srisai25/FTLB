import React, { useState } from 'react';
import './App.css'; // Import your CSS here

function App() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="container">
      <h2 className="blur-on-hover">Hover over this text to blur it</h2>

      <img
        className="blur-on-hover"
        src="/img.jpg"
        alt="Arjuna's Chariot"
        style={{ width: '300px', height: 'auto' }}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Click me to focus"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={isFocused ? 'input-focused' : ''}
      />
    </div>
  );
}

export default App;
