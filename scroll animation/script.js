function initNavAnimals() {
  const listMenu = document.querySelectorAll(".js-list-menu li");
  const listContent = document.querySelectorAll(".js-animals-content section");
  listContent[0].classList.add("active");

  if (listMenu.length && listContent.length) {
    function activeTab(index) {
      listContent.forEach((section) => {
        section.classList.remove("active");
      });

      listContent[index].classList.add("active");
    }

    listMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  } else {
  }
}
initNavAnimals();

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(".js-menu li a[href^='#']");

  function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    console.log(typeof section);
    console.log(section);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}
initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  animateScroll();

  function animateScroll(e) {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const halfscreen = window.innerHeight * 0.6;
      sectionTop - halfscreen < 0 ? section.classList.add("active") : false;
    });
  }

  window.addEventListener("scroll", animateScroll);
}
initScrollAnimation();

const hoje = Math.random() < 0.5;

hoje ? console.log("tá pago") : console.log("mamou");
