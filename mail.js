// Ofuscación simple del correo de contacto: se arma en tiempo de carga
// para no dejar la dirección como texto plano en el HTML (reduce el
// scraping automático más básico; no es una barrera infalible).
// data-mailto="beta" abre el cliente con asunto y mensaje para pedir
// participar en las pruebas del beta. Sin ese valor, el enlace es un
// mailto simple (por ejemplo, la política de privacidad).
(function () {
  var user = "contacto";
  var domain = "chaveton-studios.com";
  var address = user + "@" + domain;
  var isEn = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var betaSubject = isEn ? "Request to join the DominionHex beta" : "Solicitud para las pruebas del beta de DominionHex";
  var betaBody = (isEn ? [
    "Hi,",
    "",
    "I would like to join the DominionHex closed beta (closed testing).",
    "",
    "Google Play account email:",
    "Android phone or tablet model:",
    "",
    "Thanks."
  ] : [
    "Hola,",
    "",
    "Quiero participar en las pruebas del beta (closed testing) de DominionHex.",
    "",
    "Correo de la cuenta de Google Play:",
    "Modelo de teléfono o tablet Android:",
    "",
    "Gracias."
  ]).join("\n");

  document.querySelectorAll("[data-mailto]").forEach(function (el) {
    var href = "mailto:" + address;
    if (el.getAttribute("data-mailto") === "beta") {
      href += "?subject=" + encodeURIComponent(betaSubject);
      href += "&body=" + encodeURIComponent(betaBody);
    }
    el.setAttribute("href", href);
    if (el.hasAttribute("data-mailto-text")) {
      el.textContent = address;
    }
  });
})();
