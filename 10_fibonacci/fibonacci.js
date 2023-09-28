const fibonacci = function(num) {
    if (num < 0) return "OOPS";
   let last = 0;
   let current = 1;
   for (let i = 2; i <= num; i++){
    [current, last] = [current + last, current];
   }
   return current;
};

// Do not edit below this line
module.exports = fibonacci;
