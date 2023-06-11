//1. ask user to input height, and weight
let weight = parseFloat(prompt("Masukkan berat badan anda( dalam kg )"));
let height = parseFloat(prompt("Masukkan tinggi badan anda( dalam 1 meter )"));
let BMI;

//2. calculate BMI value
BMI = weight / (height * height);

//3. use if else to define condition
let category;
if (BMI < 18.5) {
   result = "Kekurangan berat badan";
} else if (BMI < 24.9) {
   result = "Berat badan normal";
} else if (BMI < 29.9) {
   result = "Berat badan berlebih";
} else if (BMI >= 30) {
   result = "Anda mengalami obesitas";
}

//4. show result to user
alert(`BMI anda: ${BMI}, kategori BMI: ${result}`);
