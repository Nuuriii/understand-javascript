let reverseWord = (word) => {
   return word.split("").reverse().join("");
};

//pemanggilan fungsi
let yourWord = "ini tamat";
let reverseResult = reverseWord(yourWord);
//show output with console.log
console.log(
   `Kata/kalimat pertama adalah ${yourWord} kemudian setelah dibalik menjadi ${reverseResult}`
);
