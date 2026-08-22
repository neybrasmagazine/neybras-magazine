/* Consentement à la mesure d'audience — Neybras Magazine
   Google Analytics n'est chargé qu'après un accord explicite.
   Le choix est conservé dans localStorage (nbr_consent), pas dans un cookie. */
(function () {
  var CLE = 'nbr_consent';
  var ID = window.NBR_GA_ID || 'G-TRVG9RSKTL';

  function lire() {
    try { return JSON.parse(localStorage.getItem(CLE) || 'null'); } catch (e) { return null; }
  }
  function ecrire(valeur) {
    try {
      localStorage.setItem(CLE, JSON.stringify({ choix: valeur, date: new Date().toISOString() }));
    } catch (e) { /* navigation privée : le bandeau réapparaîtra */ }
  }

  function chargerAnalytics() {
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
      page_location: window.location.origin + p + window.location.search
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
      retirerBandeau(el);
    });
  }

  function demarrer() {
    var etat = lire();
    if (etat && etat.choix === 'granted') { chargerAnalytics(); return; }
    if (etat && etat.choix === 'denied') return;
    afficherBandeau();
  }

  /* Permet de rouvrir le choix depuis la page cookies : <a href="#" data-nbr-rouvrir> */
  document.addEventListener('click', function (e) {
    var lien = e.target.closest('[data-nbr-rouvrir]');
    if (!lien) return;
    e.preventDefault();
    try { localStorage.removeItem(CLE); } catch (err) {}
    if (!document.getElementById('nbr-consent')) afficherBandeau();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
