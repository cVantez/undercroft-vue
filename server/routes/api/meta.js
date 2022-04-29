const express = require('express');
const linksConfig = require('#config/links');

const router = express.Router();

router.get('/links', (req, res) => {
  res.send(linksConfig);
});

module.exports = router;
