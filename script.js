// Navigation remains usable without JavaScript; enhance it with a disclosure menu.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
if (menu && nav) {
  const setOpen = open => {
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    menu.textContent = open ? '✕' : '☰';
  };
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      menu.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) setOpen(false);
  });
  matchMedia('(min-width:1101px)').addEventListener('change', () => setOpen(false));
}

// Both contact forms prepare the same email, including selected products.
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = name => String(fields.get(name) || '').trim();
    const products = Array.from(document.querySelectorAll('[data-product][aria-pressed="true"]'), button => button.dataset.product);
    const body = 'Name: ' + value('name') + '\nE-Mail: ' + value('email')
      + '\nTelefonnummer: ' + (value('telefon') || 'Nicht angegeben')
      + '\nThema: ' + value('thema')
      + (document.getElementById('selection') ? '\n\nGewählte Produktbereiche:\n' + (products.length ? products.map(name => '• ' + name).join('\n') : 'Bitte um Beratung zu Laboreinrichtungen') : '')
      + '\n\nNachricht:\n' + value('nachricht');
    window.location.href = 'mailto:info@laborbau-grittmann.de?subject='
      + encodeURIComponent('Anfrage: ' + value('thema')) + '&body=' + encodeURIComponent(body);
  });
});

// Keep the current gallery category visible without replacing anchor navigation.
const categoryLinks = [...document.querySelectorAll('.category-nav a')];
const markCategory = id => categoryLinks.forEach(link => {
  if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
});
categoryLinks.forEach(link => link.addEventListener('click', () => markCategory(link.hash.slice(1))));
if (categoryLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => markCategory(entry.target.id));
  }, { rootMargin: '-190px 0px -45% 0px', threshold: 0 });
  document.querySelectorAll('.project-section').forEach(section => observer.observe(section));
}
