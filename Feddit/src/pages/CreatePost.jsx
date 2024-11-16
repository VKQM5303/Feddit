import React, { useState } from 'react';
import '../styles/CreatePost.css';

function CreatePost({ onPostSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [media, setMedia] = useState(null);

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: Date.now(), // Use timestamp as a unique ID
      title,
      body,
      media: media ? URL.createObjectURL(media) : null, // Create a temporary preview URL for media
    };

    onPostSubmit(newPost); // Submit the post
    setTitle(''); // Reset the form
    setBody('');
    setMedia(null);
  };

  return (
    <div className="create-post-page">
      <h2>Create Post</h2>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title*</label>
          <input
            type="text"
            maxLength="300"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Body</label>
          <textarea
            placeholder="Text (optional)"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Attach Images/Videos</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaChange}
          />
          {media && <p>Attached: {media.name}</p>}
        </div>

        <div className="form-buttons">
          <button type="submit" className="post-submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
