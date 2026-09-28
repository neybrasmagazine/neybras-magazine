# Neybras Magazine — consignes pour Claude

Site statique HTML/CSS/JS de neybras-magazine.com (média B2B droit & finance, Maroc et Afrique francophone), hébergé sur GitHub Pages (`CNAME`, branche `main`). Pas de build, pas de framework.

## Règle absolue : la palette

- La palette est celle **déjà en place sur le site** (variables CSS et couleurs existantes). Elle ne se modifie jamais.
- Aucune couleur ajoutée, remplacée ou « harmonisée » de sa propre initiative. Tout nouvel élément réutilise les variables du site (`--bn`, `--bn2`, `--or`, `--or-lt`, etc.).
- Si une consigne cite une autre valeur, c'est la couleur du site qui fait foi. En cas de doute : ne rien toucher et le signaler.
- Avant de commiter, vérifier que le diff n'ajoute aucune couleur nette par rapport à `main`.

## Contenu

- Ne jamais modifier le texte d'un article sans demande explicite.
- Ne rien publier d'invérifiable : pas de chiffres d'audience, de signatures ou de citations inventés.
- Ne pas créer d'URL nouvelle ni modifier les URL existantes sans demande.

## Structure et conventions

- CSS : un `<style>` par page plus `assets/*.css` partagés. Le bloc « À la Une » des rubriques est dans `assets/a-la-une-rubrique.css` (utilisé par `finance.html` et `droit-du-sport.html`) ; le balisage est copié dans chaque page.
- Images dans `images/` : WebP, variante `-sm` pour les cartes de liste, attributs `width`/`height` sur chaque `<img>`, `alt` renseigné. Ne pas supprimer d'image sans accord : lister celles qui ne sont plus utilisées.
- Toute nouvelle page charge `assets/consent.css` et `assets/consent.js` et ne remet pas la balise Google Analytics en dur (le chargement se fait après consentement).
- Redirections : `.htaccess` est **ignoré par GitHub Pages**. Une ancienne URL se redirige avec une souche HTML (meta-refresh, `location.replace`, canonical, `noindex,follow`), sur le modèle d'`article-cdm2030.html`.
- Une page supprimée ou renommée impose de retirer ses liens, son entrée de `sitemap.xml` et de prévoir la souche.

## Pièges d'outillage (Windows)

- Fichiers HTML en CRLF (`core.autocrlf=true`) : les regex ligne à ligne doivent tolérer `\r\n`.
- Le heredoc du shell Bash supprime certains antislashs : écrire les scripts avec l'outil d'écriture de fichiers, ou utiliser des littéraux `/.../`.
- Certaines pages écrivent accents et symboles en entités HTML : doubler tout `grep` de contenu par sa variante en entités.
- Prévisualisation locale : `npx serve` (config `neybras` dans `.claude/launch.json`), naviguer sur l'URL propre (`/finance`, pas `/finance.html`).
- Vérifier une mise en page par mesure (`getBoundingClientRect`, styles calculés) plutôt que par capture d'écran seule.

## Flux de travail

- Une branche dédiée par chantier, un commit par tâche, messages explicites.
- Ne pas pousser, ouvrir de pull request ni fusionner sans autorisation explicite.
- Après un déploiement, contrôler le site public (pas seulement le local) à 375 et 1440 px ; en cas d'anomalie, proposer un correctif sur une nouvelle branche, sans corriger directement `main`.
