// Fecha del evento: 12 de noviembre de 2026, 8:00 a. m. (hora de Costa Rica, -06:00)
const fechaEvento = new Date("2026-11-12T08:00:00-06:00");

function actualizar() {
  const ahora = new Date();
  const diferencia = fechaEvento - ahora; // milisegundos que faltan

  // Si ya llegó la hora del evento
  if (diferencia <= 0) {
    document.getElementById("contador").innerHTML = "<h2>¡Hoy es el día!</h2>";
    clearInterval(reloj);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

actualizar();                              // muestra el valor apenas carga
const reloj = setInterval(actualizar, 1000); // lo recalcula cada segundo
