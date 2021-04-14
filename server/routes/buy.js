const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('buy working');
});

module.exports = router;
