const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('buyer working');
});

module.exports = router;
