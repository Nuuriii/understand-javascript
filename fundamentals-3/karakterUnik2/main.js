let countUniqueCharacter = (sentence) => {
   let uniqueCharacters = new Set(sentence);
   return uniqueCharacters.size;
};

//call the function
let yourSentence = "halo dunia";
let checkUniqueSentence = countUniqueCharacter(yourSentence);

//see output with console
console.log(
   `total karakter unik di kalimat ${yourSentence} adalah ${checkUniqueSentence}`
);
