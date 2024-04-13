// Fungsi untuk menghitung keliling persegi
const calculateSquarePerimeter = (side) => {
    return 4 * side;
};

// Fungsi untuk menghitung luas persegi
const calculateSquareArea = (side) => {
    return side ** 2;
};

// Contoh penggunaan program untuk persegi
const squareSide = 6;
const squarePerimeter = calculateSquarePerimeter(squareSide);
const squareArea = calculateSquareArea(squareSide);
console.log(`Keliling persegi dengan sisi ${squareSide} adalah ${squarePerimeter}, dan luasnya adalah ${squareArea}.`);
