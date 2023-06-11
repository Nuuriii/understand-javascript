let isPalindrom = (isString) => {
   let string = isString.split("").reverse().join("").toLowerCase();
   return isString.toLowerCase() === string
      ? "ini Palindrom"
      : "bukan Palindrom";
};

//calling function
let yourString = "Katak katak";
let checkString = isPalindrom(yourString);
//show output to console
console.log(
   `kata/kalimat yang kamu cek adalah: ${yourString}, hasilnya adalah ${checkString}`
);
