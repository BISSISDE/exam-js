// Task 1
// const calculator = () => {
//     let num1;
//     let num2;
//     let tanba;
//     let result;
//     while (true) {
//         num1 = +prompt("Enter num1");
//         num2 = +prompt("Enter num2");
//         tanba = prompt("Tanba");
//         result = 0;
//         if (tanba == "-") {
//             result = num1 - num2;
//             return result;
//         } else if (tanba == "+") {
//             result = num1 + num2;
//             return result;
//         } else if (tanba == "*") {
//             result = num1 * num2;
//             return result;
//         } else if (tanba == "/") {
//             result = num1 / num2;
//             return result;
//         } else {
//             alert("Qate!");
//         }
//         }
// }
// alert(`Result ${calculator()}`);

// Task2

// function FindMoney() {
//   let pricePerItem = +prompt("Baga");
//   let quantity = +prompt("San");

//   let totalPrice = pricePerItem * quantity;

//   let jenildik = 0;
//   if (totalPrice > 20000) {
//     jenildik = 30; 
//   } else if (totalPrice > 10000) {
//     jenildik = 20; 
//   } else if (totalPrice > 5000) {
//     jenildik = 10;
//   }

//   let JenildikShgar = (totalPrice * jenildik) / 100;
//   let ObshPrice = totalPrice - JenildikShgar;

//   alert(`
//         Total price: ${totalPrice} kzt \n
//         Jenildik: ${jenildik} % (${JenildikShgar} kzt) \n
//         Toley: ${ObshPrice} kzt
//     `);
// }

// FindMoney();

// Task 3

// function game() {
//   const san = 45;
//   let findNum = +prompt("Find num");

//   while (true) {
//     if (findNum == san) {
//       alert("Dyrys");
//     }
//     if (findNum < 0 && 100 > findNum) {
//       alert ("Диапазон арасында жаз 100 - 0")
//       findNum = +prompt("Find num");
//     }
//     if (findNum > 0 && findNum < 40) {
//       alert("Жай жогары сан жазщ");
//       findNum = +prompt("Find num");
//     } else if (findNum > 50 && findNum < 100) {
//       alert("Жай томен сан жазщ");
//       findNum = +prompt("Find num");
//     } else if (findNum > 40 && findNum < 45 ) {
//       alert("Сәл жогары сан жазщ");
//       findNum = +prompt("Find num");
//     } else if (findNum > 45 && findNum < 50) {
//       alert("Сәл томен сан жазщ");
//       findNum = +prompt("Find num");
//     } 
//   }
// }
// console.log(game());

// Bonys task

  // let a = 15;
//   let b = 20;

//   a = a + b;
//   b = a - b;
//   a = a - b;

// alert(`a=${a}`)
// alert(`b=${b}`)
