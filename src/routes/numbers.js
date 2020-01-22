const express = require('express');
const numbersController = require('../controllers/numbers');

const router = express.Router();

router.get(`/add/:number1/and/:number2`, numbersController.add);

router.get(`/subtract/:number1/from/:number2`, numbersController.subtract);

router.post(`/multiply`, numbersController.multiply);

router.post(`/divide`, numbersController.divide);

router.get(`/remainder`, numbersController.remainder);

module.exports = router;
