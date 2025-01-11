document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
      const toggleIcon = item.querySelector('.toggle');
      toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
    });
  });
  