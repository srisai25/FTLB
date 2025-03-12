import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">
            <Link to="/">Campus Canteen</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Sign Up</Link>
          </div>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={
              <div className="temp-page">
                <h1>Menu Page</h1>
                <p>This is a placeholder for the Menu page.</p>
              </div>
            } />
            <Route path="/about" element={
              <div className="temp-page">
                <h1>About Us</h1>
                <p>This is a placeholder for the About page.</p>
              </div>
            } />
            <Route path="/contact" element={
              <div className="temp-page">
                <h1>Contact Us</h1>
                <p>This is a placeholder for the Contact page.</p>
              </div>
            } />
            <Route path="/login" element={
              <div className="temp-page">
                <h1>Login</h1>
                <p>This is a placeholder for the Login page.</p>
              </div>
            } />
            <Route path="/register" element={
              <div className="temp-page">
                <h1>Register</h1>
                <p>This is a placeholder for the Register page.</p>
              </div>
            } />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Campus Canteen Management. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Help</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
