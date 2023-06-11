//1. Specify the initial price and discount percentage, then save it to a variable
let firstPrice = 100000;
let percentageDiscount = 50;

//2. Calculate the discount amount
let totaDiscount = (firstPrice * percentageDiscount) / 100;

//3. Calculate price after discount
let totalPrice = firstPrice - totaDiscount;

//4. Show price after discount
console.log(totalPrice);
