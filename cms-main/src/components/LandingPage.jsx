import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPage({ showNotification }) {
  useEffect(() => {
    // Show a welcome message when the component mounts
    if (showNotification) {
      showNotification('Welcome to Campus Canteen! Explore our services and delicious food options.', 'info');
    }
  }, [showNotification]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-lg animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Campus Canteen Manager
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Skip the lines, order ahead, and enjoy your meal!
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/login" className="btn btn-primary group animate-bounce-light">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link to="/menu" className="btn btn-outline text-white border-white hover:bg-white/10">
                  View Menu
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-2xl lg:translate-x-12 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Students enjoying food in canteen" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Platform?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-card p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl stagger-item animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                🕒
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Save Time</h3>
              <p className="text-gray-600">No more waiting in long queues. Order ahead and pick up when ready.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-card p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl stagger-item animate-fade-in">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Ordering</h3>
              <p className="text-gray-600">Simple and intuitive interface makes ordering quick and hassle-free.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-card p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl stagger-item animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                🍽️
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Diverse Menu</h3>
              <p className="text-gray-600">From healthy options to comfort food, we have something for everyone.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-card p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl stagger-item animate-fade-in">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cashless Payments</h3>
              <p className="text-gray-600">Multiple secure payment options including wallet, cards, and UPI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {/* Step 1 */}
            <div className="relative animate-slide-in-from-left" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">1</div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-card h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                    alt="Sign up illustration" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Sign Up</h3>
                  <p className="text-gray-600">Create an account with your college email ID</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative animate-slide-in-from-left" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">2</div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-card h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1765&q=80" 
                    alt="Menu browsing illustration" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Browse Menu</h3>
                  <p className="text-gray-600">Explore daily specials and regular items</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative animate-slide-in-from-left" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">3</div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-card h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                    alt="Order placing illustration" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Place Order</h3>
                  <p className="text-gray-600">Select items and specify pickup time</p>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative animate-slide-in-from-left" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">4</div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-card h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                    alt="Food pickup illustration" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Pick Up & Enjoy</h3>
                  <p className="text-gray-600">Collect your food without waiting in line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg relative overflow-hidden group animate-fade-in">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <div className="mb-6 relative">
                <svg className="text-primary/20 w-16 h-16 absolute -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 relative z-10">
                  "The canteen management app has been a game-changer for our busy schedules. Now I can order during my lecture and pick up my lunch without wasting time in queues."
                </p>
              </div>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Student testimonial" className="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">Computer Science Student</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg relative overflow-hidden group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <div className="mb-6 relative">
                <svg className="text-secondary/20 w-16 h-16 absolute -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 relative z-10">
                  "As a professor with limited lunch breaks, this app helps me get my food quickly and focus more on preparing for my next class."
                </p>
              </div>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Professor testimonial" className="w-12 h-12 rounded-full mr-4 border-2 border-secondary" />
                <div>
                  <h4 className="font-semibold">Dr. Robert Chen</h4>
                  <p className="text-gray-400 text-sm">Physics Department</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/5 rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-secondary/90 text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse-light">Ready to Transform Your Canteen Experience?</h2>
            <p className="text-xl mb-8 text-white/90">Join thousands of students and faculty members who are already enjoying the benefits.</p>
            <Link to="/register" className="btn bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-300 shadow-lg">
              Sign Up Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
}

export default LandingPage; 