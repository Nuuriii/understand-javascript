function calculateAppereance(word, character) {
   let toArr = word.split("");
   let calculate = 0;

   for (let i = 0; i < toArr.length; i++) {
      if (toArr[i] == character) {
         calculate++;
      }
   }
   return calculate;
}

let yourWord = "akku";
let searchWord = "k";
let calculateWord = calculateAppereance(yourWord, searchWord);
console.log(
   `Jumlah kemunculan karakter ${searchWord} dalam kata ${yourWord} adalah ${calculateWord}`
);
