const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const router = express.Router();

router.get(`/hello/:string`, (req, res) => {
  res.json({ result: sayHello(req.params.string) }).sendStatus(200);
});
router.get(`/upper/:string`, (req, res) => {
  res.json({ result: uppercase(req.params.string) }).sendStatus(200);
});
router.get(`/lower/:string`, (req, res) => {
  res.json({ result: lowercase(req.params.string) }).sendStatus(200);
});
router.get(`/first-character/:string`, (req, res) => {
  res.json({ result: firstCharacter(req.params.string) }).sendStatus(200);
});
router.get(`/first-characters/:string`, (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) }).sendStatus(200);
});

module.exports = router;
