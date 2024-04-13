// Fungsi untuk menyelesaikan pertidaksamaan linear satu variabel ax + b > c
const solveLinearInequality = (a, b, c) => {
    // Memeriksa apakah koefisien a adalah nol
    if (a === 0) {
        if (b > c) {
            return "Pertidaksamaan selalu benar";
        } else {
            return "Pertidaksamaan selalu salah";
        }
    }

    // Mencari nilai x yang memenuhi pertidaksamaan
    const x = (c - b) / a;

    // Mengembalikan hasil
    if (a > 0) {
        return `x > ${x}`;
    } else {
        return `x < ${x}`;
    }
};

// Contoh penggunaan program
const a = 2;
const b = 3;
const c = 5;

console.log("Solusi pertidaksamaan:", solveLinearInequality(a, b, c));
