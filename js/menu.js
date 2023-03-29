const menu = document.getElementById("menu-hamburguer");

menu.addEventListener('click', mostraMenu);

function mostraMenu() {
    document.getElementsByClassName("menu-nav")[0].classList.toggle("reponsive");
    document.getElementsByClassName("fa-bars")[0].classList.toggle("reponsive");
} 