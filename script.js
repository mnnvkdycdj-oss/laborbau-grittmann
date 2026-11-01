const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');if(menu&&nav){menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));}
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
