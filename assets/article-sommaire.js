/* ============================================================
   Neybras Magazine — Sommaire d'article sur mobile
   ------------------------------------------------------------
   Sous 861 px la colonne de droite (avec la table des matières)
   n'est pas affichée. Ce script reprend les entrées déjà présentes
   dans cette table des matières, c'est-à-dire les intertitres de
   l'article, et les propose dans un bloc repliable placé avant le
   texte. Aucun mot n'est écrit : les libellés et les liens sont
   ceux de la table des matières. Visible seulement sous 861 px
   (assets/article.css) et pour les articles de plus de 4 entrées.
   ============================================================ */
(function () {
  var src = document.querySelectorAll('.art-aside .toc a.toc-item');
  var texte = document.querySelector('.art-col .art-text');
  if (src.length < 5 || !texte || document.querySelector('.art-som')) return;

  var nav = document.createElement('nav');
  nav.className = 'art-som';
  nav.setAttribute('aria-label', 'Sommaire de l’article');
  var det = document.createElement('details');
  var sum = document.createElement('summary');
  sum.textContent = 'Dans cet article';
  var liste = document.createElement('div');
  liste.className = 'art-som__liste';
  for (var i = 0; i < src.length; i++) {
    var c = src[i].cloneNode(true);
    c.classList.remove('act');
    liste.appendChild(c);
  }
  liste.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) det.open = false; });
  det.appendChild(sum);
  det.appendChild(liste);
  nav.appendChild(det);
  texte.parentNode.insertBefore(nav, texte);
})();
