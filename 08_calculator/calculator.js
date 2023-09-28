const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0);
	
};

const multiply = function(argv) {
  return argv.reduce((product, num) => product * num, 1);

};

const power = function(...argv) {
  return argv.reduce((total, num) => total ** num);
	
};

const factorial = function(num) {
	let sum = 1;
  for(let i = 1; i <= num; i++){
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

