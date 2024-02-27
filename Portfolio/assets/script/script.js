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
  
    ScrollReveal().reveal('.heading, .sub-heading, .about-span1,.about-p1,.about-text,.interest-p,.interest-heading,.skills-content,.services-content,.portfolio-content,.portfolio-nav', { origin: 'top' });
    ScrollReveal().reveal('.home-p1, .home-p2,.home-img,.about-heading,.info,.services-container,.form-div,.send-btn', { origin: 'right' });
    ScrollReveal().reveal('.socials,.about-img,.portfolio-box', { origin: 'left' });
    ScrollReveal().reveal('.cv-btn,.contact-btn,.bar,.skills-div', { origin: 'bottom' });
  });
