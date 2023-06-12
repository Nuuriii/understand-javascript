const contacts = [];

function addContact() {
   const name = prompt("Masukkan nama kontak:");
   const phoneNumber = prompt("Masukkan nomor telepon kontak:");

   const contact = { name: name, phoneNumber: phoneNumber };
   contacts.push(contact);

   console.log("Kontak berhasil ditambahkan!");
}

function displayContacts() {
   console.log("Daftar Kontak:");

   contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Nama: ${contact.name}`);
      console.log(`   Nomor Telepon: ${contact.phoneNumber}`);
   });
}

function main() {
   let isRunning = true;

   while (isRunning) {
      const choice = prompt(
         "Pilih operasi:\n1. Tambah kontak\n2. Tampilkan kontak\n3. Keluar"
      );

      switch (choice) {
         case "1":
            addContact();
            break;
         case "2":
            displayContacts();
            break;
         case "3":
            isRunning = false;
            break;
         default:
            console.log("Operasi tidak valid.");
      }
   }

   console.log("Program selesai.");
}

main();
