// Menu Button
const headerResponsiveBtn = document.querySelector("#res-btn");
// Navbar
const navMenu = document.querySelector("#navMenu");
// Page Header
const pageHeader = document.querySelector(".page-header")

// Responsive Header
headerResponsiveBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Sticky Header
window.onscroll = function () {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
        pageHeader.classList.add("sticky");
        console.log()
    } else {
        if (pageHeader.classList.contains("sticky")) {
            pageHeader.classList.remove("sticky");
        }
    }
}