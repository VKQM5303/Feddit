import React, { useState } from 'react';
import '../styles/Post.css';

function Post({ title, body, author, timestamp, media }) {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);

  return (
    <div className="post">
      <div className="vote-section">
        <button className="vote-button" onClick={handleUpvote}>▲</button>
        <p className="vote-count">{votes}</p>
        <button className="vote-button" onClick={handleDownvote}>▼</button>
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p className="author-timestamp">
          Posted by <span className="author">{author}</span> on {timestamp}
        </p>
        <p>{body}</p>

        {/* Display media if it exists */}
        {media && (
          <div className="media">
            {media.includes('video') ? (
              <video controls src={media} alt="Post media" />
            ) : (
              <img src={media} alt="Post media" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
