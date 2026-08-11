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
// ==========================================
// PRODUCT CARD CLICK
// ==========================================

const productCards =
  document.querySelectorAll(".simple-product-card");

productCards.forEach((card) => {

  card.addEventListener("click", () => {

    productCards.forEach((otherCard) => {

      if (otherCard !== card) {
        otherCard.classList.remove("active");
      }

    });

    card.classList.toggle("active");

  });

});
// ==========================================
// PRODUCT SHOWROOM SWITCHING
// ==========================================

const productButtons =
  document.querySelectorAll(".product-selector-item");

const productDisplay =
  document.querySelector(".product-display");

const displayNumber =
  document.getElementById("displayNumber");

const displayCategory =
  document.getElementById("displayCategory");

const displayTitle =
  document.getElementById("displayTitle");

const displayDescription =
  document.getElementById("displayDescription");

const displayTags =
  document.getElementById("displayTags");


productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Don't do anything if already selected
    if (button.classList.contains("active")) {
      return;
    }


    // Remove active from previous button
    productButtons.forEach((item) => {
      item.classList.remove("active");
    });


    // Make clicked button active
    button.classList.add("active");


    // Animate big display OUT
    productDisplay.classList.add("switching");


    setTimeout(() => {

      // ======================================
      // PUT CLICKED PRODUCT IN BIG DISPLAY
      // ======================================

      displayNumber.textContent =
        button.dataset.number;

      displayCategory.textContent =
        button.dataset.category;

      displayTitle.textContent =
        button.dataset.title;

      displayDescription.textContent =
        button.dataset.description;


      // Change product tags
      displayTags.innerHTML = "";

      const tags =
        button.dataset.tags.split("|");

      tags.forEach((tag) => {

        const span =
          document.createElement("span");

        span.textContent = tag;

        displayTags.appendChild(span);

      });


      // Animate big display IN
      productDisplay.classList.remove("switching");

    }, 250);

  });

});