// YOUR CODE GOES HERE!!!
/*************************/
function getFirstName(person){
  return person.firstName;
}

function getLastName(person){
  return person.lastName;
}

function getFullName(person){
  return person.firstName + " " + person.lastName;
}  

function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
}

function setAge(person, newAge){
  person.age = newAge;
}

function giveBirthday(person){
  if (person.firstName === 'Baby'){
    person.age = 1
  } else{
    person.age = person.age + 1;
  }
}

function marry(person1, person2){
  person1.isMarried = true;
  person2.isMarried = true;
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
   
}

function divorce(person1, person2){
  person1.isMarried = false;
  person2.isMarried = false;
  person1.spouseName = null;
  person2.spouseName = null;
}

/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
