// Membuat array kosong untuk menyimpan nama teman
let friends = [];

console.log(friends);

// Menambahkan nama teman ke dalam array
friends.push("Reza");
friends.push("Rafi");
friends.push("Arka");

console.log(`ini temanku ${friends}`);

// Mengakses elemen array berdasarkan indeks
let firstFriend = friends[0];
let secondFriend = friends[1];

console.log(`Teman pertama: ${firstFriend}, Teman kedua: ${secondFriend}`);

// Melihat panjang array
let lengthArr = friends.length;

console.log(`Jumlah teman: ${lengthArr}`);

// Mengubah elemen array berdasarkan indeks
friends[1] = "david";

console.log(`Update teman: ${friends}`);

// Menghapus elemen array berdasarkan indeks
let removeFriends = friends.splice(1, 1);

console.log(`Teman yang dihapus: ${removeFriends}`);
console.log(`perbarui daftar: ${friends}`);

// Menggabungkan elemen array menjadi string
let arrToString = friends.join(", ");

console.log(`bukan array: ${arrToString}`);

// Mengecek apakah suatu elemen ada dalam array
let searchFriends = friends.includes("Rafi");

console.log(`Apakah Rafi seorang teman: ${searchFriends}`);

// Mencari indeks suatu elemen dalam array
let searchIndex = friends.indexOf("Arka");
console.log(`Indeks Arka: ${searchIndex}`);
