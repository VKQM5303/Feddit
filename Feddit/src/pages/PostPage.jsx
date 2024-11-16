import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from '../components/PostDetails';
import '../styles/PostPage.css';

function PostPage() {
  const { id } = useParams();
  const post = { title: 'Sample Post', content: 'This is a sample post.', comments: ['Nice post!', 'Interesting read.'] };

  return <PostDetails title={post.title} content={post.content} comments={post.comments} />;
}

export default PostPage;
