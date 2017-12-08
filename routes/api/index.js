const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ text: 'Project management application RESTful API test.' });
});

module.exports = router;
