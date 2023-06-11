//create one function that accepts one parameter
function reverseWord(word) {
   //use split method for change string to array
   let toArr = word.split("");
   //use method array .reverse() for reverse the array
   let reverseArr = toArr.reverse();
   //use method array .join() for array to string
   let arrToString = reverseArr.join("");
   //return the variable that holds the array that has been converted to a string
   return arrToString;
}

let yourWord = "Aku RPL";
let reverseYourWord = reverseWord(yourWord);
console.log(reverseYourWord);
