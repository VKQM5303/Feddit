import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ContentPolicy from './pages/ContentPolicy'; // Import existing components
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import existing components
import UserAgreement from './pages/UserAgreement'; // Import existing components

// Add placeholder components for navigation
const Popular = () => <div>Popular Page</div>;
const New = () => <div>New Page</div>;
const Top = () => <div>Top Page</div>;

function App() {
  return (
    <Router>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/new" element={<New />} />
          <Route path="/top" element={<Top />} />
          <Route path="/content-policy" element={<ContentPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
