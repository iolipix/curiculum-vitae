# CV static site

Site statique pour le CV. Tous les fichiers HTML/CSS/JS sont à la racine.

## Développement local
- Ouvrir `index.html` dans le navigateur ou utiliser un serveur statique simple.
- Exemple rapide avec Python (si installé):
  ```bash
  python -m http.server 3000
  ```
  Puis visiter http://localhost:3000

## Déploiement Vercel
- Sélectionner « Other » comme framework quand Vercel le demande.
- Dossier de sortie : `.` (racine) car les fichiers HTML sont à la racine.
- Commande de build : laisser vide (site statique).
- Optionnel : garder le dossier `.vercel/` en local mais il est ignoré dans git.

## Git
- Repo initialisé avec `.gitignore` minimal.
- Pour pousser :
  ```bash
  git remote add origin <URL-de-ton-depot>
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```
