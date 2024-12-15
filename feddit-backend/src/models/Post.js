// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: false },
  media: { type: String, required: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true }, // Reference to the User model
  timestamp: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] // Reference to the Comment model
});

module.exports = mongoose.model('Post', postSchema);