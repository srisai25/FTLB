import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import Message from './components/Message'
import MessageDemo from './components/MessageDemo'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [message, setMessage] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const showNotification = (text, type = 'info') => {
    setMessage({ text, type });
    // Message component will auto-dismiss itself
  }

  const closeMessage = () => {
    setMessage(null);
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 bg-white shadow-nav animate-slide-in-from-top">
          <div className="container-custom flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary transition-all duration-300 hover:scale-105">
                Campus Canteen
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li className="stagger-item animate-fade-in">
                  <Link to="/" className="text-gray-700 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Home</Link>
                </li>
                <li className="stagger-item animate-fade-in">
                  <Link to="/menu" className="text-gray-700 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Menu</Link>
                </li>
                <li className="stagger-item animate-fade-in">
                  <Link to="/about" className="text-gray-700 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">About</Link>
                </li>
                <li className="stagger-item animate-fade-in">
                  <Link to="/contact" className="text-gray-700 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Contact</Link>
                </li>
                <li className="stagger-item animate-fade-in">
                  <Link to="/messages" className="text-gray-700 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Messages</Link>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Sign Up</Link>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-b-lg`}>
            <ul className="px-4 py-2 space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="block p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/messages" 
                  className="block p-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Messages
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200 mt-2">
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/login" 
                    className="w-full btn btn-outline text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="w-full btn btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage showNotification={showNotification} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<MessageDemo />} />
            <Route path="/menu" element={
              <div className="container-custom section text-center animate-slide-up">
                <h1 className="text-4xl font-bold mb-6 text-primary">Our Menu</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our wide range of delicious campus food options. From breakfast to dinner, we've got you covered.</p>
                <div className="mt-8 p-12 bg-light-gray rounded-lg shadow-md">
                  <p className="text-xl">Menu content coming soon! 🍔</p>
                </div>
              </div>
            } />
            <Route path="/about" element={
              <div className="container-custom section text-center animate-slide-up">
                <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Learn more about Campus Canteen, our history, mission, and values.</p>
                <div className="mt-8 p-12 bg-light-gray rounded-lg shadow-md">
                  <p className="text-xl">About content coming soon! 🏫</p>
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="container-custom section text-center animate-slide-up">
                <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions or feedback? We'd love to hear from you!</p>
                <div className="mt-8 p-12 bg-light-gray rounded-lg shadow-md">
                  <p className="text-xl">Contact form coming soon! 📞</p>
                </div>
              </div>
            } />
            <Route path="/login" element={
              <div className="container-custom section text-center animate-slide-up">
                <h1 className="text-4xl font-bold mb-6 text-primary">Login</h1>
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-card">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input type="password" id="password" name="password" className="input-field" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                      </div>
                      <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full btn btn-primary">Sign in</button>
                  </form>
                </div>
              </div>
            } />
            <Route path="/register" element={
              <div className="container-custom section text-center animate-slide-up">
                <h1 className="text-4xl font-bold mb-6 text-primary">Sign Up</h1>
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-card">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-left text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" id="first-name" name="first-name" className="input-field" placeholder="First name" />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-left text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" id="last-name" name="last-name" className="input-field" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input type="password" id="password" name="password" className="input-field" placeholder="Create a password" />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-left text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                      <input type="password" id="confirm-password" name="confirm-password" className="input-field" placeholder="Confirm your password" />
                    </div>
                    <div className="flex items-center">
                      <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a></label>
                    </div>
                    <button type="submit" className="w-full btn btn-primary">Create Account</button>
                  </form>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-4">Campus Canteen</h3>
                <p className="text-gray-300 mb-4">Serving delicious meals to students and faculty since 2020.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <address className="not-italic text-gray-300">
                  <p className="mb-2">123 University Ave</p>
                  <p className="mb-2">Campus Building, Room 456</p>
                  <p className="mb-2">City, State 12345</p>
                  <p className="mb-2">Email: info@campuscanteen.com</p>
                  <p>Phone: (123) 456-7890</p>
                </address>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Campus Canteen Management. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Message notification */}
        {message && (
          <Message 
            message={message.text}
            type={message.type}
            onClose={closeMessage}
            position="bottom-right"
            animate={true}
          />
        )}
      </div>
    </Router>
  )
}

export default App
