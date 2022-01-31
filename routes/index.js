const express = require('express');
const router = express.Router();
const app = express();
const baseController = require('../controllers/index')


router.get('/random', baseController.getRandomJSON);
module.exports = router;