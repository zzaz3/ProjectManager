const express = require('express');

const router = express.Router();

const Project = require('../../models/project');

/* GET projects list. */
router.get('/list', (req, res, next) => {
  Project.find((err, projects) => {
    if (err) {
      return res.send(err);
    }
    return res.json(projects);
  });
});

module.exports = router;
