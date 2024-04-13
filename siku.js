// Program untuk menghitung panjang sisi miring segitiga siku-siku by Fatur rochman
const calculateHypotenuse = (a, b) => {
    // Menggunakan rumus Pythagoras: c = sqrt(a^2 + b^2)
    const hypotenuse = Math.sqrt(a * a + b * b);
    return hypotenuse;
};

// Contoh penggunaan
const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(`Panjang sisi miring segitiga siku-siku dengan sisi ${sideA} dan ${sideB} adalah ${hypotenuse}.`);
