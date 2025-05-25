// Smooth scroll
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
