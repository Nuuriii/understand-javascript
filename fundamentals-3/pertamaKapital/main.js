let changeFirstLetter = (word) => {
   let takeLetter = word.slice(0, 1).toUpperCase();
   let takeTheRest = word.slice(1);
   return `${takeLetter}${takeTheRest}`;
};

//call the function
let yourWord = "aku dimas";
let changeLetter = changeFirstLetter(yourWord);

//see output using console.log
console.log(`Kata/kalimat awal: ${yourWord}, setelah dirubah: ${changeLetter}`);
