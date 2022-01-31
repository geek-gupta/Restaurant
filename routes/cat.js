const express = require('express');
const router = express.Router();
const catController = require('../controllers/cats');

router.get('/', catController.getCats);
router.post('/add', catController.addCat);

module.exports = router;