/* FUNCIONES PEQUEÑAS: menú móvil, cuenta regresiva y animaciones. */

// 1) Cambiá esta fecha por la fecha y hora reales del evento.
// Costa Rica usa UTC-6. Formato: AAAA-MM-DDTHH:MM:SS-06:00
const eventDate = new Date("2027-05-15T08:30:00-06:00");

function updateCountdown() {
  const remaining = eventDate.getTime() - Date.now();
  const secondsLeft = Math.max(0, Math.floor(remaining / 1000));
  const units = {
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor((secondsLeft % 86400) / 3600),
    minutes: Math.floor((secondsLeft % 3600) / 60),
    seconds: secondsLeft % 60
  };
  Object.entries(units).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// 2) Menú desplegable en pantallas pequeñas.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 3) Hace que las secciones aparezcan suavemente al llegar a ellas.
const revealItems = document.querySelectorAll(
  ".section-label, .intro-layout, .value-card, .program-item, .speaker-card, .photo-tile, .location-copy, .map-wrap, .register-inner"
);

if ("IntersectionObserver" in window) {
  revealItems.forEach(item => item.classList.add("reveal"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}
