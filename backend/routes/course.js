const express = require('express');
const router = express.Router();

// Example course data
const courses = [
  { id: 1, title: 'Intro to HTML', description: 'Learn HTML from scratch' },
  { id: 2, title: 'CSS Basics', description: 'Learn CSS for styling' }
];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

module.exports = router;
