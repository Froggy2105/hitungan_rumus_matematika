// Fungsi untuk menjumlahkan dua bilangan
const addition = (a, b) => {
    return a + b;
};

// Fungsi untuk mengurangkan dua bilangan
const subtraction = (a, b) => {
    return a - b;
};

// Fungsi untuk mengalikan dua bilangan
const multiplication = (a, b) => {
    return a * b;
};

// Fungsi untuk membagi dua bilangan
const division = (a, b) => {
    // Periksa apakah pembagi tidak nol
    if (b !== 0) {
        return a / b;
    } else {
        return "Pembagi tidak boleh nol!";
    }
};

// Contoh penggunaan program
const num1 = 10;
const num2 = 5;

console.log(`Hasil penjumlahan: ${addition(num1, num2)}`);
console.log(`Hasil pengurangan: ${subtraction(num1, num2)}`);
console.log(`Hasil perkalian: ${multiplication(num1, num2)}`);
console.log(`Hasil pembagian: ${division(num1, num2)}`);
