let konverterTemperature = (fahrenheit) => {
   let toCelsius = ((fahrenheit - 32) * 5) / 9;
   return toCelsius;
};

let fahrenheit = 68;
let toCelsius = konverterTemperature(fahrenheit);
console.log(`${fahrenheit} fahrenheit diubah ke celsius menjadi ${toCelsius}`);
