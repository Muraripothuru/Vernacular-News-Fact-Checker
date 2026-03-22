const express = require('express');
const router = express.Router();

const { checkFact } = require('../controllers/factController');

router.post('/', checkFact);

module.exports = router;
