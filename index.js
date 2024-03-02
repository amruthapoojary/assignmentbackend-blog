const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
const uri = 'mongodb+srv://amruthapoojary2001:Ammu%402810@cluster0.lavlbkg.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Connect to MongoDB

// Routes
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');
app.use('/api', authorRoutes);
app.use('/api', blogRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



