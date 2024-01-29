//hamburger, Nav-list

const navBurger = document.querySelector('#nav-burger');
const navList = document.querySelector('.nav-list');

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle('ri-close-line');
    navList.classList.toggle("open");
});


