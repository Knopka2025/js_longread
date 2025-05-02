/*оголошення змінних
const ageAlice = 20;
console.log(ageAlice);
const ageMark = 37;
console.log(ageMark);*/


/*перевизначення значення
let username = "Mark";
username = "Alice";
console.log(username);

let dogName = "Yasia";
dogName = "Britka";
console.log(dogName);

let myVariable = " Hello world!";
myVariable = "JavaScript is fun!";
console.log(myVariable);*/


/*
let value;
console.log(value); */

/*
// оператор typeof
const quantaty = 20;
console.log(typeof quantaty);
const username = "Alice";
console.log(typeof username);
const dogName = true;
console.log(typeof dogName);*/

/*
//арифметичні дії
const x = 19;
const y = 53;
console.log(x + y);

const a = 43;
const b = -54;
console.log(a + b);

const c = 5;
const d = 3;
console.log(c % d);


let age = 34;
age += 4;
console.log(age);

let tomato = 53;
tomato %= 8;
console.log(tomato);*/


/*
//рядки

const age = 34;
const message = "Congratulations! You're " + age + " now!";
console.log(message);

console.log(1 + "2");
console.log(1 + "2" + 4);
console.log(1 + 3 + "5");
console.log(String(5));
console.log(String(true));
console.log(String());*/
/*
//guest: Bavovniatko, room: 204;
const username = "Bavovniatko";
const room = 204;
const message = " Welcome " + username + "! Your room is " + room + ".";
console.log(message);

const a = 5;
const b = 4;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b);
console.log(5 == 5);
*/

//ex
/*Оголосіть дві змінні: admin та name.
Присвойте значення "Іван" змінній name.
Скопіюйте значення зі змінної name в admin.
Виведіть значення змінної admin, використовуючи функцію alert (яка повинна показати “Іван”).

let admin, name;
name = "Іван";
admin = name;

//alert(admin);  у вспливаючому вікні
console.log(admin);
let message = "привіт";
message = 123456;
console.log(message);*/

/*let isGreater = 4 > 1;
alert(isGreater); 

let age;
alert(age); */


//Який буде результат виконання скрипту?

//let name = "Ілля";

//alert( `привіт ${1}` ); // привіт 1

//alert( `привіт ${"name"}` ); // привіт "name"

//alert( `привіт ${name}` ); // привіт Ілля


//let age = prompt('Скільки вам років?', 100);
//console.log(`Вам ${age} років!`); // Вам 100 років!


/*let isBoss = confirm("Ви бос?");
alert( isBoss ); // true, якщо натиснута OK*/

/*//Створіть вебсторінку, яка запитує ім’я та виводить його.
let name = prompt(' What is your name? ' );
alert(`My name is ${name} `);*/

//let str = '123';
//alert(typeof str); // string
//let num = Number(str); // стає числом 123
//alert(typeof num);

/*
let x = 2;
alert(2 ** 3);*/

/*//Які кінцеві значення всіх змінних a, b, c та d після виконання коду нижче?

let a = 1, b = 1;

let c = ++a; // 2
//alert(c);
let d = b++; // 1
alert(d);*/


/*//Які значення мають a та x після виконання коду нижче?

let a = 2;
let x = 1 + (a *= 2);//5
alert(5);*/

/*
//Які результати цих виразів?

"" + 1 + 0//  "10" Додавання пустого рядка "" + 1 перетворює число 1 на рядок: "" + 1 = "1"; далі ми маємо "1" + 0, де застосовується те ж саме правило.
"" - 1 + 0//   -1  Віднімання - (як і більшість математичних операцій) працює тільки з числами, воно перетворює порожній рядок "" на 0.
true + false//  1
6 / "3"//       2
"2" * "3"//     6
4 + 5 + "px"// "9px"
"$" + 4 + 5//   $45
"4" - 2//        2
"4px" - 2//    (NAN)
"  -9  " + 5// " -9 5"  Додавання з рядком додає число 5 до рядка.
"  -9  " - 5//   -14    Віднімання завжди перетворює на числа, тому рядок " -9 " перетвориться на число -9 (ігноруючи пробіли навколо нього).
null + 1//        1     null стає 0 після числового перетворення.
undefined + 1//  NAN    undefined стає NaN після числового перетворення.
" \t \n" - 2//   -2     Символи пробілів по краях рядка ігноруються під час перетворення в число. Тому рядок, який містить лише символи \t, \n або «звичайні» пробіли, прирівнюється до пустого рядка і стає 0 після числового перетворення.
*/



/*
5 > 4 → true
"ананас" > "яблуко" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
Ось чому такі результати:

Очевидно, 5 більше за 4. true.
Посимвольне порівняння, тому false. "а" менше за "я".
Знову посимвольне порівняння. Перший символ рядка "2" більший за перший символ другого рядка — "1".
Спеціальний випадок. Значення null і undefined рівні лише один одному під час нестрогого порівняння.
Строге порівняння різних типів, тому false.
Аналогічно, як в кроці (4), null дорівнює лише undefined.
Строге порівняння різних типів.*/
//let accessAllowed;
//let age = prompt('Скільки вам років?', '');

/*if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);*/

//let accessAllowed = (age > 18) ? true : false;
//alert(accessAllowed);

/*let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}
console.log(price);*/

/*function getPrice(subscription) {
  let price = 0;

  if (subscription === "pro") {
    price = 100;
  }
  return price
}
console.log (getPrice("free"));
console.log (getPrice("pro"));*/


/*
function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  }
  else {
    return "Unsatisfactory";
  }
}
console.log(checkGrade(40));

console.log(checkGrade(70));*/

/*
function checkStorage(available, ordered) {
  if (odered>available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}
console.log(checkStorage);*/

/*
const option = 5;
let message = "";

switch (option) {
  case 1:
    message = "Ви можете забрати товар завтра у нашому офісі з 12:00";
    break;
  case 2:
    message = "Кур'єр доставить замовлення завтра з 9.00 до 19.00";
    break;
  case 3:
    message = "Посилка буде відправлена сьогодні";
    break;
  default:
    message = "Вам передзвонить менеджер";
}
console.log(message);
*/

/*
let myName 
console.log(myName)

myName = 'Vlada'
console.log(myName)*/
/*
const myName = 'Vlada'
console.log(myName)
*/
/*
const objectA = {
  a: 10,
  b: true
}
const copyOfA = objectA
copyOfA.c = 'abc'
console.log (objectA)*/

 /*let name = 'Vlada'
let age = '38'
let learningJS = true;


console.log(name);
console.log(age);
console.log(learningJS);
*/
/*const name = 'Vlada'
const age = '38'
const currentYear = 2025;

const birthYear = currentYear - age;

console.log(birthYear);*/

/*
let number = 28; 
if (number % 2 === 0) {
  console.log(number + " — парне число.");
} else {
  console.log(number + " — непарне число.");
}*/