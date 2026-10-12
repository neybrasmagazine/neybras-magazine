/* ============================================================
   Neybras Magazine — Cours du jour (page Finance)
   ------------------------------------------------------------
   Les valeurs ne sont jamais écrites dans la page : elles sont
   lues au chargement, à la source, et affichées avec leur date.
   Si une source ne répond pas, l'indicateur correspondant n'est
   pas affiché (jamais de valeur de remplacement). Si aucune
   source ne répond, la barre est masquée.

   Sources :
   - EUR/MAD et USD/MAD : taux du jour, open.er-api.com
     (ExchangeRate-API), mis à jour une fois par jour.
   - Or (once, en dollars) : api.gold-api.com, cours courant.
   Pas de variation journalière : les sources ne la fournissent
   pas et le site ne la calcule pas.
   ============================================================ */
(function () {
  var barre = document.querySelector('[data-cours]');
  if (!barre) return;
  var piste = barre.querySelector('.nbr-defil__piste');
  var timeout = function (ms) { var c = new AbortController(); setTimeout(function () { c.abort(); }, ms); return c.signal; };
  var json = function (u) { return fetch(u, { signal: timeout(8000), cache: 'no-store' }).then(function (r) { if (!r.ok) throw 0; return r.json(); }); };
  var nf = function (v, d) { return v.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }); };
  var jour = function (d) { return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', timeZone: 'Africa/Casablanca' }); };

  var taches = [
    json('https://open.er-api.com/v6/latest/USD').then(function (d) {
      if (d.result !== 'success' || !d.rates || !d.rates.MAD || !d.rates.EUR) throw 0;
      var maj = new Date(d.time_last_update_unix * 1000);
      return [
        { l: 'EUR/MAD', v: nf(d.rates.MAD / d.rates.EUR, 4), s: 'taux du ' + jour(maj) },
        { l: 'USD/MAD', v: nf(d.rates.MAD, 4), s: 'taux du ' + jour(maj) }
      ];
    }).catch(function () { return []; }),
    json('https://api.gold-api.com/price/XAU').then(function (d) {
      if (!d || !(d.price > 0)) throw 0;
      return [{ l: 'Or (once)', v: nf(d.price, 0).replace(/ | /g, ' ') + ' $', s: 'cours du ' + jour(new Date(d.updatedAt)) }];
    }).catch(function () { return []; })
  ];

  Promise.all(taches).then(function (r) {
    var items = [].concat.apply([], r);
    if (!items.length) { barre.hidden = true; return; }
    var lot = function (cache) {
      var ul = document.createElement('ul');
      ul.className = 'nbr-defil__lot';
      if (cache) ul.setAttribute('aria-hidden', 'true');
      items.forEach(function (i) {
        var li = document.createElement('li');
        [['tk-label', i.l], ['tk-val', i.v], ['tk-src', i.s]].forEach(function (p) {
          var s = document.createElement('span'); s.className = p[0]; s.textContent = p[1]; li.appendChild(s);
        });
        ul.appendChild(li);
      });
      return ul;
    };
    /* on affiche d'abord un lot pour le mesurer, puis on répète jusqu'à remplir la vue (nombre pair : la boucle va de 0 à -50 %) */
    barre.hidden = false;
    var vue = barre.querySelector('.nbr-defil__vue');
    piste.appendChild(lot(false));
    var l = Math.max(1, piste.firstChild.getBoundingClientRect().width);
    var m = Math.max(1, Math.ceil(vue.getBoundingClientRect().width / l));
    for (var k = 1; k < m * 2; k++) piste.appendChild(lot(true));
    piste.style.setProperty('--defil-duree', Math.round((l * m) / 40) + 's');
  });
})();
