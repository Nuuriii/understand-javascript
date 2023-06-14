//Ambil elemen-elemen dom yang diperlukan
const angka1Input = document.querySelector("#angka1");
const angka2Input = document.querySelector("#angka2");
const tombolTambah = document.querySelector("#tambah");
const tombolKurang = document.querySelector("#kurang");
const tombolKali = document.querySelector("#kali");
const tombolBagi = document.querySelector("#bagi");
const hasilOperasi = document.querySelector("#hasil");

//buat fungsi untuk menjalankan operasi yang dipilih
//fungsi untuk menambah
const tambah = () => {
   const angka1 = parseFloat(angka1Input.value);
   const angka2 = parseFloat(angka2Input.value);
   const hasil = angka1 + angka2;
   hasilOperasi.textContent = `Hasil dari ${angka1} + ${angka2} = ${hasil}`;
};

//fungsi untuk mengurangi
const kurang = () => {
   const angka1 = parseFloat(angka1Input.value);
   const angka2 = parseFloat(angka2Input.value);
   const hasil = angka1 - angka2;
   hasilOperasi.textContent = `Hasil dari ${angka1} - ${angka2} = ${hasil}`;
};

//fungsi untuk mengalikan
const kali = () => {
   const angka1 = parseFloat(angka1Input.value);
   const angka2 = parseFloat(angka2Input.value);
   const hasil = angka1 * angka2;
   hasilOperasi.textContent = `Hasil dari ${angka1} x ${angka2} = ${hasil}`;
};

//fungsi untuk membagi
const bagi = () => {
   const angka1 = parseFloat(angka1Input.value);
   const angka2 = parseFloat(angka2Input.value);
   const hasil = angka1 / angka2;
   hasilOperasi.textContent = `Hasil dari ${angka1} : ${angka2} = ${hasil}`;
};

//tambahkan event di setiap tombol operasi
tombolTambah.addEventListener("click", tambah);
tombolKurang.addEventListener("click", kurang);
tombolKali.addEventListener("click", kali);
tombolBagi.addEventListener("click", bagi);
