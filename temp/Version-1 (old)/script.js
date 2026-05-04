  let slideIndex = 0;
  const slides = document.querySelectorAll('.slideshow img');

  function showSlide() {
    slides.forEach((img, index) => {
      img.classList.remove('active');
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  // Initialize first image
  slides[0].classList.add('active');

  setInterval(showSlide, 3000); // Change slide every 3 seconds







  // Get the header element
const header = document.querySelector('header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Check if the page has been scrolled down more than 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Add the class to change color
  } else {
    header.classList.remove('scrolled'); // Remove the class when at the top
  }
});







  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-shown');
    nav.classList.toggle('mobile-hidden');
  }

  // ✅ Auto-close menu on link click (for anchor links)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      if (nav.classList.contains('mobile-shown')) {
        nav.classList.remove('mobile-shown');
        nav.classList.add('mobile-hidden');
      }
    });
  });






