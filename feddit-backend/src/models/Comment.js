// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: { type: String, required: true }, // Body of the comment
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true }, // Reference to the User model
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to the Post model
  timestamp: { type: Date, default: Date.now }, // Timestamp for when the comment was created
  upvotes: { type: Number, default: 0 }, // Number of upvotes for the comment
});

module.exports = mongoose.model('Comment', commentSchema);