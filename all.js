console.log("selamat datang di program menghitung pitagoras.");

console.log("buatan fatur rochman.");
const garis = '/'.repeat(30);
console.log(garis);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan panjang sisi A: ', (sideA) => {
  rl.question('Masukkan panjang sisi B: ', (sideB) => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      console.log('Masukkan harus berupa bilangan positif.');
      rl.close();
      return;
    }

    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    console.log(`Panjang sisi miring (sisi C) adalah: ${c}`);
    rl.close();
  });
});
