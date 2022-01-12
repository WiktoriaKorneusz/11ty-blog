const burger = document.querySelector(".nav-menu__burger");
const burger_btn = document.querySelector(".nav-menu");
const nav = document.querySelector("nav ul");
const wrapper = document.querySelector(".wrapper");
const navLinks = document.querySelectorAll("nav ul .inside-link");
// burger.addEventListener("click", () => {
//     console.log("bonk");
//     burger.classList.toggle("burger-open");
// });

burger_btn.addEventListener("click", () => {
    // console.log("bonk");
    burger.classList.toggle("burger-open");
    burger_btn.classList.toggle("menu-open");
    nav.classList.toggle("nav-open");
    wrapper.classList.toggle("logo-open");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            burger.classList.remove("burger-open");
            burger_btn.classList.remove("menu-open");
            nav.classList.remove("nav-open");
            wrapper.classList.remove("logo-open");
        });
    });
});
