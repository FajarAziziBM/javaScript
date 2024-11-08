function sistemLogin() {
    // Input dari prompt
    const username = prompt("Masukkan username:");
    const password = prompt("Masukkan password:");
    
    // Variabel untuk melacak percobaan login
    let loginAttempts = 0;
    
    // Validasi login
    while (loginAttempts < 3) {
        if (
            username && 
            username.length >= 3 && 
            password && 
            password.length >= 6
        ) {
            console.log("Login Berhasil!");
            alert("Login Berhasil!");
            return true;
        } else {
            loginAttempts++;
            console.log(`Login Gagal. Sisa percobaan: ${3 - loginAttempts}`);
            
            // Pesan kesalahan spesifik
            if (username.length < 3) {
                alert("Username minimal 3 karakter");
            }
            
            if (password.length < 6) {
                alert("Password minimal 6 karakter");
            }
            
            // Minta input ulang jika percobaan belum habis
            if (loginAttempts < 3) {
                const ulangUsername = prompt("Masukkan username:");
                const ulangPassword = prompt("Masukkan password:");
                
                username = ulangUsername;
                password = ulangPassword;
            }
        }
    }
    
    // Jika percobaan login habis
    console.log("Akun diblokir. Terlalu banyak percobaan.");
    alert("Akun diblokir. Terlalu banyak percobaan.");
    return false;
}

// Panggil fungsi login
sistemLogin();