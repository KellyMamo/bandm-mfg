// ----- Theme toggle -----
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var themeLabel = themeToggle.querySelector('.label');

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    themeLabel.textContent = theme === 'dark' ? '   ' : 'Light';
  }

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');

  themeToggle.addEventListener('click', function(){
    var current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ----- Mobile nav -----
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  var mobileClose = document.getElementById('mobileClose');

  burgerBtn.addEventListener('click', function(){ mobileNav.classList.add('open'); });
  mobileClose.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  });

  // ----- Card carousel arrows (simple scroll nudge on small screens / visual feedback) -----
  var cardGrid = document.querySelector('.card-grid');
  var arrows = document.querySelectorAll('.band-arrows button');
  if(arrows.length === 2 && cardGrid){
    arrows[0].addEventListener('click', function(){ cardGrid.scrollBy({left:-320, behavior:'smooth'}); });
    arrows[1].addEventListener('click', function(){ cardGrid.scrollBy({left:320, behavior:'smooth'}); });
  }

  // ----- Contact form (front-end only demo handling) -----
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    var formStatus = document.getElementById('formStatus');
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      formStatus.textContent = 'Thanks — your message has been sent. We\'ll get back to you shortly.';
      formStatus.classList.add('show', 'ok');
      contactForm.reset();
    });
  }
