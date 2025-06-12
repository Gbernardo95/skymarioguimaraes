// Menu suspenso responsivo
const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
document.querySelectorAll('.navbar-menu a').forEach(link => {
  link.addEventListener('click', () => { menu.classList.remove('open'); });
});

// Carousel simples para desktop e mobile
const carousel = document.getElementById('carousel');
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');

function scrollCarousel(direction) {
  const item = carousel.querySelector('.carousel-item');
  if (!item) return;
  const scrollAmount = item.offsetWidth;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

if (leftBtn && rightBtn && carousel) {
  leftBtn.addEventListener('click', () => scrollCarousel(-1));
  rightBtn.addEventListener('click', () => scrollCarousel(1));

  // Suporte a swipe no mobile
  let startX = null;
  carousel.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchend', (e) => {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;
    if (diff > 40) scrollCarousel(1);
    else if (diff < -40) scrollCarousel(-1);
    startX = null;
  });

  // Permite setas sumirem se no início/fim do scroll
  function updateBtnVisibility() {
    if (!carousel) return;
    leftBtn.style.visibility = carousel.scrollLeft > 5 ? 'visible' : 'hidden';
    rightBtn.style.visibility =
      carousel.scrollLeft + carousel.clientWidth + 5 < carousel.scrollWidth ? 'visible' : 'hidden';
  }
  carousel.addEventListener('scroll', updateBtnVisibility);
  window.addEventListener('load', updateBtnVisibility);
  window.addEventListener('resize', updateBtnVisibility);

  // Inicializa corretamente ao carregar
  updateBtnVisibility();
}
