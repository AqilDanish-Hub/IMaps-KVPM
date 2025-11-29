// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('theme-toggle');

  // 1️⃣ Semak tema dalam localStorage
  let currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // 2️⃣ Set toggle checkbox ikut tema semasa
  if (toggle) toggle.checked = currentTheme === 'light';

  // 3️⃣ Tukar tema bila toggle diubah
  if (toggle) {
    toggle.addEventListener('change', () => {
      const theme = toggle.checked ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      animateToggle();
    });
  }

  // 4️⃣ Fungsi animasi toggle (switch effect)
  function animateToggle() {
    if (!toggle) return;
    const slider = toggle.nextElementSibling; // span.slider
    if (!slider) return;
    slider.style.transition = "0.3s all ease";
  }

  // 5️⃣ Optional: animasi awal ikut tema semasa
  animateToggle();
});
