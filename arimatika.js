const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan bilangan pertama: ', (num1) => {
  rl.question('Masukkan bilangan kedua: ', (num2) => {
    rl.question('Pilih operasi aritmatika (+, -, *, /): ', (operator) => {
      // Konversi string ke angka
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      let result;

      // Lakukan operasi aritmatika berdasarkan operator yang dipilih
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          if (number2 !== 0) {
            result = number1 / number2;
          } else {
            console.log('Error: Pembagian dengan nol tidak diizinkan.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Error: tidak bisa dihitung.');
          rl.close();
          return;
      }

      // Cetak hasilnya
      console.log(`Hasil dari ${number1} ${operator} ${number2} adalah ${result}`);

      rl.close();
    });
  });
});
