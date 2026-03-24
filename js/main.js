// Nav toggle
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }
  });
}

// Scrolled class
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
