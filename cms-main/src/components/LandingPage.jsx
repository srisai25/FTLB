import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Campus Canteen Manager</h1>
          <p className="hero-subtitle">Skip the lines, order ahead, and enjoy your meal!</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Get Started</Link>
            <Link to="/menu" className="btn btn-secondary">View Menu</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Students enjoying food in canteen" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🕒</div>
            <h3>Save Time</h3>
            <p>No more waiting in long queues. Order ahead and pick up when ready.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Ordering</h3>
            <p>Simple and intuitive interface makes ordering quick and hassle-free.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Diverse Menu</h3>
            <p>From healthy options to comfort food, we have something for everyone.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Cashless Payments</h3>
            <p>Multiple secure payment options including wallet, cards, and UPI.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Sign Up</h3>
              <p>Create an account with your college email ID</p>
              <img src="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Sign up illustration" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Browse Menu</h3>
              <p>Explore daily specials and regular items</p>
              <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1765&q=80" alt="Menu browsing illustration" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Place Order</h3>
              <p>Select items and specify pickup time</p>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Order placing illustration" />
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Pick Up & Enjoy</h3>
              <p>Collect your food without waiting in line</p>
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Food pickup illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The canteen management app has been a game-changer for our busy schedules. Now I can order during my lecture and pick up my lunch without wasting time in queues."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Student testimonial" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Computer Science Student</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"As a professor with limited lunch breaks, this app helps me get my food quickly and focus more on preparing for my next class."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Professor testimonial" />
              <div>
                <h4>Dr. Robert Chen</h4>
                <p>Physics Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Canteen Experience?</h2>
        <p>Join thousands of students and faculty members who are already enjoying the benefits.</p>
        <Link to="/register" className="btn btn-cta">Sign Up Now</Link>
      </section>
    </div>
  );
}

export default LandingPage; 