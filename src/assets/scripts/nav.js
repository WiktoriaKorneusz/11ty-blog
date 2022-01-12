let selected = document.querySelector("selected");
const links = document.querySelectorAll(".inside-link");
let openSection = document.querySelector("#home");
const topLink = document.querySelector(".top");
links.forEach((link) =>
    link.addEventListener("click", () => {
        console.log(link.getAttribute("href"));
        const target = link.getAttribute("href");
        const targetComponent = document.querySelector(target);
        openSection.style.display = "none";
        targetComponent.style.display = "block";

        openSection = targetComponent;
        setTimeout(() => {
            topLink.click();
        }, 0);
    })
);
