const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  return res.json({
    greetings: 'I am from backend',
  });
});

module.exports = router;
