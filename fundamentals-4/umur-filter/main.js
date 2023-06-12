//1. buat variable isinya array yang menyimpan nama pelajar dan umurnya
let students = [
   { name: "ikhsan", age: 17 },
   { name: "nino", age: 18 },
   { name: "raka", age: 19 },
   { name: "daffa", age: 20 },
];

//2. filter array, cari pelajar yang umurnya lebih dari 17 tahun
let checkAge = students.filter((student) => {
   let searchAge = student.age > 18;
   return searchAge;
});

//3. tampilkan pelajar yang umurnya lebih dari 18 tahun
console.log(checkAge);
