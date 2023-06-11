//1. Meminta pengguna memasukkan nama pengguna
let userName = prompt("Masukkan nama pengguna");

//2. Menghapus spasi di awal dan akhir nama pengguna
userName = userName.trim();
console.log(userName);

//3. Memeriksa panjang nama pengguna
if (userName.length > 3) {
   console.log("Nama pengguna valid");
} else {
   console.log("Nama pengguna harus memiliki setidaknya 4 karakter.");
}
