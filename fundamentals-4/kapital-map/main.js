//1. buat array untuk menyimpan nama depan dan nama belakang
let students = [
   { firstName: "reza", lastName: "rahardian" },
   { firstName: "rafi", lastName: "ahmad" },
];

//2. buat fungsi agar nanti dapat memudahkan untuk mengatur kapitalisasi
let capitalize = (str) => {
   let first = str.slice(0, 1).toUpperCase(); //mengambil huruf pertama, kemudian menjadikannya huruf kapital
   let second = str.slice(1).toLowerCase(); //mengambil huruf kedua sampai akhir, kemudian menjadikannya huruf kecil
   return first + second; //gabungkan huruf pertama yang telah kapital dengan huruf sesudahnya
};

//3. buat variable kemudian map array students
let fullName = students.map((student) => {
   let firstNameUser = capitalize(student.firstName); //variable untuk mengatur kapitalisasi nama pertama
   let lastNameUser = capitalize(student.lastName); //variable untuk mengatur kapitalisasi nama terakhir

   return `${firstNameUser} ${lastNameUser}`; //gabungkan nama depan dan belakang kemudian jadikan sebagai kembalian function ini
});

//4. lihat hasil dengan console.log
console.log(fullName);
