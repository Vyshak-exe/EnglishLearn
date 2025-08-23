document.addEventListener('DOMContentLoaded', function() {
  // Pricing toggle functionality
  const monthlyToggle = document.getElementById('monthly');
  const yearlyToggle = document.getElementById('yearly');
  const monthlyPrices = document.querySelectorAll('.monthly-price');
  const yearlyPrices = document.querySelectorAll('.yearly-price');
  
  monthlyToggle.addEventListener('change', function() {
    if (this.checked) {
      monthlyPrices.forEach(price => price.classList.remove('d-none'));
      yearlyPrices.forEach(price => price.classList.add('d-none'));
    }
  });
  
  yearlyToggle.addEventListener('change', function() {
    if (this.checked) {
      monthlyPrices.forEach(price => price.classList.add('d-none'));
      yearlyPrices.forEach(price => price.classList.remove('d-none'));
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Form submission
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});