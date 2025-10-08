AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  });

  
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

   
      if (href && !href.startsWith('http') && href !== '#') {
        e.preventDefault();

        document.body.classList.remove('loaded'); 

        setTimeout(() => {
          window.location.href = href;
        }, 600); 
      }
    });
  });