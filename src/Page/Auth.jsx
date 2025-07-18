import React, { useState } from 'react';
import './Auth.css';
import bgvideo from '../assets/carvideo.mp4';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await fetch('/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: loginEmail,
          password: loginPassword
        })
      });
      const data = await response.json();
      if (data.success) {
        // Login successful! Redirect or show welcome message
        alert('Login successful!');
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (err) {
      setLoginError('Network error');
    }
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop className="bg-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`form-container ${isSignUp ? 'sign-up-mode' : ''}`}>
        <div className="signin-signup-box">
          <div className="signin-form">
            <h2>Log in</h2>
            <div className="social-icons">
              <button>G+</button>
              <button>F</button>
              <button>In</button>
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />
              <a href="#">Forgot your password?</a>
              <button className="btn-primary" type="submit">Sign In</button>
              {loginError && <div className="error">{loginError}</div>}
            </form>
          </div>

          <div className="signup-form">
            <h2>Sign Up</h2>
            <div className="social-icons">
              <button>G+</button>
              <button>F</button>
              <button>In</button>
            </div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>

        <div className="side-panel">
          <div className="panel-content">
            {isSignUp ? (
              <>
                <h2>Welcome Back!</h2>
                <p>To keep connected with us please login with your personal info</p>
                <button className="btn-outline" onClick={handleToggle}>Sign In</button>
              </>
            ) : (
              <>
                <h2>Hello, Friend!</h2>
                <p>Register with your personal details to use all features</p>
                <button className="btn-outline" onClick={handleToggle}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
