let changeIcon = function(icon) {
    icon.classList.toggle('bi-x');

    const hamburger = document.querySelector(".hamburger");
    const HeaderMenu = document.querySelector(".header-menu");
    HeaderMenu.classList.toggle("active");

    const mainHeader = document.querySelector(".main-header");
    mainHeader.classList.toggle("active");

    const iconX = document.querySelector(".bi-list");
    iconX.classList.toggle("active");

}

let chanageMenu = function() {
    const HeaderMenu = document.querySelector(".header-menu");
    const listIcon = document.querySelector(".bi-list");
    const mainHeader = document.querySelector(".main-header");
    const iconX = document.querySelector(".bi-list");

    HeaderMenu.classList.remove("active");
    listIcon.classList.remove("bi-x");
    mainHeader.classList.remove("active");
    iconX.classList.remove("active");
}



