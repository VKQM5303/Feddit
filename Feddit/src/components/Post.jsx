import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Post.css';

function Post({ id, title, body, author, timestamp, media }) {
  const [votes, setVotes] = useState(0);
  const [showShareURL, setShowShareURL] = useState(false);
  const navigate = useNavigate();

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);
  const handleCommentClick = () => {
    navigate(`/post/${id}`); // Navigate to the detailed post page
  };
  const handleShareClick = () => {
    setShowShareURL(!showShareURL); // Toggle URL visibility
  };
  const handleCopyURL = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${id}`);
    alert('Post URL copied to clipboard!');
  };

  return (
    <div className="post">
      <div className="vote-section">
        <button className="vote-button" onClick={handleUpvote}>▲</button>
        <p className="vote-count">{votes}</p>
        <button className="vote-button" onClick={handleDownvote}>▼</button>
      </div>
      <div className="post-content">
        <h2 onClick={() => navigate(`/post/${id}`)} className="post-title">
          {title}
        </h2>
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

        {/* Comment and Share buttons */}
        <div className="post-actions">
          <button className="comment-button" onClick={handleCommentClick}>
            Comment
          </button>
          <button className="share-button" onClick={handleShareClick}>
            Share
          </button>
          {showShareURL && (
            <div className="share-url">
              <input
                type="text"
                value={`${window.location.origin}/post/${id}`}
                readOnly
              />
              <button onClick={handleCopyURL}>Copy</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
