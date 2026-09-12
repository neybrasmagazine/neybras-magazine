/* ============================================================
   Neybras Magazine — Bandeau supérieur (.tb-date)
   ------------------------------------------------------------
   Décision éditoriale du 12 septembre 2026 : le site n'affiche
   plus de dates, hormis celles de l'édition de septembre 2026.
   La date du jour n'est donc plus inscrite dans le bandeau.

   Le <span class="tb-date"> reste masqué (attribut [hidden]) et
   le séparateur qui le suit (« · » ou « | ») est masqué aussi,
   pour que le bandeau ne commence pas par un séparateur isolé.
   ============================================================ */
(function () {
  var cibles = document.querySelectorAll('.tb-date');
  for (var i = 0; i < cibles.length; i++) {
    cibles[i].hidden = true;
    var sep = cibles[i].nextElementSibling;
    if (sep && /^[\s·|•]*$/.test(sep.textContent)) sep.hidden = true;
  }
})();
