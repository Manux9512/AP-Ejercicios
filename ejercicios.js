//Ejercicio 1
// function triangulo(size){
//     for (let i = 0; i <= size; i++) {
//         console.log('#'.repeat(i));
//     }
// }
// triangulo(10)

//Ejercicio 2
// function tablero (size){
//     const blanca = "_";
//     const negra = "#";
//     for (let i = 1; i <= size; i++) {
//         let linea = ''; 
//         for (let j = 1; j <= size; j++) {
//             linea += (i + j + 1) % 2 ? blanca:negra;
//         }
//         console.log(linea);
//     }
// }
// tablero(8)


//Ejercicio 3 FizzBuzz
// function fizzbuzz(number){
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log(i + " FizzBuzz");
//         }else if (i % 5 === 0){
//             console.log(i + " Buzz");
//         }else if (i % 3 === 0){
//             console.log(i + " Fizz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(100);
//-----------------------------------------------------------

//Arrays and loops

//Sum of resistors in series
// function sumResistance(arrayNum){
//     let sum = 0;
//     for (let i = 0; i < arrayNum.length; i++){
//         sum += Math.abs(arrayNum[i]);
//     }
//     console.log(sum + " ohms");
// }
// let values = [9, 2, 5, 4 ];
// sumResistance(values)

//Secret society
// function secretName(arrayNames){
//     let concat ='';
//     for (let i = 0; i < arrayNames.length; i++){
//         concat += arrayNames[i][0];
// }
//     console.log(concat)
// }
// let names = ["Esperanza", "Franco", "Nia"]
// secretName(names)

//Array of Multiples
// function arrayMultiplos(number, length){
//     let array = [];
//     for (let i = 1; i <= length; i++) {
//         array.push(number*i);
//     }
//     console.log(array);
// }
// arrayMultiplos(17, 6)

//-------------------------------------------------------------

//Práctica de lógica:

//User profile
// let userName = prompt("Ingresa tu numbre de usuario");
// let age = prompt("Ingresa tu edad");
// let favoriteMovies = prompt("Ingresa tus peliculas favoritas");
// console.log(`Bienvenido ${userName} tu edad es ${age} años.\nLa pelicula ${favoriteMovies} es una de mis favoritas`);

//Highest number
// let i = 0;
// let array = [];
// while(i<10){
//     let number = prompt("Ingresa un numero");
//     array.push(number);
//     i = i + 1;
// }
// console.log("El numero más grande es ",Math.max(...array));

//Palindrome sin signos de puntuación (splite and replaceAll)
// function palindrome(str){
//     let strReverse = str.replaceAll(" ", "").split('').reverse().join('');
//     let strNoSpaces = str.replaceAll(" ", "");
//     if (strNoSpaces === strReverse){
//         console.log("Es palindromo");
//     }else{
//         console.log("No es palindromo");
//     }
// }
// palindrome(prompt("Ingresa una palabra"));

