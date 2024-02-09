document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 100
    });
  
    ScrollReveal().reveal('.home-content h1, .services-content h1, .about-content h1, .about-span1', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container div, .about-brands div', { origin: 'right' });
    ScrollReveal().reveal('.home-content p, .services-content p, .about-content p, .learn-btn, .button', { origin: 'bottom' });
  });
  