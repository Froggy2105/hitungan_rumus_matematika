// Fungsi untuk menghitung keliling lingkaran
const calculateCirclePerimeter = (radius) => {
    return 2 * Math.PI * radius;
};

// Fungsi untuk menghitung luas lingkaran
const calculateCircleArea = (radius) => {
    return Math.PI * radius ** 2;
};

// Contoh penggunaan program untuk lingkaran
const circleRadius = 5;
const circlePerimeter = calculateCirclePerimeter(circleRadius);
const circleArea = calculateCircleArea(circleRadius);
console.log(`Keliling lingkaran dengan jari-jari ${circleRadius} adalah ${circlePerimeter.toFixed(2)}, dan luasnya adalah ${circleArea.toFixed(2)}.`);
