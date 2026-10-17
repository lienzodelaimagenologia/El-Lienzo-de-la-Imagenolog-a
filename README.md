# Tu web de evento universitario — guía para principiantes

Esta carpeta contiene una web estática que podés publicar gratis con GitHub Pages.

## Archivos

- `index.html`: el contenido y la estructura de la página (títulos, textos, programa, ponentes, imágenes, mapa y enlaces).
- `styles.css`: el diseño visual (fuentes, colores, tamaños, espacios, columnas y adaptación a celulares).
- `script.js`: las funciones pequeñas (cuenta regresiva, menú móvil y aparición animada de secciones).
- `images/`: colocá aquí tus fotografías.

## Publicar en GitHub Pages

1. Creá una cuenta en https://github.com/
2. Creá un repositorio **público** llamado `evento-universitario`.
3. Subí `index.html`, `styles.css`, `script.js` y la carpeta `images` completa a la raíz del repositorio.
4. En el repositorio, abrí **Settings → Pages**.
5. En **Build and deployment**, elegí **Deploy from a branch**.
6. Seleccioná la rama `main` y la carpeta `/ (root)`, y guardá.
7. La dirección será `https://TU-USUARIO.github.io/evento-universitario/`.

GitHub Pages ofrece alojamiento gratis para sitios estáticos en repositorios públicos de cuentas Free. El sitio publicado es público, así que no subas datos privados ni listas de inscripción.

## Cambiar la tipografía

En `index.html`, buscá la línea que contiene `fonts.googleapis.com`. Ahora usa:
- `Playfair Display` para títulos (elegante, editorial).
- `DM Sans` para texto (limpio y legible).

Para cambiar las fuentes, podés elegir otras en https://fonts.google.com/ y reemplazar el enlace por el que Google Fonts te proporciona. Después, en `styles.css`, buscá las variables `--serif` y `--sans`.

Si no querés depender de Google Fonts, borrá el enlace de Google Fonts y dejá las alternativas locales `Georgia` y `Arial` en las variables CSS.

## Cambiar colores

Al principio de `styles.css`, dentro de `:root`, están los colores principales:
- `--paper`: fondo crema.
- `--paper-deep`: fondo de algunas secciones.
- `--ink`: texto oscuro.
- `--muted`: texto secundario.
- `--accent`: color terracota principal.
- `--accent-dark`: tono oscuro alternativo.

Cambiá los códigos hexadecimales (por ejemplo, `#bd4f37`) por los colores de tu identidad visual. Los colores se escriben como `#RRGGBB`.

## Agregar tus fotos

Subí tus fotos a la carpeta `images/` y usá estos nombres para reemplazar los marcadores:
- `portada.jpg`
- `ponente-1.jpg`, `ponente-2.jpg`, `ponente-3.jpg`
- `galeria-1.jpg` hasta `galeria-5.jpg`

Las rutas de las imágenes ya están puestas en `index.html`. Si tus archivos son PNG, por ejemplo `portada.png`, cambiá también el nombre en `src="images/portada.jpg"` por `src="images/portada.png"`.

Consejos:
- Usá fotos propias o imágenes para las que tengan permiso de publicación.
- Para la portada, elegí una imagen horizontal y de buena calidad.
- Para retratos, preferí fotos verticales.
- Comprimí las imágenes antes de subirlas para que la página cargue rápido.
- El texto `alt` describe la imagen para accesibilidad; cambialo para que describa tu foto.

## Cambiar textos, programa y ponentes

En `index.html`, buscá el texto que ves en pantalla y reemplazalo directamente. No borres las etiquetas HTML alrededor, por ejemplo `<h3>Nombre de la charla</h3>`: cambiá el texto que está entre ellas.

Cada actividad del programa está en un bloque que empieza con `<article class="program-item">` y termina con `</article>`. Podés copiar un bloque completo para añadir una actividad, o eliminarlo si no lo necesitás.

Cada persona ponente está en un bloque `<article class="speaker-card">`. Para añadir más personas, duplicá ese bloque dentro de `<div class="speaker-grid">` y cambiá nombre, descripción y archivo de imagen.

Cada imagen de galería está en un bloque `<figure class="photo-tile">`. Para añadir más, duplicá un bloque y cambiá la ruta, el texto `alt` y el pie de foto.

## Cambiar fecha y cuenta regresiva

Abrí `script.js` y cambiá esta línea:
`const eventDate = new Date("2027-05-15T08:30:00-06:00");`

Formato: `AAAA-MM-DDTHH:MM:SS-06:00`. El `-06:00` corresponde a Costa Rica. Por ejemplo, el 20 de agosto de 2027 a las 9:00 a. m. sería `2027-08-20T09:00:00-06:00`.

También cambiá las fechas que aparecen escritas en `index.html`; el contador no cambia esos textos automáticamente.

## Conectar el botón de inscripción

La opción más sencilla y gratuita es crear un formulario en Google Forms:
1. Entrá a https://forms.google.com/ y creá el formulario.
2. Pulsá **Enviar** y copiá el enlace para responder.
3. En `index.html`, buscá `id="registrationLink"`.
4. Reemplazá el valor de `href="https://docs.google.com/forms/"` por el enlace real del formulario.

Así las respuestas se guardan en Google Forms. No pongas datos personales en el código de la web.

## Cambiar la sede y el mapa

En `index.html`, buscá `maps.google.com/maps?q=San%20Jos%C3%A9%2C%20Costa%20Rica`. Cambiá la ubicación por el nombre de la sede codificado para URL, o usá Google Maps → Compartir → Insertar un mapa y copiá el enlace de inserción (`src`) del iframe. También cambiá el enlace del botón `Abrir mapa` por la dirección de Google Maps del recinto.

## Guardar cambios

Después de editar los archivos en GitHub, pulsá **Commit changes**. GitHub vuelve a publicar el sitio; puede tardar unos minutos en mostrar los cambios.

## Limitaciones importantes

GitHub Pages sirve archivos estáticos: no guarda inscripciones por sí solo ni ejecuta un servidor. Por eso usamos Google Forms para las inscripciones. El sitio, las imágenes y el repositorio son públicos al publicarlo.
