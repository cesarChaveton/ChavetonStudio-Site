(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.getElementById("menu");
  if (!btn || !links) return;

  function setOpen(open) {
    links.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "×" : "☰";
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Menú");
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
