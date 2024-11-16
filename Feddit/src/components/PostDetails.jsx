import React from 'react';
import '../styles/PostDetails.css';

function PostDetails({ title, content, comments }) {
  return (
    <div className="post-details">
      <h2>{title}</h2>
      <p>{content}</p>
      <h3 className="comments-title">Comments</h3>
      <div className="comments-section">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
