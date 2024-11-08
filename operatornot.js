function cekValidasiUmur(umur) {
    if (!(umur >= 18)) {
        console.log("Anda belum cukup umur.");
    } else {
        console.log("Anda sudah cukup umur.");
    }
}

// Contoh penggunaan
cekValidasiUmur(16);  // Anda belum cukup umur.
cekValidasiUmur(20);  // Anda sudah cukup umur.