// Fungsi untuk menampilkan pesan di console
function log(message) {
    console.log(message);
    // Tambahan alert untuk memastikan
    alert(message);
}

function pembagian(a, b) {
    log(`Mencoba pembagian: ${a} / ${b}`);
    
    try {
        if (b === 0 || isNaN(a) || isNaN(b)) {
            throw new Error("Pembagian tidak valid!");
        }
        
        const hasil = a / b;
        log(`Hasil pembagian: ${hasil}`);
        return hasil;
    } catch (error) {
        log(`Error: ${error.message}`);
        return null;
    }
}

function prosesData(data) {
    log(`Memproses data: ${JSON.stringify(data)}`);
    
    try {
        if (!data || data.length === 0) {
            throw new Error("Data kosong!");
        }
        
        const hasilProses = data.map(item => item * 2);
        log(`Hasil proses: ${JSON.stringify(hasilProses)}`);
        return hasilProses;
    } catch (error) {
        log(`Error: ${error.message}`);
        return [];
    }
}

// Jalankan beberapa contoh
pembagian(10, 2);
pembagian(10, 0);
prosesData([]);
prosesData([1, 2, 3]);