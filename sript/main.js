const burgerMenu = document.querySelector(".burger-menu");
const burgerBtn = document.querySelector(".burger-btn");
const burgerCloseBtn = document.querySelector(".burger-close-btn");

burgerCloseBtn.addEventListener("click", () => {
  burgerMenu.classList.add("is-active");
});

burgerBtn.addEventListener('click', ()=> {
    burgerMenu.classList.remove('is-active')
})
