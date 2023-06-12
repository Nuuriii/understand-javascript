// Mendefinisikan fungsi untuk membuat huruf pertama menjadi capital
let capitalizeFirstLetter = (string) => {
   let result = []; //buat variable dengan array kosong

   string.forEach((value) => {
      let toUpperCase = value.slice(0, 1).toUpperCase(); //ambil karakter pertama dari string, jadikan karakter pertama itu menjadi huruf besar
      let lowerCase = value.slice(1).toLowerCase(); //ambil karakter setelah karakter pertama, jadikan menjadi huruf kecil
      result.push(toUpperCase + lowerCase); //jadikan variable result yang dibuat memiliki nilai dari kedua variable yang anda buat tadi
   });
   return result; //kembalikan nilai dari variable result sebagai nilai dari function
};

// Contoh penggunaan fungsi
let letterArr = ["halo", "gaoo"];
let callFunc = capitalizeFirstLetter(letterArr);
console.log(callFunc);
