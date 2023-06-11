let oddEvenCheck = (number) => {
   let check = number % 2 == 0 ? "Genap" : "Ganjil";
   return check;
};

//pemanggilan fungsi
let yourNumber = 21;
let checkTheNumber = oddEvenCheck(yourNumber);
console.log(`Bilangan ${yourNumber} adalah bilangan ${checkTheNumber}`);
