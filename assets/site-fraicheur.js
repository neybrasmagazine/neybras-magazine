/* ============================================================
   Neybras Magazine — Péremption automatique des modules datés
   ------------------------------------------------------------
   Principe : mieux vaut un module absent qu'un module périmé.
   Pour un média dont l'argument est la veille, afficher une
   brève de mai en septembre coûte plus cher que ne rien afficher.

   Balisage attendu
   ----------------
   Le conteneur porte [data-nbr-module] et un seuil :

     data-nbr-seuil="60"       -> une entrée disparaît 60 jours
                                  après sa date ;
     data-nbr-seuil="a-venir"  -> une entrée disparaît le jour
                                  où elle devient passée.

   Chaque entrée porte sa date ISO : data-nbr-date="2026-05-21".

   Le conteneur est livré avec l'attribut [hidden] : si ce script
   ne s'exécute pas (JS coupé, erreur réseau), le module reste
   invisible. Le défaut est le silence, jamais le périmé.

   Le conteneur n'est révélé que s'il lui reste au moins une
   entrée valide ; sinon il est retiré du document, pour ne pas
   laisser un titre au-dessus du vide.
   ============================================================ */
(function () {
  var modules = document.querySelectorAll('[data-nbr-module]');
  if (!modules.length) return;

  var JOUR = 86400000;
  var maintenant = new Date();
  /* Comparaison à la journée, pas à la seconde : un événement
     du jour même reste « à venir » jusqu'à minuit. */
  var aujourdhui = Date.UTC(
    maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate()
  );

  function dateDe(el) {
    var brut = el.getAttribute('data-nbr-date');
    if (!brut) return null;
    var p = brut.split('-');
    if (p.length !== 3) return null;
    var t = Date.UTC(+p[0], +p[1] - 1, +p[2]);
    return isNaN(t) ? null : t;
  }

  for (var i = 0; i < modules.length; i++) {
    var module = modules[i];
    var seuil = module.getAttribute('data-nbr-seuil') || '';
    var aVenir = seuil === 'a-venir';
    var jours = aVenir ? 0 : parseInt(seuil, 10);
    if (!aVenir && !(jours > 0)) continue;

    var entrees = module.querySelectorAll('[data-nbr-date]');
    var restantes = 0;

    for (var j = 0; j < entrees.length; j++) {
      var entree = entrees[j];
      var t = dateDe(entree);
      /* Entrée sans date exploitable : on la retire, faute de
         pouvoir garantir qu'elle est encore d'actualité. */
      var perimee = (t === null) ||
        (aVenir ? t < aujourdhui : (aujourdhui - t) / JOUR > jours);
      if (perimee) {
        if (entree.parentNode) entree.parentNode.removeChild(entree);
      } else {
        restantes++;
      }
    }

    if (restantes > 0) {
      module.removeAttribute('hidden');
    } else if (module.parentNode) {
      module.parentNode.removeChild(module);
    }
  }
})();
