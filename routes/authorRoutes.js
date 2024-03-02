const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// POST request to create a new author
router.post('/authors', async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET request to fetch all authors
router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
