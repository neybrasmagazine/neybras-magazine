/* ============================================================
   Neybras Magazine — Bandeau supérieur (.tb-date)
   ------------------------------------------------------------
   Décision de la direction du 12 octobre 2026 : la date du jour
   s'affiche en haut à gauche du bandeau de toutes les pages
   (« Lundi 12 Octobre 2026 »), calculée à l'affichage au fuseau
   Africa/Casablanca. Ce n'est pas une date de publication : les
   dates de publication restent masquées (CLAUDE.md § 4.4).

   Le <span class="tb-date"> est livré masqué (attribut [hidden]),
   ainsi que le séparateur qui le suit. Si la date ne peut pas être
   calculée, ils restent masqués pour que le bandeau ne commence
   pas par un séparateur isolé.
   ============================================================ */
(function () {
  var cibles = document.querySelectorAll('.tb-date');
  var texte = null;
  try {
    texte = new Intl.DateTimeFormat('fr-MA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Casablanca' }).format(new Date());
    texte = texte.replace(/(^|\s)([a-zàâçéèêëîïôûùüÿœ])/g, function (m, a, b) { return a + b.toUpperCase(); });
  } catch (e) { texte = null; }
  for (var i = 0; i < cibles.length; i++) {
    var el = cibles[i];
    if (texte) { el.textContent = texte; el.hidden = false; continue; }
    el.hidden = true;
    var sep = el.nextElementSibling;
    if (sep && /^[\s·|•]*$/.test(sep.textContent)) sep.hidden = true;
  }
})();
