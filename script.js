// Menu suspenso responsivo
const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => { menu.classList.remove('open'); });
  });
}
