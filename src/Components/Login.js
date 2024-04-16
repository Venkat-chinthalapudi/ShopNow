import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // State to track password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password validation
    if (username.trim() === 'Venkat@007' && password.trim() === 'Venkat') {
      onLogin(); // Trigger login
      navigate('/shop'); // Redirect to Shop page
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div className="custom-login-container">
      <div className="custom-image-container">
        <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?t=st=1712926120~exp=1712929720~hmac=587136b0df966ef08ec0bd9c4a1ecd4a6a02bcbf1815c21f26aeb8e029f29972&w=360" alt="Login Image" />
      </div>
      <div className="custom-login-form-container">
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="custom-input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="custom-input-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'} // Show password if showPassword is true
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'} {/* Change button text based on password visibility state */}
            </button>
          </div>
          <button className='custom-submit' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
