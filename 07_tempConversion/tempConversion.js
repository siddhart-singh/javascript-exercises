const convertToCelsius = function(fahrenheit) {
  if(typeof(fahrenheit) !== "number") return "ERROR";
  const celsius = ((5/9) * (fahrenheit - 32));
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  if(typeof(celsius) !== "number") return "ERROR";
  const fahrenheit = ((9/5) * celsius) + 32;
  return Math.round(fahrenheit * 10) / 10;
};


// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
  };

