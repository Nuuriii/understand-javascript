//Studi Kasus: Menghitung Jumlah Karakter dalam Setiap Kata
//Kita akan membuat sebuah fungsi yang menerima sebuah kalimat dan menghitung jumlah karakter dalam setiap kata. Fungsi ini akan menggunakan metode forEach() untuk melakukan iterasi pada setiap kata dalam kalimat dan mencetak jumlah karakternya ke konsol.

// Mendefinisikan fungsi untuk menghitung jumlah karakter dalam setiap kata
let calculateCharacter = (sentence) => {
   let toArr = sentence.split(" ");

   toArr.forEach((word) => {
      console.log(`Jumlah karakter dalam kata ${word}: ${word.length}`);
      console.log(toArr);
   });
};

// contoh penggunaan string
let yourSentence = "Halo cuy";
let checkLength = calculateCharacter(yourSentence);
console.log(checkLength);

// Penjelasan kode di atas:

//1. Fungsi hitungJumlahKarakter menerima parameter kalimat, yang merupakan sebuah string.
//2. Kita menggunakan metode split(" ") untuk membagi kalimat menjadi array kata-kata. Kita menggunakan spasi sebagai pemisah, dan jangan lupa untuk menyimpannya ke variable
//3. Setelah kita mendapatkan variable yang berisi array, kita menggunakan metode forEach() untuk melakukan iterasi pada setiap kata.
//4. Di dalam fungsi yang diberikan ke forEach(), kita mencetak jumlah karakter dalam setiap kata ke konsol menggunakan kata.length.
//5. Kita menggunakan kalimat "Hari ini cuaca sedang cerah" sebagai contoh dan memanggil fungsi hitungJumlahKarakter() dengan kalimat tersebut.
