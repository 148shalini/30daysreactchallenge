console.log('Hello, World!');
let firstName = 'Asabeneh';
firstName = 'Eyob';

const PI = 3.14; // Not allowed to reassign PI to a new value
// PI = 3.
console.log(PI);

// CREATE EMPTY ARRAY
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []
const arr1 = [];
console.log(arr1);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);

console.log('Animal products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);

console.log('Web technologies:', webTechs);
console.log('Number of web technologies:', webTechs.length);

console.log('Countries:', countries);
console.log('Number of countries:', countries.length);

const arr3 = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]; // arr containing different data types
console.log(arr3);
const arr5 = Array(8).fill(0);
console.log(arr5);
const p = [1, 3, 5];
const q = [2, 4, 6];
const r = p.concat(q);
console.log(r);
console.log(p.length);
// chk item in a list
/*const student = ['shalu', 'piyush', 'yash', 'mom'];
let index = student.indexOf('shalu');
console.log(index);
if (index != -1) {
  console.log('fruit is array');
} else {
  console.log('not in array');
}*/
// let us check if a banana exist in the array

const fal = ['banana', 'orange', 'mango', 'lemon'];
let index = fal.indexOf('banana'); // 0

if (index != -1) {
  console.log('This fruit does exist in the array');
} else {
  console.log('This fruit does not exist in the array');
}
// This fruit does exist in the array

// we can use also ternary here
index != -1
  ? console.log('This fruit does exist in the array')
  : console.log('This fruit does not exist in the array');

// let us check if a avocado exist in the array
let indexOfAvocado = fal.indexOf('avocado'); // -1, if the element not found index is -1
if (indexOfAvocado != -1) {
  console.log('This fruit does exist in the array');
} else {
  console.log('This fruit does not exist in the array');
}
// This fruit does not exist in the array
const number = [1, 2, 3, 4, 5];

console.log(number.includes(5)); // true
console.log(number.includes(0)); // false
console.log(number.includes(1)); // true
console.log(number.includes(6)); // false

const webTech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // List of web technologies

console.log(webTech.includes('Node')); // true
console.log(webTech.includes('C')); // false

const num = [1, 2, 3, 4, 5];
console.log(num.join()); // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')); //AsabenehMathiasEliasBrook
console.log(names.join(' ')); //Asabeneh Mathias Elias Brook
console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

const webTec = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // List of web technologies

console.log(webTec.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTec.join(' # ')); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

const numb = [1, 2, 3, 4, 5];

console.log(numb.slice()); // -> it copies all  item
console.log(numb.slice(0)); // -> it copies all  item
console.log(numb.slice(0, numb.length)); // it copies all  item
console.log(numb.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
const numbe = [1, 2, 3, 4, 5, 6];
console.log(numbe.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
const n = [1, 2, 3, 4, 5];
console.log(n.splice(0, 1)); // remove the first item
const numbers1 = [1, 2, 3, 4, 5];
numbers1.reverse(); // -> reverse array order

console.log(numbers1); // [5, 4, 3, 2, 1]

numbers1.reverse();
console.log(numbers1); // [1, 2, 3, 4, 5]

// EXERCISE LEVEL1
const a1 = Array();
const a2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a2.length);
console.log(a2[0]);
let lastindex = a2.length - 1;
console.log(a2[lastindex]);
const companies = ['fb', 'google', 'mc', 'apple', 'ibm', 'orcale', 'amazon'];
console.log(companies.join(', '));
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuation using regex
let cleanText = text.replace(/[^\w\s]/g, '');

// Convert string to array of words
let words = cleanText.split(' ');

console.log(words); // Output the array of words
console.log(words.length); // Output the number of words in the array

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('sugar');
console.log(shoppingCart);
shoppingCart.splice(4, 5);
console.log(shoppingCart);
shoppingCart[3] = 'green tea';
console.log(shoppingCart);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
const sortedAges = ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age
const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge =
  sortedAges.length % 2 === 0
    ? (sortedAges[middleIndex] + sortedAges[middleIndex - 1]) / 2
    : sortedAges[middleIndex];

// Find the average age
const sumAges = sortedAges.reduce((total, age) => total + age, 0);
const averageAge = sumAges / sortedAges.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare the values of (min - average) and (max - average) using abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log(sortedAges);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Difference (min - average):', minAverageDiff);
console.log('Difference (max - average):', maxAverageDiff);

const countriess = [
  'Country1',
  'Country2',
  'Country3',
  'Country4',
  'Country5',
  'Country6',
  'Country7',
  'Country8',
  'Country9',
  'Country10',
];

const slicedCountries = countriess.slice(0, 10);

console.log(slicedCountries);

const countriesss = [
  'Country1',
  'Country2',
  'Country3',
  'Country4',
  'Country5',
  'Country6',
  'Country7',
];

const middleIndexx = Math.floor(countries.length / 2);
const middleCountry =
  countries.length % 2 === 0
    ? [countries[middleIndexx - 1], countries[middleIndexx]]
    : [countries[middleIndexx]];

const firstHalf = countriesss.slice(0, middleIndexx);
const secondHalf = countriesss.slice(middleIndexx);

console.log('Middle Country(ies):', middleCountry);
console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);

//loops
let weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log(' No need for rain coat.');
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?');
let day = dayUserInput.toLowerCase();

switch (day) {
  case 'monday':
    console.log('Today is Monday');
    break;
  case 'tuesday':
    console.log('Today is Tuesday');
    break;
  case 'wednesday':
    console.log('Today is Wednesday');
    break;
  case 'thursday':
    console.log('Today is Thursday');
    break;
  case 'friday':
    console.log('Today is Friday');
    break;
  case 'saturday':
    console.log('Today is Saturday');
    break;
  case 'sunday':
    console.log('Today is Sunday');
    break;
  default:
    console.log('It is not a week day.');
}

//EXER2
let nu = prompt('enter ur age');
if (nu >= 18) {
  console.log('u are enough to drinve');
} else {
  console.log('not');
}

//
let myAge = 30;
let yourAge = prompt('Enter your age:');

if (yourAge > myAge) {
  let ageDifference = yourAge - myAge;
  console.log('You are ' + ageDifference + ' years older than me.');
} else if (yourAge < myAge) {
  let ageDifference = myAge - yourAge;
  console.log('I am ' + ageDifference + ' years older than you.');
} else {
  console.log('We are the same age.');
}
//for loop
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < 6; i++) {
  console.log(nums[i]);
}

const numbers11 = [1, 2, 3, 4, 5];
for (const number of numbers11) {
  console.log(number);
}

const countries1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
for (const country of countries) {
  console.log(country.toUpperCase());
}

const numbers12 = [1, 2, 3, 4, 5];
numbers.forEach((number, i) => {
  console.log(number, i);
});

const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
countries2.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
};

for (const key in user) {
  console.log(key, user[key]);
}
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
// Asabeneh Yetayeh
function printFullName() {
  let firstName = 'Asabeneh';
  let lastName = 'Yetayeh';
  let space = ' ';
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName(); // calling a function

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' ';
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName('David', 'Smith'));
//exercise

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
function addNumbers(num1, num2) {
  return num1 + num2;
}
function areaOfCircle(radius) {
  const pi = Math.PI;
  return pi * radius * radius;
}
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
function checkSeason(month) {
  if (month >= 3 && month <= 5) {
    return 'Spring';
  } else if (month >= 6 && month <= 8) {
    return 'Summer';
  } else if (month >= 9 && month <= 11) {
    return 'Autumn';
  } else {
    return 'Winter';
  }
}
console.log(fullName('John', 'Doe')); // Output: John Doe
console.log(addNumbers(5, 10)); // Output: 15
console.log(areaOfCircle(3)); // Output: 28.274333882308138
console.log(convertCelsiusToFahrenheit(25)); // Output: 77
console.log(calculateBMI(70, 1.75)); // Output: "Normal weight"
console.log(checkSeason(6)); // Output: "Summer"
