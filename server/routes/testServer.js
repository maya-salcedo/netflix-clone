const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  console.log(process.env.AUTH_DOMAIN);
  return res.json({
    apiKey: process.env.AUTH_DOMAIN,
  });
});

module.exports = router;
