/* //hamburger, Nav-list

const navBurger = document.querySelector('#nav-burger');
const navList = document.querySelector('.nav-list');

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle('ri-close-line');
    navList.classList.toggle("open");
});


 */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');

        toggle.classList.toggle('open-icon');
    })

}
showMenu('nav-toggle', 'nav-list');
