require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const URI = process.env.MONGO_URL;

mongoose
  .connect("mongodb+srv://jagtapsiddhant35:P0jsNGLr8O66iXp4@blackcoffer.o5zbwu8.mongodb.net/BlackCoffer")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json('Hello, Backend Readyyyy!!! ');
  });

const Json = require('./json');
app.use('/api/json', Json);

const PORT = 5000; 

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
app.listen();