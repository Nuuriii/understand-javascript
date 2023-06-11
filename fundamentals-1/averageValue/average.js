//1. declare the variable
let total = 0;
let count = 0;

//2. ask the user how many values to enter
let value = parseInt(prompt("berapa banyak nilai yang mau dimasukkan?"));

//3. use loops so that the user can fill in the value he wants to add up
for (let i = 0; i < value; i++) {
   let userValue = parseInt(prompt(`Masukkan nilai ke ${i + 1}`));
   total += userValue;
   count++;
}

//4. calculate average value
const AVERAGE = total / count;

//5. show average value to user
alert(`nilai rata-ratanya adalah: ${AVERAGE}`);
