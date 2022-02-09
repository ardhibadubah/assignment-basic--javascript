/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

/**
 * ? Ciri-ciri bilangan prima :
 * ? punya faktor pembagi sebanyak 2 yaitu angka 1 dan angka itu sendiri
 */

// * memulai pengulangan untuk mencetak angkanya dimulai dari angka 1 s/d 100
for (let angka = 1; angka <= 100; angka++) {
  // * membuat variable yang menampung jumlah dari faktor pembagi yang mempunyai nilai default 0
  let jumlahFaktorPembagi = 0;

  // * melakukan pengulangan untuk mengecek jumlah faktor pembagi
  for (let pembagi = 1; pembagi <= angka; pembagi++) {
    // * mengecek apakah angka tersebut habis dibagi dengan faktor pembaginya ?
    // * jika angka habis dibagi dengan faktor pembagi maka tambahkan nilai dari variabel jumlahFaktorPembagi dengan 1
    if (angka % pembagi === 0) {
      jumlahFaktorPembagi += 1;
    }
  }

  // * membuat pengecekan terhadap jumlahFaktorPembagi
  // * jika jumlah faktor pembagi = 2 maka cetak angka ke dalam console

  if (angka === 1 || jumlahFaktorPembagi === 2) {
    console.log(angka);
  }
}

/**
 * 
 /// Soal - 02
 /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
while (....) {}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
do { .... } while (....)
Expected Result
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
fiftiethPrime should be 229
fiftiethOdd should be 99
Key Learning Points
memahami tatacara penggunaan dari for, while, dan do while
memahami konsep dari paramter
memahami konsep dari paramter
 */
