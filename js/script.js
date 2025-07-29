document.addEventListener("DOMContentLoaded", () => {
  const ring = document.querySelector('.orbital-ring');
  const planets = ring.querySelectorAll('.planet');
  planets.forEach((planet, i) => {
    const angle = i * (Math.PI * 2) / planets.length;
    const radius = 180 + (Math.random() * 30 - 15);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    planet.style.left = `${250 + x}px`; // 從中心點(250, 250)出發
    planet.style.top = `${250 + y}px`;
  });
});
