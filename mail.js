// Ofuscación simple del correo de contacto: se arma en tiempo de carga
// para no dejar la dirección como texto plano en el HTML (reduce el
// scraping automático más básico; no es una barrera infalible).
// Cada elemento con data-mailto recibe un mailto simple a esa dirección.
(function () {
  var user = "contacto";
  var domain = "chaveton-studios.com";
  var address = user + "@" + domain;
  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    var href = "mailto:" + address;
    el.setAttribute("href", href);
    if (el.hasAttribute("data-mailto-text")) {
      el.textContent = address;
    }
  });
})();
