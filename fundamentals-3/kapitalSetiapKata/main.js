let firstLetterEachWord = (sentence) => {
   let toArr = sentence.split(" ");

   let capitalizeFirstLetter = toArr.map((string) => {
      let firstLetter = string.charAt(0).toUpperCase();
      let restTheWord = string.slice(1);

      return firstLetter + restTheWord;
   });

   let arrToString = capitalizeFirstLetter.join(" ");
   return arrToString;
};

//call function
let yourSentence = "javascript is awesome";
let capitalizeSentence = firstLetterEachWord(yourSentence);
//see output with console.log
console.log(capitalizeSentence);
