// AI assissted (not generated) code
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeMenuButton = document.getElementById("close-menu");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeMenuButton.addEventListener("click", function() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", function() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});