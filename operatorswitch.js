function kategoriNilai(nilai) {
    switch (true) {
        case (nilai >= 90):
            console.log("Grade A");
            break;
        case (nilai >= 80):
            console.log("Grade B");
            break;
        case (nilai >= 70):
            console.log("Grade C");
            break;
        case (nilai >= 60):
            console.log("Grade D");
            break;
        default:
            console.log("Grade E");
    }
}

// Contoh penggunaan
kategoriNilai(85);  // Grade B
kategoriNilai(55);  // Grade E