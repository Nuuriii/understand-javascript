//1. Meminta pengguna memasukka kalimat
let sentence = prompt("tuliskan satu kalimat");

//2. Menghapus spasi di awal dan akhir kalimat
sentence = sentence.trim();

//3. Memisahkan kalimat menjadi array kata
let array = sentence.split("");

//4. Membalikkan setiap kata dalam array
let reverse = array.reverse();

//5. Menggabungkan kembali arrayWord menjadi kalimat baru
let arrToString = reverse.join("");

//6. Menampilkan hasil kalimat yang dibalik
console.log(arrToString);

//1. Meminta pengguna memasukka kalimat
// let sentence = prompt("Masukkan kalimat");
// console.log(sentence);

//2. Menghapus spasi di awal dan akhir kalimat
// sentence = sentence.trim();
// console.log(sentence);

//3. Memisahkan kalimat menjadi array kata
// let arrayWord = sentence.split("");
// console.log(arrayWord);

//4. Membalikkan setiap kata dalam array
// let reverseArray = arrayWord.reverse();
// console.log(reverseArray);

//5. Menggabungkan kembali arrayWord menjadi kalimat baru
// let reverseSentence = reverseArray.join("");
// console.log(reverseSentence);

//6. Menampilkan hasil kalimat yang dibalik
// console.log("Kalimat yang dibalik");
// console.log(reverseSentence);
