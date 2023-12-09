const numbers = ["строка", 2, 3, 4, 5, 6, 7, 8, 9, 10, true, 0, 0, 0, 0, 22, 22, 22];

let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] !== "number") {
    continue;
  } if (numbers[i] === 0) {
    zero++;
} else {
   if (numbers[i] % 2 === 1) {
     even++;
    } else {
        odd++;
    }
  }
}

console.log(zero);
console.log(even);
console.log(odd);
