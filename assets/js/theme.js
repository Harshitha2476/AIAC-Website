/**
 * AIAC Research Lab - Theme Manager
 * Supports Light & Dark themes with localStorage persistence and OS preference detection.
 * Prevents FOUC (Flash of Unstyled Theme).
 */

(function () {
  // 1. Immediate execution: apply theme before body renders
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const theme = getPreferredTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 2. Export global theme toggle function
  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', newTheme);
    updateThemeButtons(newTheme);

    // Dispatch event for any custom listeners
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
  };

  function updateThemeButtons(currentTheme) {
    const isDark = currentTheme === 'dark';
    const buttons = document.querySelectorAll('[data-theme-toggle], #theme-toggle, #mobile-theme-toggle');

    buttons.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');

      // Update text/icon inside if standard markup exists
      const darkIcon = btn.querySelector('.theme-icon-dark');
      const lightIcon = btn.querySelector('.theme-icon-light');
      const textLabel = btn.querySelector('.theme-label');

      if (darkIcon && lightIcon) {
        if (isDark) {
          darkIcon.classList.add('hidden');
          lightIcon.classList.remove('hidden');
        } else {
          darkIcon.classList.remove('hidden');
          lightIcon.classList.add('hidden');
        }
      }

      if (textLabel) {
        textLabel.textContent = isDark ? 'Light' : 'Dark';
      }
    });
  }

  // 3. Attach listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    updateThemeButtons(current);

    const buttons = document.querySelectorAll('[data-theme-toggle], #theme-toggle, #mobile-theme-toggle');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  });

  // 4. Listen to OS system preference changes (only if user hasn't explicitly saved a choice)
  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const sysTheme = e.matches ? 'dark' : 'light';
        if (sysTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        updateThemeButtons(sysTheme);
      }
    });
  } catch (err) {
    // Media query listener not supported in legacy environments
  }
})();
