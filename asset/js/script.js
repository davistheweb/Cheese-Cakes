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

// active
/* const sections = document.querySelectorAll('section');
const navLists = document.querySelectorAll('header .nav-list a');

window.onscroll = () => {
    sections.forEach(sect => {
        const top = window.scrollY;
        const offset = sect.offsetTop;
        const height = sect.offsetHeight;
        const id = sect.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLists.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header .nav-list a[href*=' + id + ']').classList.add('active');
            };
    });
};
 */
/* 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .nav-list a');

window.onscroll = () => {
  sections.forEach(sect => {
    const top = window.scrollY;
    const offset = sect.offsetTop;
    const height = sect.offsetHeight;
    const id = sect.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header .nav-list a[href*="' + id + '"]').classList.add('active');
    }
  });
};
 */

window.onscroll = () => {
    console.log("Scrolling...");
  
    sections.forEach(sect => {
      const top = window.scrollY;
      const offset = sect.offsetTop;
      const height = sect.offsetHeight;
      const id = sect.getAttribute('id');
  
      console.log("Section ID:", id);
  
      if (top >= offset && top < offset + height) {
        console.log("Section in view:", id);
  
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
  
        document.querySelector('header .nav-list a[href*="' + id + '"]').classList.add('active');
      }
    });
  };
  