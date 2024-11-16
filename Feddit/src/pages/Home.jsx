import React, { useState } from 'react';
import PostFeed from '../components/PostFeed';
import Sidebar from '../components/Sidebar'; // Ensure Sidebar is included for filter interaction
import '../styles/Home.css';

function Home() {
  // Mock-up posts for the feed
  const [posts] = useState([
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
      media: 'https://via.placeholder.com/400', // Example image
      views: 50,
      upvotes: 30,
    },
    {
      id: 3,
      title: 'Video Example Post',
      body: 'Here’s a cool video I wanted to share!',
      author: 'VideoFan',
      timestamp: 'Nov 16, 2024, 8:45 AM',
      media: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', // Example video
      views: 80,
      upvotes: 40,
    },
  ]);

  const [filter, setFilter] = useState('home'); // Default filter is 'home'

  // Function to sort posts based on the current filter
  const getSortedPosts = () => {
    if (filter === 'popular') {
      return [...posts].sort((a, b) => b.views - a.views); // Most viewed
    } else if (filter === 'new') {
      return [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Latest to oldest
    } else if (filter === 'top') {
      return [...posts].sort((a, b) => b.upvotes - a.upvotes); // Most upvoted
    }
    return posts; // Default order
  };

  return (
    <div className="home">
      <Sidebar onFilterChange={setFilter} /> {/* Pass the filter change function */}
      <div className="content">
        <PostFeed posts={getSortedPosts()} /> {/* Display sorted posts */}
      </div>
    </div>
  );
}

export default Home;
