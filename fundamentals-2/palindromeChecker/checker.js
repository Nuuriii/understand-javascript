// Meminta pengguna memasukkan kata atau frasa
let phraseWord = prompt("Masukkan kata atau frase:");

// Menghapus spasi dan mengubah huruf menjadi huruf kecil
let phraseNotSpaces = phraseWord.toLocaleLowerCase().replace(/\s/g, "");
console.log(phraseNotSpaces);

// Membalik kata atau frase
let reversePhrase = phraseNotSpaces.split("").reverse().join("");
console.log(reversePhrase);

// Memeriksa apakah kata atau frase asli sama dengan kata atau frasa yang dibalik
if (phraseNotSpaces === reversePhrase) {
   alert(`${phraseWord} adalah palindrom.`);
} else {
   alert(`${phraseWord} bukan palindrom.`);
}
