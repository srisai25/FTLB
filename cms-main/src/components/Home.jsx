import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Home component that you can navigate to using React Router.</p>
      <div className="home-content">
        <h2>Getting Started</h2>
        <p>This component is being rendered by the route configuration in App.jsx.</p>
        <p>Feel free to modify this component to suit your needs!</p>
      </div>
    </div>
  );
}

export default Home; 