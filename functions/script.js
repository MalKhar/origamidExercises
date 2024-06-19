function isTrue(x) {
  return !!x;
}

console.log(isTrue(0));

function perimeter(a, b, c, d) {
  return a + b + c + d;
}

console.log(perimeter(1, 1, 1, 1));

function fullName(firstName, surName) {
  return `${firstName} ${surName}`;
}

console.log(fullName("Bruno", "Branco"));

function isPar(num) {
  num % 2 == 0 ? console.log("par") : console.log("ímpar");
}

isPar();

function whatType(anything) {
  return typeof anything;
}

console.log(whatType("test"));

onscroll = document.addEventListener("scroll", (event) => {
  console.log("Bruno Camargos Branco");
});

// Corrija o erro abaixo
let totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
