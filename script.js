// Dropdown menu toggle
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

// Carousel functionality
const carousel = document.getElementById('carousel');
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');

function scrollCarousel(direction) {
  const item = carousel.querySelector('.carousel-item');
  if (!item) return;
  const scrollAmount = item.offsetWidth + 22; // gap
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

if (leftBtn && rightBtn && carousel) {
  leftBtn.addEventListener('click', () => scrollCarousel(-1));
  rightBtn.addEventListener('click', () => scrollCarousel(1));

  // Touch swipe
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
  // Hide/Show buttons on edges
  function updateBtnVisibility() {
    if (!carousel) return;
    leftBtn.style.visibility = carousel.scrollLeft > 5 ? 'visible' : 'hidden';
    rightBtn.style.visibility =
      carousel.scrollLeft + carousel.clientWidth + 5 < carousel.scrollWidth ? 'visible' : 'hidden';
  }
  carousel.addEventListener('scroll', updateBtnVisibility);
  window.addEventListener('load', updateBtnVisibility);
  window.addEventListener('resize', updateBtnVisibility);
  updateBtnVisibility();
}

// Gallery Lightbox (expand image)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
if (carousel && lightbox && lightboxImg && closeBtn) {
  carousel.querySelectorAll('.carousel-item img').forEach(img => {
    img.addEventListener('click', (e) => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });
  closeBtn.onclick = function() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  };
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  };
}
