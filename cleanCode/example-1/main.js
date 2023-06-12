//Studi Kasus: Pembuatan Username yang Valid
//Deskripsi: Anda diminta untuk membuat sebuah fungsi yang menghasilkan username yang valid berdasarkan nama pengguna yang diberikan. Username harus terdiri dari huruf kecil, tidak boleh ada spasi, dan maksimal 10 karakter.

// Fungsi untuk membuat username valid dari nama pengguna
let createValidUser = () => {
   let userName = prompt("");
   let userMaxLength = 10;

   let userLowerCase = lowerCase(userName); //variable untuk membuat username menjadi huruf kecil
   let trimUser = trimString(userLowerCase); //untuk menghapus spasi di awal dan akhir
   let spaceInUser = removeSpace(trimUser); // untuk menghapus spasi di akhir
   let isValid = checkLength(spaceInUser, userMaxLength); // mengecek apakah username lebih dari maksimal karakter

   console.log(`nama anda: ${spaceInUser}`);
   console.log(`status: ${isValid}`);
};

// Fungsi untuk mengubah string menjadi huruf kecil
let lowerCase = (string) => {
   return string.toLowerCase();
};

// Fungsi untuk menghapus spasi di awal dan akhir string
let trimString = (string) => {
   return string.trim();
};

// Fungsi untuk menghapus spasi didalam string
let removeSpace = (string) => {
   return string.replace(/\s/g, "");
};

// Fungsi untuk mengecek apakah username melampaui maksimal
let checkLength = (string, maxLength) => {
   return string.length < maxLength
      ? "username valid"
      : "username maksimal 8 karakter";
};

//call the function
createValidUser();
