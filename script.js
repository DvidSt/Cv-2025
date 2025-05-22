/* =============== JS Mejorado =============== */
// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.card, .project-card').forEach(el => observer.observe(el));

// Efecto cursor personalizado
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Efecto hover en elementos interactivos
document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});


document.querySelectorAll('.card').forEach(card => {
  const btn = card.querySelector('.toggle-btn');

  btn.addEventListener('click', () => {
    // Cierra todas las demás tarjetas
    document.querySelectorAll('.card').forEach(c => {
      if (c !== card) {
        c.classList.remove('open');
      }
    });

    // Alterna la apertura de esta tarjeta
    card.classList.toggle('open');
  });
});