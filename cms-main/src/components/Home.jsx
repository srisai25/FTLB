import React from 'react';

function Home() {
  return (
    <div className="container-custom section animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Welcome to Campus Canteen</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">Your one-stop solution for campus dining management.</p>
        
        <div className="bg-white rounded-lg shadow-card p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Getting Started</h2>
          <p className="text-gray-600 mb-4">This dashboard provides you with all the tools you need to manage your campus dining experience.</p>
          <p className="text-gray-600">Explore the various features using the navigation menu above!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-card p-6 border-t-4 border-primary animate-slide-in-from-left" style={{ animationDelay: '0.1s' }}>
            <div className="text-primary text-3xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-2">Browse Menu</h3>
            <p className="text-gray-600">Explore today's specials and regular items available at your campus canteen.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 border-t-4 border-secondary animate-slide-in-from-left" style={{ animationDelay: '0.2s' }}>
            <div className="text-secondary text-3xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-2">Place Orders</h3>
            <p className="text-gray-600">Order your meals ahead of time and skip the long queues at the canteen.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 border-t-4 border-primary animate-slide-in-from-left" style={{ animationDelay: '0.3s' }}>
            <div className="text-primary text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Track History</h3>
            <p className="text-gray-600">View your order history and manage your favorite meals for quick reordering.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 