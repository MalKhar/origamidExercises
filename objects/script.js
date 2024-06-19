var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return quadrado.lados * lado;
  },
};

console.log(quadrado.perimetro(6));
