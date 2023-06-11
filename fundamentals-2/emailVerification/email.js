//Case Study: Email Validation
//Studi Kasus: Validasi Email
//Create a simple program to validate emails based on certain criteria. Here are the steps:
//Buatlah program sederhana untuk melakukan validasi email berdasarkan kriteria tertentu. Berikut adalah langkah-langkahnya:

//Algorithm
//1. Declare a variable to store the emails to be validated.
//   Deklarasikan variabel untuk menyimpan email yang akan divalidasi.
let email = "yourEmail@gmail.yahoo";

//2. Check if the email contains the "@" symbol using the includes() method on the string.
//   Periksa apakah email mengandung simbol "@" menggunakan metode includes() pada string.
if (email.includes("@")) {
   console.log("Your email is valid");
} else {
   console.log("Your email is invalid");
}

//3. Check if the email domain is valid using the endsWith() method on the string.
//   Periksa apakah domain email valid menggunakan metode endsWith() pada string.
if (
   email.endsWith(".com") ||
   email.endsWith(".net") ||
   email.endsWith(".org")
) {
   console.log("Domain email is valid");
} else {
   console.log("Domain email is invalid");
}

//4. Check if the email username contains only letters, numbers, periods, and underscores using the regular expression /^[A-Za-z0-9._-]+$/.
//   Periksa apakah nama pengguna email hanya terdiri dari huruf, angka, titik, dan garis bawah menggunakan ekspresi reguler /^[A-Za-z0-9._-]+$/.
if (/^[A-Za-z0-9._-]+$/.test(email.split("@")[0])) {
   console.log("User name is valid");
} else {
   console.log("User name is invalid");
}
