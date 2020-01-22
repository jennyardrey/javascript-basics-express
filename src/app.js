const express = require('express');
const stringsRouter = require('./routes/strings');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);

app.get(`/strings/hello/:string`, (req, res) => {
  res.json({ result: sayHello(req.params.string) }).sendStatus(200);
});
app.get(`/strings/upper/:string`, (req, res) => {
  res.json({ result: uppercase(req.params.string) }).sendStatus(200);
});
app.get(`/strings/lower/:string`, (req, res) => {
  res.json({ result: lowercase(req.params.string) }).sendStatus(200);
});
app.get(`/strings/first-character/:string`, (req, res) => {
  res.json({ result: firstCharacter(req.params.string) }).sendStatus(200);
});
app.get(`/strings/first-characters/:string`, (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) }).sendStatus(200);
});
app.get(`/numbers/add/:number1/and/:number2`, (req, res) => {
  const num1 = Number(req.params.number1);
  const num2 = Number(req.params.number2);
  const added = add(num1, num2);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.sendStatus(400)
    : res.status(200).json({ result: added });
});
app.get(`/numbers/subtract/:number1/from/:number2`, (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const subtracted = subtract(num2, num1);
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: subtracted });
});

app.post(`/numbers/multiply`, (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

app.post(`/numbers/divide`, (req, res) => {
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

app.get(`/numbers/remainder`, (req, res) => {
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

module.exports = app;
