// Lightbox gallery for gallery-section
const gallery = document.getElementById('carousel') || document.querySelector('.gallery-carousel');
if (gallery) {
  gallery.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox').style.display = 'flex';
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox-img').alt = img.alt;
    });
  });
}
const closeBtn = document.querySelector('.lightbox .close');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
if (closeBtn && lightbox && lightboxImg) {
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
