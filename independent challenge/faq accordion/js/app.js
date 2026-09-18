'use strict';

const items = document.querySelectorAll('.faq-item');

items.forEach((item) => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    items.forEach((otherItem) => {
      otherItem.classList.remove('is-open');
      const otherButton = otherItem.querySelector('.faq-question');
      otherButton.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
