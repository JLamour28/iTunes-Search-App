const express = require('express');
const router = express.Router();
const itunesService = require('../services/itunesService');
const authMiddleware = require('../middleware/auth');
const jwt = require('jsonwebtoken');

// POST route for searching iTunes
router.post('/search', authMiddleware, async (req, res) => {
  try {
    // Extract search term and media type from request body
    const { term, media } = req.body;
    
    // Call iTunes search service
    const results = await itunesService.search(term, media);
    
    // Send search results as JSON response
    res.json(results);
  } catch (error) {
    // Log error and send error response
    console.error('Search error:', error);
    res.status(500).json({ error: 'An error occurred while searching' });
  }
});

// GET route for generating JWT token
router.get('/token', (req, res) => {
  try {
    // Generate JWT token
    // Note: Empty object {} is used as payload, you might want to include user info in a real app
    const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Send token as JSON response
    res.json({ token });
  } catch (error) {
    // Log error and send error response
    console.error('Token generation error:', error);
    res.status(500).json({ error: 'An error occurred while generating the token' });
  }
});

// Export the router for use in other parts of the application
module.exports = router;