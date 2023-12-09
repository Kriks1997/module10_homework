const auto = ["bmw", "audi", "mersedes"];
let q = 0;
for (let i = 0; i < auto.length; i = i + 1) {
  if (auto[0] === auto[i]) {
    continue;
  } else {
    q++;
  }
}
if (q === 0) {
  console.log(true);
} else {
  console.log(false);
}