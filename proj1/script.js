/*// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll("img");
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesWithImagem = document.querySelectorAll('img[src^="img/imagem"]');
// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('a[href^="#"]');
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".animais-descricao h2");
// Selecione o último p do site
const paragraphs = document.querySelectorAll("p");
const lastP = paragraphs[paragraphs.length - 1];

console.log(allImages, imagesWithImagem, internalLinks, firstH2, lastP);


// Mostre no console cada parágrado do site

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  console.log(paragraph);
});

// Mostre o texto dos parágrafos no console
paragraphs.forEach((paragraph) => {
  console.log(paragraph.innerHTML);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);



// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((menuItem) => menuItem.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

for (i = 1; i < menuItems.length; i++) {
  menuItems[i].classList.remove("ativo");
}

// Verifique se as imagens possuem o atributo alt
const allImages = document.querySelectorAll("img");

allImages.forEach((image) => {
  image.hasAttribute("alt") ? console.log("yes") : console.log("no");
});

// Modifique o href do link externo no menu

const externalLink = document.querySelector('.menu a[href^="http"]');

externalLink.setAttribute("href", "testeeeeee");

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector("img");
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll("img");
let sum = 0;
images.forEach((image) => {
  sum += image.offsetWidth;
  console.log(sum);
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const menuCopy = menu.cloneNode(true);

const copy = document.querySelector(".copy");

copy.appendChild(menuCopy);

// Selecione o primeiro DT da dl de Faq
const faqDt = document.querySelector(".faq dt");

// Selecione o DD referente ao primeiro DT
const firstDd = faqDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
*/
