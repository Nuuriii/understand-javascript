let student = [
   { name: "Johny", age: 17 },
   { name: "Reza", age: 18 },
   { name: "Rafli", age: 19 },
   { name: "Rara", age: 18 },
   { name: "Riri", age: 20 },
   { name: "Dika", age: 23 },
];

// Menggunakan forEach() untuk mencetak nama-nama mahasiswa
console.log("Menggunakan forEach():");
student.forEach((std) => {
   console.log(`${std.name}`);
});

// Menggunakan map() untuk menghasilkan array baru dengan nama-nama mahasiswa
let studentName = student.map((std) => {
   return std.name;
});

console.log("Menggunakan map():");
console.log(studentName);

// Menggunakan filter() untuk menghasilkan array baru dengan mahasiswa usia di atas 20 tahun
let over20 = student.filter((std) => {
   return std.age > 20;
});

console.log("Menggunakan filter:");
console.log(over20);

//Penjelasan kode di atas:
//Array mahasiswa berisi beberapa objek mahasiswa dengan properti nama dan usia.

// Pertama, kita menggunakan metode forEach() untuk mencetak nama-nama mahasiswa ke konsol. Fungsi yang diberikan ke forEach() akan dijalankan untuk setiap elemen dalam array mahasiswa, dan kita mencetak mhs.nama untuk setiap elemen.

// Kemudian, kita menggunakan metode map() untuk menghasilkan array baru (namaMahasiswa) yang berisi nama-nama mahasiswa. Fungsi yang diberikan ke map() akan dijalankan untuk setiap elemen dalam array mahasiswa, dan kita mengembalikan mhs.nama untuk setiap elemen. Array baru ini kemudian dicetak ke konsol.

// Terakhir, kita menggunakan metode filter() untuk menghasilkan array baru (mahasiswaDiAtas20) yang hanya berisi mahasiswa dengan usia di atas 20 tahun. Fungsi yang diberikan ke filter() akan dijalankan untuk setiap elemen dalam array mahasiswa, dan kita mengembalikan mhs.usia > 20 untuk setiap elemen. Array baru ini kemudian dicetak ke konsol.

// Dalam studi kasus ini, kita menggunakan metode forEach(), map(), dan filter() untuk melakukan tugas yang berbeda dalam pemrosesan data mahasiswa. forEach() digunakan untuk melakukan tindakan pada setiap elemen dalam array tanpa mengubah array itu sendiri. map() digunakan untuk menghasilkan array baru dengan melakukan transformasi pada setiap elemen. Sedangkan filter() digunakan untuk menghasilkan array baru yang berisi elemen yang memenuhi suatu kondisi tertentu. Semoga studi kasus ini membantu Anda memahami perbedaan antara ketiga metode tersebut.
