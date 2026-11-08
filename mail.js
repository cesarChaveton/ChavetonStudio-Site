// Ofuscación simple de los correos de contacto: se arman en tiempo de carga
// para no dejar la dirección como texto plano en el HTML (reduce el
// scraping automático más básico; no es una barrera infalible).
// data-mailto sin valor (o "contacto") usa contacto@chaveton-studios.com.
// data-mailto="privacidad" usa privacidad@chaveton-studios.com.
// data-mailto-subject agrega un asunto al mailto.
(function () {
  var domain = "chaveton-studios.com";
  var users = { contacto: "contacto", privacidad: "privacidad" };
  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    var key = el.getAttribute("data-mailto") || "contacto";
    var user = users[key] || users.contacto;
    var address = user + "@" + domain;
    var href = "mailto:" + address;
    var subject = el.getAttribute("data-mailto-subject");
    if (subject) {
      href += "?subject=" + encodeURIComponent(subject);
    }
    el.setAttribute("href", href);
    if (el.hasAttribute("data-mailto-text")) {
      el.textContent = address;
    }
  });
})();
