const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Hello Ruang by Kyral, I would like to enquire about a project.',
    `Name: ${data.get('name')}`,
    `Project type: ${data.get('project')}`,
    data.get('message') ? `About my space: ${data.get('message')}` : ''
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/601154163056?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const heroSlides = [...document.querySelectorAll('.hero-slideshow img')];
const heroCategory = document.querySelector('#hero-category');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (heroSlides.length > 1 && !reducedMotion) {
  let currentSlide = 0;
  window.setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
    heroCategory.textContent = heroSlides[currentSlide].dataset.label;
  }, 4500);
}
