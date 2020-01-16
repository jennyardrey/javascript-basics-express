const getNthElement = (index, array) => {
 if (index < array.length){
   return array[index];
 }
  else if (index-(array.length) < array.length){
    return array[index-(array.length)]
  }
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {  
  array.push(element);
  
};

const addToArray2 = (element, array) => {
  const result = array.concat(element);
  return result;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  return strings.map(function(e){ return e.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(function(e){ return e.split("").reverse().join("");
  });
};

const onlyEven = numbers => {
 return numbers.filter((e) => (e%2 === 0))
};

const removeNthElement2 = (index, array) => {
  const newArr = [...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter((e) => (e.match(/^[aeiou]/gi)))
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
return numbers.reduce((total, currentValue) => total + currentValue, 0)
};

const sortByLastLetter = strings => {
  let newArr = strings.map(function (e) {return e.split("").reverse().join("")});
  newArr.sort();
  let result = newArr.map(function (e) {return e.split("").reverse().join("")});
  return result;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
