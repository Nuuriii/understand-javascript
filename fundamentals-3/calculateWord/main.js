function calculateNumLength(word) {
   return word.length;
}

//contoh pemanggilan fungsi
let inputWord = "Javascript";
let countWord = calculateNumLength(inputWord);
console.log(`Jumlah huruf dalam kata ${inputWord} adalah ${countWord}`);
