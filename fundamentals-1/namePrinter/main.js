//1. Ask the user to enter a name
let userName = prompt("Masukkan nama");

//2. ask the user to enter the number of prints
let numberOfPrints = parseInt(prompt("Berapa banyak mau diulangnya?"));

//3. use conditioning to check whether it is valid or not
if (numberOfPrints > 0) {
   console.log("lanjutkan kelangkah selanjutnya");
} else {
   console.log("jumlah cetakan tidak valid");
}

//4. use a for loop to iterate as many times as numberOfPrint
for (let i = 0; i < numberOfPrints; i++) {
   console.log(`${i + 1}. ${userName}`);
}
