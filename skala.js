// Fungsi untuk menghitung jarak antara dua titik dalam ruang tiga dimensi
const calculateDistance = (x1, y1, z1, x2, y2, z2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const deltaZ = z2 - z1;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
    return distance;
};

// Contoh penggunaan program
const point1 = { x: 1, y: 2, z: 3 };
const point2 = { x: 4, y: 5, z: 6 };

const distance = calculateDistance(point1.x, point1.y, point1.z, point2.x, point2.y, point2.z);
console.log(`Jarak antara titik 1 (${point1.x}, ${point1.y}, ${point1.z}) dan titik 2 (${point2.x}, ${point2.y}, ${point2.z}) adalah ${distance.toFixed(2)}.`);
