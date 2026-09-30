# Gabarit de titraille — dossiers juridiques et financiers

Ce gabarit s'applique aux **nouveaux** dossiers financiers ou juridiques de la rédaction. Il complète `CLAUDE.md` (sections 4, 5 et 7) et ne le remplace pas.

Limites à respecter :

- **Textes signés** (tribunes, entretiens, citations attribuées) : titre, intertitres et corps ne sont jamais modifiés sans validation écrite de la direction de la publication. Ce gabarit ne justifie aucune reprise de titraille sur une publication existante.
- **Chiffres et dates** : tout indicateur cité dans un titre ou un chapeau est vérifié sur sa source primaire et repris dans le bloc « Sources ». Un chiffre non vérifié ne figure ni dans un titre ni dans un chapeau.
- **Forme** : les balises reprennent les classes et les gabarits de page existants (`CLAUDE.md`, section 5). Aucune classe nouvelle.

---

## Arborescence standard

```html
<h1>[Entité + enjeu + cadre réglementaire]</h1>
<p class="lead">[Résumé exécutif : 2 à 3 phrases denses]</p>

<h2>[Axe 1 : contexte réglementaire ou macroéconomique, avec entité nommée]</h2>
  <h3>[Texte de loi, article ou mécanisme technique précis]</h3>
  <h3>[Chiffres clés ou indicateurs de marché, datés et sourcés]</h3>

<h2>[Axe 2 : analyse corporate ou enjeux locaux, avec entité nommée]</h2>
  <h3>[Répercussions pour Casablanca, le Maroc ou la zone concernée]</h3>
  <h3>[Jurisprudence ou risque de conformité]</h3>

<h2>[Axe 3 : perspectives, solutions ou recommandations d'experts]</h2>

<h2>Sources et documents de référence</h2>
```

Un seul `<h1>` par page. Pas de saut de niveau (pas de `<h3>` sans `<h2>` au-dessus).

---

## Les quatre règles de rédaction des `<h2>` et `<h3>`

### Règle 1 — Ancrer les entités nominatives (obligatoire en `<h2>`)

Un `<h2>` cite l'institution, l'entreprise, le texte de loi ou la zone géographique concernée.

- À éviter : `<h2>L'impact de la nouvelle réglementation sur les investissements</h2>`
- À écrire : `<h2>L'impact de la Charte de l'investissement (loi-cadre n° 03-22) sur les investissements directs étrangers</h2>`

### Règle 2 — Intégrer un indicateur chiffré ou temporel, quand il est vérifié

- À éviter : `<h3>Une forte croissance des financements pour les infrastructures</h3>`
- À écrire : `<h3>[Montant vérifié] de financements [institution] pour [programme], à l'horizon [année]</h3>`

Le montant, l'institution et l'horizon sont copiés de la source primaire. Sans source, on écrit un intertitre qualitatif précis, pas un chiffre approximatif.

### Règle 3 — Employer les termes exacts du droit et de la finance

- À éviter : `<h3>Les risques en cas de désaccord entre les deux parties</h3>`
- À écrire : `<h3>Les clauses compromissoires et la gestion du risque de conformité</h3>`

### Règle 4 — Affirmer plutôt que questionner

Un titre résume le paragraphe qu'il annonce. Pas de question générique.

- À éviter : `<h2>Pourquoi l'IA va-t-elle transformer les cabinets d'avocats ?</h2>`
- À écrire : `<h2>L'intégration de la LegalTech et de l'IA dans les cabinets de Casablanca, sous le contrôle de la CNDP</h2>`

(Les questions restent admises dans une FAQ balisée comme telle, pas dans la hiérarchie du dossier.)

---

## Exemple rempli (à adapter, sans chiffre non vérifié)

```html
<h1>[Entité] : les clés juridiques et financières de [projet ou opération]</h1>
<p class="lead">Analyse du montage financier et du cadre réglementaire de [opération], au regard de la loi-cadre n° 03-22 formant Charte de l'investissement.</p>

<h2>Le montage financier et l'activation des primes de la Charte de l'investissement</h2>
  <h3>La structure des fonds propres et les financements de [institution]</h3>
  <h3>Les primes de l'État liées au régime applicable à [zone ou secteur]</h3>

<h2>La conformité environnementale et la sécurisation foncière à [ville ou zone]</h2>
  <h3>Les normes environnementales applicables au projet en droit marocain</h3>
  <h3>Les baux de longue durée et la gestion du domaine concerné</h3>

<h2>Perspectives et recommandations pour les investisseurs à Casablanca et au Maroc</h2>

<h2>Sources et documents de référence</h2>
<ul>
  <li>[Texte officiel : intitulé, numéro, date, lien Bulletin officiel ou SGG]</li>
  <li>[Communiqué de l'institution : intitulé, date, lien]</li>
  <li>[Décision de justice ou sentence : juridiction, numéro, date]</li>
</ul>
```

Les crochets sont des emplacements à remplir. Rien n'est publié avec des crochets.

---

## Bloc « Sources et documents de référence »

Dernier `<h2>` du dossier. Une entrée par document : intitulé exact, autorité émettrice, numéro, date, lien vers la source primaire (Bulletin officiel, SGG, communiqué de l'institution, décision de justice). Les sources secondaires (presse) viennent après, sans remplacer les primaires.

## Liste de contrôle avant publication

- [ ] Un seul `<h1>` ; aucun saut de niveau
- [ ] Chaque `<h2>` nomme une entité (institution, entreprise, texte, zone)
- [ ] Chaque chiffre ou date d'un titre ou du chapeau figure dans les sources
- [ ] Aucune question générique dans la hiérarchie
- [ ] Chapeau : 2 à 3 phrases, entité, enjeu et cadre réglementaire nommés
- [ ] Bloc « Sources et documents de référence » complet
- [ ] Section 7 de `CLAUDE.md` suivie (métadonnées, rubriques, sitemap)
