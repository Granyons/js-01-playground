// 'use strict';

// //==========================================================================================
// // function createFileName(name, ext) {
// //   const trimmedName = name.trim();
// //   return trimmedName + '.' + ext;
// // }

// // const name = 'report ';
// // const ext = 'txt';
// // console.log(createFileName(name, ext));
// //=============================================================================================
// function calculateTotal(number) {
//   let numberClc = 0;
//   let iteract = 1;
//   while (iteract <= number) {
//     numberClc += iteract;
//     iteract += 1;
//   }
//   return numberClc;
// }

// console.log(calculateTotal(3)); // Виведе 6
// //Функція calculateTotal(number) приймає ціле число(параметр number).
// //Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// //Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// //================================================================================================

// function calculateTotal(number) {
//   let nCalc = 0;
//   for (let index = 1; index <= number; index++) {
//     nCalc += index;
//   }
//   return nCalc;
// }
// //=========================================================================================
// function calculateEvenTotal(number) {
//   let calculateNumber = 0;
//   for (let index = 1; index <= number; index++) {
//     if (index % 2 === 0) {
//       calculateNumber += index;
//     }
//   }
//   return calculateNumber;
// }
// //Функція calculateEvenTotal(number) приймає ціле число (параметр number).
// //Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.
// //Парні числа — це ті, що можна поділити на 2 без остачі.
// //Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// //===================================================================================================
// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// //Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку
// //від start до end, яке ділиться на 5 без остачі.

// //==================================================================================================
// function findNumber(start, end, divisor) {
//   let namberCalc;
//   for (let index = start; index <= end; index++) {
//     if (index % divisor === 0) {
//       namberCalc = index;
//       return namberCalc;
//     }
//   }
// }
//Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
//Доповни код функції таким чином, щоб вона:
//    повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
//   не використовуй оператор break
//=======================================================================================================
// const array = [1, 2, true, 'Poly'];
// console.log(array);
// console.log(String(array));
// let teta = array.map(item => Number(item));
// console.log(array.map(item => Number(item))); // [1, 2, 1, NaN]
// console.log(teta); // [1, 2, 1, NaN]

const array = [1, 2, 3];
console.log(Number(array));
