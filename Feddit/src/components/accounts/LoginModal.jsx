import React, { useState } from 'react';
import "../../styles/LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin }) {
  const [usernameInput, setUsernameInput] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(usernameInput); // Pass the username back to Header
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Log In</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            placeholder="Email or username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            required
          />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-submit">Log In</button>
        </form>
        <div className="login-footer">
          <a href="#">Forgot password?</a>
          <p>New to Feddit? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
