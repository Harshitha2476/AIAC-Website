/**
 * AIAC Research Lab - Global Navbar Interactions
 * Handles mobile drawer, accessible toggles, keyboard trap/esc, and active nav states.
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  if (menuBtn && mobileMenu) {
    function toggleMobileMenu(forceState) {
      const isOpen = forceState !== undefined ? forceState : mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        if (openIcon) openIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        if (openIcon) openIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    }

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = mobileMenu.classList.contains('hidden');
      toggleMobileMenu(willOpen);
    });

    // Close when clicking a link inside mobile menu
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu(false);
        menuBtn.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });
  }

  // Active navigation link indicator
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('header nav a, #mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('#')[0].split('?')[0];

    // Check exact match or root index match
    if (
      (linkPath === currentPath) ||
      (linkPath === '' && currentPath === 'index.html') ||
      (currentPath === '' && linkPath === 'index.html')
    ) {
      link.classList.add('nav-link-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Sticky navbar shadow on scroll
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Ensure interactions engine is loaded across all pages
  if (!window.aiacInteractionsLoaded && !document.querySelector('script[src*="interactions.js"]')) {
    const script = document.createElement('script');
    script.src = 'assets/js/interactions.js';
    script.async = true;
    document.body.appendChild(script);
  }
});
