let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset= sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
    if(top>= offset && top <offset +height){
         navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         })
    }

    })


    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 100
    });
  
    ScrollReveal().reveal('.home-content h1, .services-content h1, .about-content h1, .about-span1', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container div, .about-brands div', { origin: 'right' });
    ScrollReveal().reveal('.home-content p, .services-content p, .about-content p, .learn-btn, .button, .contact', { origin: 'bottom' });
  });