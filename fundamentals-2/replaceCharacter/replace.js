//1. Meminta pengguna memasukkan kalimat
let sentence = prompt("Masukkan sebuah kalimat");

//2. Meminta pengguna memasukkan karakter yang akan diganti
let replacedCharacter = prompt("Masukkan karakter yang akan diganti");

//3. Meminta pengguna memasukkan karakter pengganti
let replacementCharacter = prompt("Masukkan karakter pengganti");

//4. Mengganti karakter dalam kalimat
let newSentence = sentence.replace(
   new RegExp(replacedCharacter, "g"),
   replacementCharacter
);

//5. Menampilkan kalimat yang telah diubah
console.log("kalimat setelah penggantian:");
console.log(newSentence);
