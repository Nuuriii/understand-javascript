//Studi Kasus: Pengolahan Data Nama
//Dalam studi kasus ini, kita akan melakukan pengolahan data nama menggunakan string, string method, dan operator dalam JavaScript. Tujuannya adalah untuk memahami penggunaan string, string method, dan operator dalam konteks pengolahan data.

//contoh data nama
const name = "Reza Arap";

//1. Mengubah nama menjadi huruf besar
const nameUpperCase = name.toUpperCase();
console.log(nameUpperCase); // output: REZA ARAP

//2. Mengubah nama menjadi huruf kecil
const nameLowerCase = name.toLowerCase();
console.log(nameLowerCase); // output: reza arap

//3. Mendapatkan Panjang Nama
const panjangNama = name.length;
console.log(panjangNama); // output: 9

//4. Mendapatkan karakter tertentu dalam Nama
const firstCharacter = name.charAt(0); //mengambil huruf pertama
console.log(firstCharacter); // output: R

const endCharacter = name.charAt(name.length - 1); //mengambil huruf terakhir
console.log(endCharacter); // output: p

//5. Menyambungkan dengan Teks lain
const connectText = name.concat(" is gamer, and youtuber");
console.log(connectText); // output: Reza Arap is gamer, and youtuber

//6. Memeriksa apakah nama mengandung kata tertentu
const searchText = name.includes("Arap");
console.log(searchText); // output: true

//7. Mengganti Bagian Tertentu dalam Nama
const newName = name.replace("Arap", "Rahardian");
console.log(newName); // output: Reza Rahardian

//8. Memisahkan Nama menjadi array dengan pemisah spasi
const nameArray = name.split(" ");
console.log(nameArray); // output: ["Reza","Arap"]

//9. Menggabungkan Array menjadi satu string dengan pemisah tanda koma
const nameCombined = nameArray.join(", ");
console.log(nameCombined); // output: Reza, Arap

//10. Menyusun Nama dengan Operator +
const fullName = "Mr. " + name;
console.log(fullName); // output: Mr. Reza Arap
