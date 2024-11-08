// Operasi pembanding
// kondisi kalau bener melakukan suatu taks yang ada di dalam statement if, kalau tidak/false tidak di jalan kan

function gameRandomChallenge() {
    // Skor pemain
    let playerScore = Math.floor(Math.random() * 100) + 1;
    
    // Skor minimum untuk menang
    const winThreshold = 75;

    // Kategori hadiah
    const prizes = {
        gold: 90,
        silver: 80,
        bronze: 75
    };

    // Pengecekan bertingkat
    if (playerScore >= prizes.gold) {
        console.log(`🥇 EMAS! Skor Luar Biasa: ${playerScore}`);
    } else if (playerScore >= prizes.silver) {
        console.log(`🥈 PERAK! Skor Bagus: ${playerScore}`);
    } else if (playerScore >= prizes.bronze) {
        console.log(`🥉 PERUNGGU! Skor Cukup: ${playerScore}`);
    } else if (playerScore >= winThreshold) {
        console.log(`✅ Berhasil Lolos: ${playerScore}`);
    } else {
        console.log(`❌ Gagal! Skor Terlalu Rendah: ${playerScore}`);
    }
}

// Panggil beberapa kali untuk variasi
gameRandomChallenge();
