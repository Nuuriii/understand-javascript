//1. prompts the user to enter the temperature to be converted
let temperature = parseFloat(prompt("Masukkan suhu"));

//2. prompts the user to enter a conversion type
let konversi = prompt("silahkan pilih konversi suhunya(celsius, fahrenheit)");

//3. make the size small does not affect the value
let lowercase = konversi.toLowerCase();

//4. use condition for converter temperature
let result;
if (konversi === "celsius") {
   result = ((temperature - 32) * 5) / 9;
} else if (konversi === "fahrenheit") {
   result = (temperature * 9) / 5 + 32;
} else {
   result = "silahkan pilih konversi yang telah disediakan";
}

//5. show result to user
alert(result);
