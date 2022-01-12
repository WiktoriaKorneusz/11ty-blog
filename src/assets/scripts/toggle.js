document.body.classList.add("dark");
const toggle = document.querySelector("#toggle-button");
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        })