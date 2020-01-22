const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

exports.hello = (req, res) => {
  res.json({ result: sayHello(req.params.string) }).sendStatus(200);
};
exports.upper = (req, res) => {
  res.json({ result: uppercase(req.params.string) }).sendStatus(200);
};
exports.lower = (req, res) => {
  res.json({ result: lowercase(req.params.string) }).sendStatus(200);
};
exports.firstCharacter = (req, res) => {
  res.json({ result: firstCharacter(req.params.string) }).sendStatus(200);
};
exports.firstCharacters = (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) }).sendStatus(200);
};
