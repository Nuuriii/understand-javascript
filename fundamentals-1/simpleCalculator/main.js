//1. variable declaration
let num1;
let num2;
let operators;

//2. ask the user to enter two numbers and an operator
num1 = parseFloat(prompt("Masukkan angka pertama"));
num2 = parseFloat(prompt("Masukkan angka kedua"));
operators = prompt("Pilih operasi apa yang ingin dilakukan ( +, -, *, /, %)");

//3. perform mathematical operations based on operators
let result;

if (operators === "+") {
   result = num1 + num2;
} else if (operators === "-") {
   result = num1 - num2;
} else if (operators === "*") {
   result = num1 * num2;
} else if (operators === "/") {
   result = num1 / num2;
} else if (operators === "%") {
   result = num1 % num2;
} else {
   result =
      "terdapat kesalahan, pilihlah operasi sesuai contoh:(+ , -, *, /, %)";
}

//4. display result to user using alert
alert(result);
