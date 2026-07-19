const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', '打开导航菜单');
  document.body.classList.remove('menu-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? '关闭导航菜单' : '打开导航菜单');
  document.body.classList.toggle('menu-open', isOpen);
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));

function updatePageState() {
  header.classList.toggle('scrolled', window.scrollY > 24);
  const position = window.scrollY + 160;
  let currentId = 'home';
  sections.forEach(section => {
    if (position >= section.offsetTop) currentId = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`));
}

window.addEventListener('scroll', updatePageState, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
updatePageState();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
  revealObserver.observe(element);
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
