const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const router = express.Router();

router.get(`/add/:number1/and/:number2`, (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  const added = add(num1, num2);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.sendStatus(400)
    : res.status(200).json({ result: added });
});
// eslint-disable-next-line consistent-return
router.get(`/subtract/:number1/from/:number2`, (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const subtracted = subtract(num2, num1);
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: subtracted });
});

// eslint-disable-next-line consistent-return
router.post(`/multiply`, (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

// eslint-disable-next-line consistent-return
router.post(`/divide`, (req, res) => {
  const { a, b } = req.body;
  // console.log(a);

  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  // console.log(a);

  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  // console.log(a);

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  res.status(200).json({ result: divide(a, b) });
});

// eslint-disable-next-line consistent-return
router.get(`/remainder`, (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }

  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  res.status(200).send({ result: remainder(a, b) });
});

module.exports = router;
