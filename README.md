# BeFret Landing Page

Landing page multilingue pour BeFret - Services de logistique internationale vers la RD Congo.

## Technologies

- **Next.js 15.5.4** avec App Router
- **TypeScript**
- **Tailwind CSS 4**
- **Next-intl** pour l'internationalisation (FR/EN/NL)
- **EmailJS** pour le formulaire de contact
- **Firebase Hosting** pour le déploiement

## Développement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build
```

## Déploiement Firebase

### Prérequis

```bash
# Se connecter à Firebase
firebase login

# Vérifier le projet configuré
firebase projects:list
```

### Configuration

Le projet est configuré pour déployer sur **befret-production** :

- **Project ID**: `befret-production`
- **Site**: `befret-production.web.app`
- **Dossier de build**: `out/` (export statique Next.js)

### Commandes de déploiement

```bash
# Déploiement complet
npm run deploy

# Déploiement hosting seulement
npm run deploy:hosting
```

## Contact

Email des formulaires envoyé vers : **info@befret.be**