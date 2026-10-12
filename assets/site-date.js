/* ============================================================
   Neybras Magazine — Bandeau supérieur (.tb-date)
   ------------------------------------------------------------
   Décision éditoriale du 12 septembre 2026 : le site n'affiche
   plus de dates de publication. Le <span class="tb-date"> reste
   donc masqué (attribut [hidden]) et le séparateur qui le suit
   (« · » ou « | ») aussi, pour que le bandeau ne commence pas
   par un séparateur isolé.

   Exception, décision de la direction du 12 octobre 2026 : sur
   la page d'accueil, le span porte l'attribut data-jour et la
   date du jour s'y affiche (« Lundi 12 Octobre 2026 »), calculée
   à l'affichage, fuseau Africa/Casablanca. Ce n'est pas une date
   de publication.
   ============================================================ */
(function () {
  var cibles = document.querySelectorAll('.tb-date');
  for (var i = 0; i < cibles.length; i++) {
    var el = cibles[i];
    if (el.hasAttribute('data-jour')) {
      try {
        var t = new Intl.DateTimeFormat('fr-MA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Casablanca' }).format(new Date());
        el.textContent = t.replace(/(^|\s)([a-zàâçéèêëîïôûùüÿœ])/g, function (m, a, b) { return a + b.toUpperCase(); });
        el.hidden = false;
        continue;
      } catch (e) { /* repli : la date reste masquée */ }
    }
    el.hidden = true;
    var sep = el.nextElementSibling;
    if (sep && /^[\s·|•]*$/.test(sep.textContent)) sep.hidden = true;
  }
})();
