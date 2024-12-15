// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicture: { type: String, default: '' },
  dateOfBirth: { type: Date, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Reference to the Post model
});

module.exports = mongoose.model('User ', UserSchema);