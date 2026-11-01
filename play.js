/* Boton de Google Play de DominionHex.
   Mientras el juego no este publicado, el boton queda desactivado ("Proximamente").
   Para activarlo cuando salga en Play: cambiar PUBLISHED a true. Es el unico cambio.
   (Para medir visitas desde el sitio, el enlace lleva utm_source en el referrer.) */
(function () {
  var PUBLISHED = false;
  var PACKAGE_ID = "com.chavetonstudios.dominionhex";
  if (!PUBLISHED) return;

  var url = "https://play.google.com/store/apps/details?id=" + PACKAGE_ID +
    "&referrer=" + encodeURIComponent("utm_source=chaveton-studios.com&utm_medium=web");

  var btns = document.querySelectorAll("[data-play]");
  for (var i = 0; i < btns.length; i++) {
    var b = btns[i];
    b.setAttribute("href", url);
    b.setAttribute("rel", "noopener");
    b.removeAttribute("aria-disabled");
    b.classList.remove("is-soon");
    var live = b.getAttribute("data-live");
    if (live) b.textContent = live;
  }
  var notes = document.querySelectorAll("[data-play-note]");
  for (var j = 0; j < notes.length; j++) {
    var n = notes[j].getAttribute("data-live");
    if (n) notes[j].textContent = n;
  }
})();
