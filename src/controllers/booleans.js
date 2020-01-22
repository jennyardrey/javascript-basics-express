const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

exports.negate = (req, res) => {
  const a = req.body.value;
  res.status(200).send({ result: negate(a) });
};
exports.truthiness = (req, res) => {
  const a = req.body.value;
  res.status(200).send({ result: truthiness(a) });
};
exports.isOdd = (req, res) => {
  const a = req.params.number;
  if (Number.isNaN(Number(a))) {
    return res.status(400).send({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(a) });
};
exports.startsWith = (req, res) => {
  const { string, char } = req.params;
  if (char.length !== 1) {
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(char, string) });
};
