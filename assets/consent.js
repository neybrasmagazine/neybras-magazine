/* Consentement à la mesure d'audience — Neybras Magazine
   Google Analytics n'est chargé qu'après un accord explicite.
   Le choix est conservé dans localStorage (nbr_consent), pas dans un cookie,
   pendant six mois : passé ce délai, il est effacé et le bandeau revient.
   Les cookies de mesure sont limités à treize mois, et supprimés dès que
   le visiteur refuse, retire son accord ou que son accord a expiré. */
(function () {
  var CLE = 'nbr_consent';
  var ID = window.NBR_GA_ID || 'G-TRVG9RSKTL';
  var DUREE_CHOIX_MS = 182 * 24 * 3600 * 1000;   /* six mois */
  var DUREE_COOKIE_S = 395 * 24 * 3600;          /* treize mois */

  /* Supprime _ga, _ga_<ID> et les anciens _gid/_gat, quel que soit le
     domaine sur lequel Google Analytics les a posés. */
  function effacerCookiesGA() {
    var noms = document.cookie.split(';')
      .map(function (c) { return c.trim().split('=')[0]; })
      .filter(function (n) { return n === '_ga' || n.indexOf('_ga_') === 0 || n === '_gid' || n === '_gat'; });
    if (!noms.length) return;
    var hote = location.hostname;
    var domaines = ['', hote, '.' + hote];
    var parties = hote.split('.');
    if (parties.length > 2) domaines.push('.' + parties.slice(-2).join('.'));
    noms.forEach(function (nom) {
      domaines.forEach(function (d) {
        document.cookie = nom + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function lire() {
    var etat;
    try { etat = JSON.parse(localStorage.getItem(CLE) || 'null'); } catch (e) { return null; }
    if (!etat || !etat.choix) return null;
    var date = Date.parse(etat.date);
    if (!date || Date.now() - date > DUREE_CHOIX_MS) {
      try { localStorage.removeItem(CLE); } catch (e) {}
      effacerCookiesGA();
      return null;
    }
    return etat;
  }
  function ecrire(valeur) {
    try {
      localStorage.setItem(CLE, JSON.stringify({ choix: valeur, date: new Date().toISOString() }));
    } catch (e) { /* navigation privée : le bandeau réapparaîtra */ }
  }

  /* Arrête toute collecte, y compris sur la page en cours si la balise
     était déjà chargée, puis efface les cookies existants. */
  function desactiverAnalytics() {
    window['ga-disable-' + ID] = true;
    effacerCookiesGA();
  }

  function chargerAnalytics() {
    window['ga-disable-' + ID] = false;
    if (window.__nbrGaCharge) return;
    window.__nbrGaCharge = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
    if (typeof gtag !== 'function') return;
    gtag('js', new Date());
    var p = window.location.pathname.replace(/\.html$/i, '');
    gtag('config', ID, {
      page_path: p,
      page_location: window.location.origin + p + window.location.search,
      cookie_expires: DUREE_COOKIE_S
    });
  }

  function retirerBandeau(el) {
    el.classList.remove('nbr-on');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
  }

  function afficherBandeau() {
    var el = document.createElement('div');
    el.id = 'nbr-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Consentement à la mesure d’audience');
    el.innerHTML =
      '<div class="nbr-c-in">' +
        '<p class="nbr-c-txt"><strong>Mesure d’audience</strong>' +
        'Nous aimerions savoir quels articles sont lus, à l’aide de Google Analytics. ' +
        'Cette mesure dépose des cookies et ne se déclenche qu’avec votre accord : ' +
        'le site fonctionne à l’identique si vous refusez. ' +
        '<a href="cookies">Détail des traceurs</a> · ' +
        '<a href="politique-confidentialite">Politique de confidentialité</a></p>' +
        '<div class="nbr-c-act">' +
          '<button type="button" class="nbr-c-btn" data-nbr="denied">Refuser</button>' +
          '<button type="button" class="nbr-c-btn nbr-ok" data-nbr="granted">Accepter</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('nbr-on'); });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-nbr]');
      if (!b) return;
      var choix = b.getAttribute('data-nbr');
      ecrire(choix);
      if (choix === 'granted') chargerAnalytics();
      else desactiverAnalytics();
      retirerBandeau(el);
    });
  }

  function demarrer() {
    var etat = lire();
    if (etat && etat.choix === 'granted') { chargerAnalytics(); return; }
    if (etat && etat.choix === 'denied') { effacerCookiesGA(); return; }
    afficherBandeau();
  }

  /* Permet de rouvrir le choix depuis la page cookies : <button data-nbr-rouvrir>.
     Retirer son choix suspend la mesure jusqu'à la nouvelle réponse. */
  document.addEventListener('click', function (e) {
    var lien = e.target.closest('[data-nbr-rouvrir]');
    if (!lien) return;
    e.preventDefault();
    try { localStorage.removeItem(CLE); } catch (err) {}
    desactiverAnalytics();
    if (!document.getElementById('nbr-consent')) afficherBandeau();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
