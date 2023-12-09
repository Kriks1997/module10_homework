let num = +prompt("Введите число");
console.log(typeof num);
let result = isNaN(num);
if (result) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  if (num % 2 === 0) {
    console.log ("Число чётное");
  } else {
    console.log ("Число нечётное");
  }
}