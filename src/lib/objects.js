const createPerson = (name, age) => {
  let person = {
  name: name,
  age: age
}
return person;
};

const getName = object => {
return object.name;
};

const getProperty = (property, object) => {
return object[property];
};

const hasProperty = (property, object) => {
if (object.hasOwnProperty(property)){
  return true
};
return false
};

const isOver65 = person => {
if (person.age > 65){
  return true}
else return false;
};

const getAges = people => {
  
  return people.map((a) => {
    return a.age;
  })
};



const findByName = (name, people) => {
  return people.filter(e => e.name === name)[0];
};


//if the manufacturer is equal to 'Honda' then return the object. 
//Otherwise continue with the iteration
const findHondas = cars => {
  return cars.filter(e => e.manufacturer === 'Honda');
};

//find .age of each object and make array
//add results up and divide by length of people
const averageAge = people => {
    let ages = people.map(a => {return a.age});
    return ages.reduce((total,currentValue) => total + currentValue, 0) / people.length;
      
    
};
//create object from parameters
//create string containing elements from name obj
const createTalkingPerson = (name, age) => {
  
  this.name = name;
  this.age = age;
  this.introduce = function (friend) {
      return "Hi " + friend + ", my name is " + name + " and I am " + age + "!"
  }
  return this;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
