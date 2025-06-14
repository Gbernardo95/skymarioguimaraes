document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'obrigado.html';
    });
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
