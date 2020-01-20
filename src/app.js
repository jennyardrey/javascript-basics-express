const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

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

module.exports = app;
