import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './accounts/LoginModal';
import '../styles/Header.css';

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  // Function to simulate login
  const handleLogin = () => {
    setUsername('User123');
    setIsLoggedIn(true);
    closeLoginModal();
  };

  // Function to navigate to the Create Post page
  const goToCreatePost = () => {
    navigate('/create-post');
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Feddit</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Feddit" />
        </div>
        <div className="header-buttons">
          {isLoggedIn ? (
            <>
              <span className="username">{username}</span>
              <button className="post-button" onClick={goToCreatePost}>Post</button>
            </>
          ) : (
            <button className="login-button" onClick={openLoginModal}>Log In</button>
          )}
        </div>
      </header>
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} onLogin={handleLogin} />
    </>
  );
}

export default Header;
