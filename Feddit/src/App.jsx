import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import ContentPolicy from './pages/ContentPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserAgreement from './pages/UserAgreement';

function App() {
  const mockPosts = [
    {
      id: 1,
      title: 'My First Post',
      body: 'This is the body of my first post!',
      author: 'User123',
      timestamp: 'Nov 16, 2024, 10:00 AM',
      media: '',
      views: 20,
      upvotes: 10,
    },
    {
      id: 2,
      title: 'React Tips and Tricks',
      body: 'Let me share some awesome React tips with you!',
      author: 'ReactDev',
      timestamp: 'Nov 16, 2024, 9:30 AM',
      media: 'https://via.placeholder.com/400',
      views: 50,
      upvotes: 30,
    },
  ];

  return (
    <Router>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home posts={mockPosts} />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage posts={mockPosts} />} />
          <Route path="/content-policy" element={<ContentPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
