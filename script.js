const ring = document.querySelector('.orbital-ring');
const planets = ring.querySelectorAll('.planet');
planets.forEach((planet, i) => {
  const angle = i * (Math.PI * 2) / planets.length;
  const radius = 120 + (Math.random() * 20 - 10);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  planet.style.left = `${150 + x}px`;
  planet.style.top = `${150 + y}px`;
});

