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


// HUD UI
const hud = document.querySelector('.hud');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  hud.style.opacity = 1 - Math.min(scrollY / 200, 0.8);
});

// Botón de sonido
const soundToggle = document.getElementById("soundToggle");
let audio = new Audio('ambience.mp3'); // Asegúrate de tener este archivo
audio.loop = true;

soundToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    soundToggle.textContent = "🔊 Sound: On";
  } else {
    audio.pause();
    soundToggle.textContent = "🔇 Sound: Off";
  }
});