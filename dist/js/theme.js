// script.js
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('modeSwitcher');
  const currentMode = localStorage.getItem('theme') || 'light';

  if (currentMode === 'dark') {
      document.body.classList.add('dark-mode');
      switcher.textContent = 'Switch to Light Mode';
  }

  switcher.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      switcher.textContent = mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      localStorage.setItem('theme', mode);
  });
});