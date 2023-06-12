// Mendefinisikan fungsi untuk menghitung rata-rata
let calculateAverage = (valueStudent) => {
   let total = 0;

   // Menggunakan metode forEach() untuk menjumlahkan nilai-nilai dalam array
   valueStudent.forEach((value) => {
      total += va;
   });

   // Menghitung rata-rata dan mengembalikan hasilnya
   let average = total / valueStudent.length;
   return average;
};

// contoh pengunaan fungsi
let value = [90, 78, 90, 50, 50];
let averageValue = calculateAverage(value);
console.log(`Rata - rata nilai mahasiswa: ${averageValue}`);
