let x = 33;
switch (typeof x) {
  case "number":
    console.log(x + " - число");
    break;
  case "string":
    console.log(x + " - строка");
    break;
  case "boolean":
    console.log(x + " - логический тип");
    break;
  default:
    console.log(x + " - тип x не определен");
    break;
}