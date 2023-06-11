let password = "nur@22";

if (password.length > 8) {
   console.log(`password valid`);
} else {
   console.log(`password minimal harus berisi 8 karakter`);
}

if (
   password.includes("#") ||
   password.includes("$") ||
   password.includes("@")
) {
   console.log("password terdapat karakter spesial");
} else {
   console.log("password tidak mengandung karakter spesial");
}

if (/[0-9]/.test(password)) {
   console.log("password mengandung angka");
} else {
   console.log("password tidak mengandung angka");
}
