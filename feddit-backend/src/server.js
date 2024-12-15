const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
routes(app);

// Connect to MongoDB
mongoose.connect('mongodb+srv://vuvandovuvan:Blackiscool123@cluster0.rcltcol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log('MongoDB URI:', process.env.MONGODB_URI);

//Test server
app.get('/',(req, res) => {
  return res.send('Server is running');
})