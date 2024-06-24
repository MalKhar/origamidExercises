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
