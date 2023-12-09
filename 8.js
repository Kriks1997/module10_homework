const car = new Map();

car.set("BMW", "M3");
car.set("AUDI", "R8");
car.set("MERSEDES", "CLS");

for (let brand of car.keys()) {
	console.log("Ключ - ", brand);
}

for (let model of car.values()) {
	console.log("Значение - ", model);
}