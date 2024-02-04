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
 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.onscroll = () => {
  sections.forEach(sect => {
    const top = window.scrollY;
    const offset = sect.offsetTop;
    const height = sect.offsetHeight;
    const id = sect.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.parentElement.classList.remove('active'); // Remove 'active' class from li
        link.classList.remove('active-link'); // Remove 'active-link' class from a
      });

      const liElement = document.querySelector('.nav-list li a[href*="' + id + '"]').parentElement;
      const aElement = document.querySelector('.nav-list a[href*="' + id + '"]');

      liElement.classList.add('active'); // Add 'active' class to li
      aElement.classList.add('active-link'); // Add 'active-link' class to a
    }
  });
};



/* window.onscroll = () => {
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
  }; */



  const watchVideo = document.querySelector('.watch-video');
const watchDemo = document.querySelector('.home__video');

watchVideo.addEventListener('click', () => {
    watchDemo.classList.toggle('video-open');

    if (watchDemo.classList.contains('video-open')) {
        watchVideo.innerHTML = '<i class="ri-stop-circle-fill"></i> Close';
        watchDemo.style.display = 'block'; // Ensure video element is visible
        // You may also want to add code to play the video here
    } else {
        watchVideo.innerHTML = '<i class="ri-play-circle-fill"></i> Watch Demo';
        watchDemo.style.display = 'none'; // Hide the video element
        // You may also want to add code to pause or stop the video here
    }
});

  /* const watchVideo = document.querySelector('.watch-video'),
   watchDemo = document.querySelector('.watch-demo');

  watchVideo.addEventListener('click', () => {
      watchDemo.classList.toggle('iframe');
      
      if (watchDemo.classList.contains('iframe')) {
          watchVideo.innerHTML = '<i class="ri-stop-circle-fill"></i> Close';
      } else {
          watchVideo.innerHTML = '<i class="ri-play-circle-fill"></i> Watch Demo';
      }
  }); */



  
let swiperCards = new Swiper(".cheese-content", {
  loop: true,
  spaceBetween: 40,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

//Const More Menu

document.addEventListener('DOMContentLoaded', function () {
  const viewMoreButton = document.getElementById('view__more');
  const viewMoreMenu = document.getElementById('view-more-menu');

  // Function to toggle the menu visibility
  function toggleMenu() {
      viewMoreMenu.classList.toggle('show-menu');
  }

  // Event listener for "View More" button
  viewMoreButton.addEventListener('click', function () {
      toggleMenu();
  });

  // Event listener for "Close Cheese Menu" button
  const closeCheeseMenuButton = document.querySelector('.close__cheese__menu');
  closeCheeseMenuButton.addEventListener('click', function () {
      toggleMenu();
  });
});




/*SHOW SCROLL UP*/
function scrollTop() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollTop);

  



  //scroll reveal

  ScrollReveal({   
    origin:'top',
    distance:'80px',
    duration:1400,
    delay:200,
    reset:'true', 
    });

    ScrollReveal().reveal('.about-info', { origin:'right'});
    ScrollReveal().reveal(' .about-img', { origin:'left'});
    ScrollReveal().reveal('.home-image, .menu__title, .blog-subtitle, .blog__menu', { origin: 'bottom'});
    ScrollReveal().reveal('.container-home, .menu__card, .blog-title', { origin:'top'});