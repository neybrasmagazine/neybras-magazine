/* ============================================================
   Neybras Magazine — Date du bandeau supérieur (.tb-date)
   ------------------------------------------------------------
   La date est calculée à l'affichage, chez le visiteur, et non
   au moment du déploiement : elle ne peut donc plus se figer.

   Locale fr-MA, fuseau Africa/Casablanca.
   Format : « Mercredi 26 Août 2026 » (jour et mois capitalisés).

   Repli : le <span class="tb-date"> est livré avec l'attribut
   [hidden]. Si ce script ne s'exécute pas (JS désactivé, erreur
   réseau, Intl indisponible), le bandeau n'affiche simplement
   aucune date — jamais une fausse.
   ============================================================ */
(function () {
  var cibles = document.querySelectorAll('.tb-date');
  if (!cibles.length) return;

  var texte;
  try {
    texte = new Intl.DateTimeFormat(['fr-MA', 'fr-FR', 'fr'], {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Africa/Casablanca'
    }).format(new Date());
  } catch (e) {
    return;
  }
  if (!texte || !/\d/.test(texte)) return;

  /* « mercredi 26 août 2026 » -> « Mercredi 26 Août 2026 » */
  texte = texte.replace(/\s+/g, ' ').split(' ').map(function (mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1);
  }).join(' ');

  /* Premier du mois : « Vendredi 1 Mai 2026 » -> « Vendredi 1er Mai 2026 ». */
  texte = texte.replace(/^([^ ]+) 1 /, '$1 1er ');

  for (var i = 0; i < cibles.length; i++) {
    var el = cibles[i];
    var icone = el.querySelector('i');
    el.textContent = '';
    if (icone) {
      el.appendChild(icone);
      el.appendChild(document.createTextNode(' '));
    }
    el.appendChild(document.createTextNode(texte));
    el.removeAttribute('hidden');
  }
})();
