// Fecha del evento (año-mes-díaThora:minutos:segundos-zona horaria)
// -06:00 es la hora de Costa Rica
const fechaEvento = new Date("2026-11-12T07:00:00-06:00");

function actualizar() {
  const ahora = new Date();
  const diferencia = fechaEvento - ahora; // en milisegundos

  // Si ya llegó la fecha, mostramos un mensaje
  if (diferencia <= 0) {
    document.getElementById("contador").innerHTML = "<h2>¡Hoy es el día!</h2>";
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

actualizar();                  // muestra el valor apenas carga la página
setInterval(actualizar, 1000); // lo vuelve a calcular cada 1 segundo
