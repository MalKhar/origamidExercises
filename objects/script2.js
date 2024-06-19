// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let bruno = {
  nome: "Bruno",
  sobrenome: "Branco",
  idade: 25,
  hobby: "Chess",
  showFullName(firstName, surName) {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let dog = {
  color: "black",
  age: 10,
  brand: "labrador",
  bark(person) {
    person == "man" ? console.log("bark") : console.log("fala baixo nengue");
  },
};
