import React from 'react';
import Post from './Post';

function PostFeed({ posts }) {
  return (
    <div className="post-feed">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            timestamp={post.timestamp}
            media={post.media}
          />
        ))
      ) : (
        <p>No posts yet. Be the first to post!</p>
      )}
    </div>
  );
}

export default PostFeed;
