import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PostPage.css';

function PostPage({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  const [postVotes, setPostVotes] = useState(post ? post.upvotes : 0);
  const [comments, setComments] = useState([
    { text: 'Great post!', votes: 10 },
    { text: 'Thanks for sharing!', votes: 5 },
  ]);
  const [newComment, setNewComment] = useState('');
  const [showShareURL, setShowShareURL] = useState(false);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment.trim(), votes: 0 }]);
      setNewComment('');
    }
  };

  const handleCommentVote = (index, delta) => {
    const updatedComments = [...comments];
    updatedComments[index].votes += delta;
    setComments(updatedComments);
  };

  const handleUpvote = () => {
    setPostVotes(postVotes + 1);
  };

  const handleDownvote = () => {
    setPostVotes(postVotes - 1);
  };

  const handleShareClick = () => {
    setShowShareURL(!showShareURL);
  };

  const handleCopyURL = () => {
    const postURL = `${window.location.origin}/post/${id}`;
    navigator.clipboard.writeText(postURL);
    alert('Post URL copied to clipboard!');
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="post-page">
      <div className="post-details">
        <h1>{post.title}</h1>
        <p className="author-timestamp">
          Posted by <span className="author">{post.author}</span> on {post.timestamp}
        </p>
        <p>{post.body}</p>
        {post.media && (
          <div className="media">
            {post.media.includes('video') ? (
              <video controls src={post.media} alt="Post media" />
            ) : (
              <img src={post.media} alt="Post media" />
            )}
          </div>
        )}
        <div className="post-actions">
          <div className="upvote-section">
            <button className="vote-button upvote" onClick={handleUpvote}>
              ▲
            </button>
            <span className="vote-count">{postVotes}</span>
            <button className="vote-button downvote" onClick={handleDownvote}>
              ▼
            </button>
          </div>
          <button className="comment-icon">💬 {comments.length} Comments</button>
          <button className="share-icon" onClick={handleShareClick}>
            🔗 Share
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
      <div className="comments-section">
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-vote-section">
              <button
                className="vote-button upvote"
                onClick={() => handleCommentVote(index, 1)}
              >
                ▲
              </button>
              <p className="vote-count">{comment.votes}</p>
              <button
                className="vote-button downvote"
                onClick={() => handleCommentVote(index, -1)}
              >
                ▼
              </button>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
        <form className="comment-form" onSubmit={handleAddComment}>
          <textarea
            placeholder="Leave a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}

export default PostPage;
