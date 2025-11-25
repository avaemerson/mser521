/* ============================================
   SCROLL EFFECTS - JavaScript
   ============================================ */

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1, // Trigger when 10% of element is visible
};

// Scroll animation observer
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-in');
      // Optional: Unobserve after animation to improve performance
      // scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize scroll animations on page load
function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('[data-scroll]');
  scrollElements.forEach(el => {
    scrollObserver.observe(el);
  });
}

// Parallax effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  function handleParallax() {
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.dataset.parallax) || 0.5;
      const rect = element.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translateY = scrollPercent * 100 * speed;

      element.style.transform = `translateY(${translateY}px)`;
    });
  }

  window.addEventListener('scroll', handleParallax);
  handleParallax(); // Initial call
}

// Smooth scroll to anchor links
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 100; // Account for fixed header

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}

// Scroll progress indicator
function initScrollProgress() {
  const progressBar = document.querySelector('[data-scroll-progress]');
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress(); // Initial call
}

// Header scroll effect (show/hide on scroll)
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Optional: Hide/show header on scroll direction
    // if (currentScroll > lastScroll && currentScroll > 200) {
    //   header.classList.add('header-hidden');
    // } else {
    //   header.classList.remove('header-hidden');
    // }

    lastScroll = currentScroll;
  });
}

// Initialize all scroll effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initParallax();
  initSmoothScroll();
  initScrollProgress();
  initHeaderScroll();
});

// Export functions for external use if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initScrollAnimations,
    initParallax,
    initSmoothScroll,
    initScrollProgress,
    initHeaderScroll,
  };
}
