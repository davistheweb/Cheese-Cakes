//hamburger js

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    navLinks = nav.querySelectorAll('a');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open-icon');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open-icon');
    });
  });
};

showMenu('nav-toggle', 'nav-list');


//active js 

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
          link.parentElement.classList.remove('active');
          link.classList.remove('active-link');
        });

        const liElement = document.querySelector('.nav-list li a[href*="' + id + '"]').parentElement;
        const aElement = document.querySelector('.nav-list a[href*="' + id + '"]');

        liElement.classList.add('active');
        aElement.classList.add('active-link');
      }
    });
  };

// watch video
  const watchVideo = document.querySelector('.watch-video'),
  watchDemo = document.querySelector('.home__video');

  watchVideo.addEventListener('click', () => {
      watchDemo.classList.toggle('video-open');

      if (watchDemo.classList.contains('video-open')) {
          watchVideo.innerHTML = '<i class="ri-stop-circle-fill"></i> Close';
          watchDemo.style.display = 'block';
      } else {
          watchVideo.innerHTML = '<i class="ri-play-circle-fill"></i> Watch Demo';
          watchDemo.style.display = 'none';
      }
  });

//swiper js
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


  // More Menu

  document.addEventListener('DOMContentLoaded', function () {
    const viewMoreButton = document.getElementById('view__more');
    const viewMoreMenu = document.getElementById('view-more-menu');

    function toggleMenu() {
        viewMoreMenu.classList.toggle('show-menu');
    }

    viewMoreButton.addEventListener('click', function () {
        toggleMenu();
    });

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

      ScrollReveal().reveal('.about-info, .contact-form', { origin:'right'});
      ScrollReveal().reveal(' .about-img, .contact-card', { origin:'left'});
      ScrollReveal().reveal('.home-image, .menu__title, .blog-subtitle, .blog__menu', { origin: 'bottom'});
      ScrollReveal().reveal('.container-home, .menu__card, .blog-title', { origin:'top'});