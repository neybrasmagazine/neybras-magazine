# CLAUDE.md — Neybras Magazine (neybras-magazine.com)

Ce fichier est la référence permanente pour toute intervention sur le site.
Il s'applique à chaque tâche, à chaque publication existante et à chaque
publication future (tribune, analyse, entretien). Il prime sur toute
habitude ou préférence personnelle. En cas de conflit entre ce fichier et
une demande ponctuelle, signale-le et demande avant d'agir.

Objectif : une forme identique et unanime pour l'ensemble des publications.
Un lecteur doit reconnaître Neybras Magazine au premier coup d'œil, sur
n'importe quelle page, quel que soit l'auteur ou la date de publication.

---

## 1. Environnement technique

- Site HTML/CSS statique, sans build ni gabarits : le balisage est copié
  dans chaque page. Toute nouvelle page part d'une page de référence
  (section 5), jamais d'une page vierge.
- Hébergement : GitHub Pages. Le fichier .htaccess n'est PAS lu.
  Toute redirection d'une ancienne URL se fait par une souche HTML sur le
  modèle d'article-cdm2030.html (redirection immédiate + balise canonical
  vers la nouvelle URL). Ne jamais présenter une règle .htaccess comme
  active.
- Images : dossier /images/. Styles partagés : tokens.css et assets/.
- Composant partagé du bloc « À la Une » de rubrique :
  assets/a-la-une-rubrique.css.

---

## 2. Règle absolue — palette de couleurs

- La palette de référence est celle déjà en place sur le site. Elle ne doit
  JAMAIS être modifiée, ni maintenant ni dans aucune tâche future.
- Aucune couleur ajoutée, remplacée ou « harmonisée » de ta propre
  initiative, même si une valeur te semble incohérente.
- Dans tout nouveau code, utilise les variables CSS existantes, jamais de
  valeur hexadécimale écrite en dur.
- Si une consigne cite une couleur différente de celle du site, c'est la
  couleur du site qui fait foi. En cas de doute : ne touche à rien et
  signale-le.

Palette de référence relevée sur le site (sept. 2026) :

| Rôle | Valeur | Variables |
|---|---|---|
| Bleu principal | #0E3D52 | --bn, --nbr-bleu, --nb-bleu |
| Bleu nuit | #0A3044 | --bn2, --nbr-nuit |
| Bleu ardoise | #145068 | --bn3, --nbr-ardoise |
| Or | #B8965A | --or, --nbr-or |
| Or clair | #CCA96E | --or-lt, --or2 |
| Or foncé (texte) | #806534 | --or-f |
| Neutres de page | #FFF, #FAFAFA, #E4E4E4, #F0F0F0, #BBB, #888, #555, #2D2D2D, #1A1A1A | --blanc, --page, --brd, --brd2, --gris1 à --gris5 |
| Crèmes | #F9F6EF, #F4EFE6, #ECE5D8 | --beige, --beige2 |

Les doublons relevés dans l'inventaire (ors et bleus proches, variables au
sens divergent) restent en l'état. Ils ne seront traités que dans une tâche
dédiée, sur demande explicite.

---

## 3. Typographie

- Reprendre exclusivement les polices, tailles, graisses et interlignages
  déjà définis sur le site (titres en Playfair Display, texte courant en
  Inter, selon ce qui est effectivement chargé).
- Aucune nouvelle police, aucune nouvelle taille ad hoc : on réutilise les
  classes existantes.

---

## 4. Règles de forme communes à toutes les publications

### 4.1 Types de publication et libellés

| Type | Surtitre | Ligne auteur | Bouton |
|---|---|---|---|
| Entretien | « Entretien · Rubrique » | Nom · Propos recueillis par la rédaction · X min de lecture | « Lire l'entretien » |
| Tribune | « Tribune · Rubrique » | Nom · fonction · X min de lecture | « Lire la tribune » |
| Analyse | « Analyse · Rubrique » | Signature · X min de lecture | « Lire l'analyse » |

- Surtitre toujours au format « Type · Rubrique ».
- La fonction d'un auteur est reprise mot pour mot de l'article validé.
  Ne jamais inventer, compléter ou reformuler une fonction.
- Articles de la rédaction : signés « La Rédaction Neybras », ou au nom du
  journaliste (ex. « Par Houda Hachami ») sans mention de fonction externe
  ni d'employeur. Une signature invérifiable devient « Par la rédaction ».
- Temps de lecture : repris de l'article ; s'il n'existe pas, le calculer
  sur la base de 230 mots par minute, arrondi à la minute supérieure, et
  le signaler.
- Aucun format commercial dans l'espace éditorial (« Article sponsorisé »,
  « Interview CEO », etc.). Séparation stricte éditorial / commercial.

### 4.2 Images

- Formats : WebP de préférence, cohérent avec les fichiers voisins.
- Nommage : slug en minuscules, sans accents, mots séparés par des tirets
  (ex. charte-investissement-maroc.webp). Variante liste : suffixe -sm.
- Ne jamais agrandir une image au-delà de sa taille source. Si la source
  est trop petite pour le format demandé, le signaler au lieu d'agrandir.
- Ne jamais déformer une image. Ne jamais laisser de bandes de fond
  (object-fit: contain) : on crée une version recadrée à la main au ratio
  exact de l'emplacement, puis on l'affiche en object-fit: cover.
- Chaque image a un attribut alt descriptif en français. Pour un portrait :
  « Prénom Nom, fonction » (fonction telle qu'indiquée dans l'article).
- Poids cible : visuel principal < 250 Ko ; vignette < 30 Ko.
- Chargement : loading="lazy" sauf pour l'image visible au premier écran.
- Aucune carte géographique reprise d'une source externe. Toute carte doit
  représenter le Maroc dans son intégralité territoriale.

### 4.3 Portraits des contributeurs

- Dans le bloc « À la Une » d'une page de rubrique : portrait dans
  l'encadré photo, au même format, même ratio et même cadrage que le
  portrait d'Ismail Bassy sur /finance (images/ismail-bassy.jpg, relevé à
  510×630 — vérifier sur le fichier). Visage centré, aucune déformation.
- Partout ailleurs (corps d'article, encadrés, listes d'intervenants) :
  miniature ronde uniquement, 56 à 64 px sur desktop, 48 px sur mobile,
  version 128 px pour le retina, object-fit: cover,
  object-position: center top, fine bordure avec une variable existante,
  sans ombre lourde. Nom et fonction alignés à droite de la miniature.
- Jamais de portrait en pleine largeur ou en grand plan hors du bloc
  « À la Une ».
- Avant d'ajouter un portrait, vérifier s'il en existe déjà un dans
  /images/ (ex. page /equipe) et le réutiliser si c'est la même photo.
  Ne jamais créer de doublon sans le signaler.

---

## 5. Gabarits de référence

Toute nouvelle publication est construite en copiant la structure d'une
page de référence, sans en modifier la forme.

| Élément | Page de référence |
|---|---|
| Bloc « À la Une » de rubrique | /finance (entretien d'Ismail Bassy) |
| Page d'entretien | /raja-sa-ismail-bassy-societe-sportive |
| Page de tribune | /article-contentieux-sportif-cjue-tas-maroc |
| Page d'analyse | /charte-investissement-maroc-prime-30-cfo |
| Carte de liste avec vignette | cartes « Dernières analyses » de /finance |
| Souche de redirection | article-cdm2030.html |

Première utilisation de ce fichier : compare les trois pages d'article de
référence (en-tête, visuel, chapeau, ligne auteur, intertitres, encadrés,
bloc auteur, articles liés, partage, pied d'article). Liste-moi toutes les
différences de forme entre elles, propose un gabarit unique, et attends ma
validation avant de l'appliquer. Une fois validé, décris ce gabarit ici
même, dans une section « 5 bis — Gabarit d'article validé », et aligne-y
progressivement les publications existantes, une par commit.

---

## 6. Structure d'une page de rubrique

Ordre fixe, identique sur toutes les rubriques :

1. En-tête de rubrique (titre + texte d'introduction).
2. Bloc « À la Une » : composant partagé assets/a-la-une-rubrique.css,
   rendu strictement identique à celui de /finance. Portrait encadré pour
   une contribution signée ; visuel thématique pour un article de la
   rédaction. Titre H2 lié, en gros plan.
3. « Dernières analyses » : cartes au gabarit unique (vignette 4:3, boîte
   80×60, fichier -sm 160×120 recadré à la main, surtitre, titre, auteur,
   temps de lecture). Une publication présente en « À la Une » n'est pas
   répétée dans la liste.
4. Modules latéraux propres à la rubrique (compte à rebours, indicateurs,
   newsletter) à leur place d'origine.

Une section vide est masquée proprement, sans titre orphelin. Une grille
n'est jamais laissée incomplète (ex. 2 entrées dans 3 colonnes) : la
compléter avec l'article pertinent le plus récent, et le signaler.

---

## 7. Procédure pour chaque nouvelle publication

1. Créer la page à partir du gabarit de référence du bon type (section 5).
2. Intégrer le texte validé sans aucune réécriture.
3. Préparer les images selon la section 4.2 (visuel principal + -sm,
   portrait si nécessaire).
4. Renseigner les métadonnées sur le modèle des pages existantes : title,
   meta description, canonical, og:title, og:description, og:image
   (1200×630), og:image:alt.
5. Ajouter la publication partout où les publications de ce type
   apparaissent : page(s) de rubrique, accueil si pertinent, archives,
   pages /interviews, /tribunes ou /analyses, articles liés, sitemap.
6. Si elle devient « À la Une » d'une rubrique, l'ancienne publication
   « À la Une » redescend dans « Dernières analyses ».
7. Vérifier qu'aucune autre page n'est modifiée au-delà du nécessaire.

## 8. Procédure pour une publication supprimée ou renommée

1. Rechercher dans tout le site chaque lien vers l'ancienne URL et le
   corriger (menus, cartes, articles liés, accueil, archives, sitemap).
2. Remplacer l'ancienne page par une souche de redirection HTML.
3. Ne supprimer aucune image : lister celles qui ne sont plus utilisées.

---

## 9. Règles de travail

- Ne jamais modifier le texte d'un article.
- Ne toucher qu'à ce qui est demandé.
- Explorer avant d'agir, et résumer les constats avant toute modification.
- En cas d'ambiguïté (plusieurs fichiers possibles, fichier introuvable,
  information manquante) : s'arrêter et demander.
- Une branche par lot de travail ; un commit par tâche, messages
  explicites.
- Ne jamais pousser ni fusionner sans validation explicite.

## 10. Vérification avant chaque livraison

- Contrôle visuel à 375, 1000 et 1440 px de chaque page touchée.
- Comparaison avec la page de référence : même structure, mêmes tailles,
  mêmes espacements.
- Aucune couleur ajoutée ou modifiée ; aucune erreur console ; aucun lien
  cassé ; aucun alt manquant ; aucune image déformée, agrandie ou avec
  bandes ; aucun débordement horizontal.
- Récapitulatif final : fichiers modifiés et ajoutés, poids des images,
  pages impactées, points à valider.

---

## 11. Consentement et mesure d'audience

- Google Analytics n'est chargé qu'après consentement, par assets/consent.js
  (choix stocké dans localStorage.nbr_consent). Toute nouvelle page inclut
  assets/consent.css et assets/consent.js, et ne remet jamais la balise
  googletagmanager en dur.
- Le bloc inline gtag d'une page se limite à définir dataLayer, gtag() et
  window.NBR_GA_ID (à recopier d'une page existante). La configuration GA4
  est dans assets/consent.js, qui retire l'extension .html du chemin envoyé
  (page_path) pour ne pas scinder en deux le trafic d'un même article.
- Les formulaires (contact, newsletter) passent par Formspree ; les
  événements GA4 (generate_lead, newsletter_signup) sont gardés par
  typeof gtag === 'function'. Ne pas les déplacer.

## 12. Pièges d'outillage (poste Windows)

- Fichiers HTML en CRLF (core.autocrlf = true) : toute regex ligne à ligne
  doit tolérer \r\n. Les avertissements « LF will be replaced by CRLF »
  sont normaux et ne polluent pas le diff.
- Le heredoc du shell Bash peut supprimer des antislashs dans les scripts
  (un \. ou \s disparaît) : écrire les scripts avec l'outil d'écriture de
  fichiers, ou n'utiliser que des littéraux /.../. Relire le résultat d'une
  regex écrite par ce biais.
- Certaines pages écrivent accents et symboles en entités HTML (&#233;,
  &#169;) : doubler tout grep de contenu par sa variante en entités.
- Ni Python, ni ImageMagick, ni cwebp : traiter les images avec sharp
  (npm, dans un dossier temporaire) ou PowerShell + System.Drawing.
- Prévisualisation locale : npx serve, configuration « neybras » de
  launch.json ; naviguer sur l'URL propre (/finance, pas /finance.html).
- Vérifier une mise en page par mesure (getBoundingClientRect, styles
  calculés) : le panneau navigateur rend parfois une page blanche après
  défilement, et les images en loading="lazy" n'y sont pas chargées tant
  que le panneau est masqué. Pour comparer avant/après, servir l'ancienne
  version depuis un fichier temporaire et comparer les styles calculés
  après document.fonts.ready.

## 13. Publication sur GitHub (sans gh)

- Dépôt : neybrasmagazine/neybras-magazine, compte neybrasmagazine. La
  commande gh n'est pas installée : pull request et fusion passent par
  l'API GitHub (création : POST /pulls ; fusion : PUT /pulls/N/merge avec
  merge_method squash ; suppression de branche : DELETE /git/refs/heads/…).
- Authentification : jeton du gestionnaire d'identifiants Git. Comme
  credential.https://github.com.usehttppath est activé, les identifiants
  sont stockés par dépôt : demander le jeton avec git credential fill en
  passant protocol=https, host=github.com et
  path=neybrasmagazine/neybras-magazine.git. Sans path, on obtient le jeton
  du compte dalalfahmi-arch, sans droit d'écriture sur ce dépôt (erreur 422
  « must be a collaborator »).
- Ne jamais afficher, journaliser ni écrire le jeton. Ne l'utiliser que si
  l'utilisatrice l'a autorisé dans la conversation pour la tâche en cours.
- Contrôler l'absence de conflit (mergeable_state = clean) avant de fusionner.
- Après fusion, attendre le déploiement GitHub Pages (quelques dizaines de
  secondes à quelques minutes) puis vérifier le site public, pas le local,
  à 375 et 1440 px. En cas d'anomalie en ligne, ne rien corriger sur main :
  signaler et proposer un correctif sur une nouvelle branche.
