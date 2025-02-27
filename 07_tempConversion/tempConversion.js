const convertToCelsius = function(fahrenheitTo) {
let celsius = (fahrenheitTo - 32) * 5/9;
let FinalCelsius = Math.round(celsius * 10) / 10;
return FinalCelsius

};

const convertToFahrenheit = function(celsiusTo) {
  let fahrenheit = (celsiusTo * 9/5) + 32;
 let FinalFahrenheit = Math.round(fahrenheit * 10) / 10;
  return FinalFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
