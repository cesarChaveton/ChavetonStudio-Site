(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.getElementById("menu");
  if (!btn || !links) return;

  var isEn = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var LBL_MENU = isEn ? "Menu" : "Menú";
  var LBL_CLOSE = isEn ? "Close menu" : "Cerrar menú";

  function setOpen(open) {
    links.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "×" : "☰";
    btn.setAttribute("aria-label", open ? LBL_CLOSE : LBL_MENU);
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });
})();
