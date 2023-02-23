//1
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 3));
console.log(multiply(5, 8));

//2
function greeting(name) {
  return `Hello ${name}`;
}
console.log(greeting('Muhammad'));
console.log(greeting('Arsan'));

//3
const sumOfNumbers = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfNumbers([3, 4, 5, 6]));
console.log(sumOfNumbers([36, 45, 55, 57]));

//4
const calculateBMI = (weight, height) => {
  return weight / (height * height);
};

console.log(calculateBMI(60, 4));
console.log(calculateBMI(80, 5));

//5
const strLength = (str) => {
  return str.length;
};

console.log(strLength('Hello'));
console.log(strLength('javascript'));

//6
const reverseStr = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseStr('javascript'));
console.log(reverseStr('reactjs'));

//7
const firstLast = (first, last) => {
  return `Hello, ${first} ${last}!`;
};

console.log(firstLast('Muhammad', 'Arsan'));
console.log(firstLast('Muhammad', 'Ahmad'));

//8
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize('arsan'));
console.log(capitalize('muhammad'));

//9
const stringCaps = (arr) => {
  return arr.map((ele) => ele.toUpperCase());
};

console.log(stringCaps(['Muhammad', 'arsan']));
console.log(stringCaps(['react', 'node', 'javascript']));

//10
const ispalindrome = (str) => {
  let res = str.split('').reverse().join('');
  if (res === str) {
    return true;
  } else return false;
};

console.log(ispalindrome('racara'));
console.log(ispalindrome('level'));
console.log(ispalindrome('react'));
