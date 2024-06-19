// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

var brasilWon = [1959, 1962, 1970, 1994, 2002];

for (i = 0; i < brasilWon.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilWon[i]}`);
}

brasilWon.forEach((year) => console.log(`O Brasil ganhou a copa de ${year}`));

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] == "Pera") {
    break;
  }
}

var lastFruit = frutas[frutas.length - 1];

//----------------------------------------------------------------------

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa ? true : false;
