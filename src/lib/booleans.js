const negate = a => {
return !a;
};

const both = (a, b) => {
return a&&b;
};

const either = (a, b) => {
  return a||b;
};

//in order to be true, both must be false - opposite of &&
const none = (a, b) => {
  return !a&&!b;
};

const one = (a, b) => {
  return (a!==b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
return (a === b);
};

const isGreaterThan = (a, b) => {
return (a > b);
};

const isLessThanOrEqualTo = (a, b) => {
  return (a <= b);
};

const isOdd = a => {
  return (a%2 !== 0);
};

const isEven = a => {
return (a%2 === 0);
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = string => {
  return Boolean(string.match(/[aeiou]/gi));
};

//false if string contains ANY uppercase
//true if there are NO uppercase
const isLowerCase = string => {
  return Boolean(!string.match(/[A-Z]/g));
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
