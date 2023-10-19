const headerResponsiveBtn = document.querySelector("#res-btn");
const navMenu = document.querySelector("#navMenu");

headerResponsiveBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
});