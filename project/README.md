# Magic: The Gathering Collection - Vue.js

Un site web moderne pour explorer et afficher une collection de cartes Magic: The Gathering, développé avec Vue 3, TypeScript et Vite.

## 🎯 Fonctionnalités

- **Affichage de cartes interactives** : Cartes Magic avec animations et effets de hover
- **Filtrage avancé** : Filtrer par rareté et type de carte
- **Design responsive** : Interface adaptée mobile, tablette et desktop
- **Git Hooks automatisés** : Linting pré-commit et build post-commit
- **Déploiement continu** : Configuration Netlify pour déploiement automatique

## 🚀 Technologies utilisées

- **Vue 3** avec Composition API
- **TypeScript** pour la sécurité des types
- **Vite** pour le bundling rapide
- **ESLint & Prettier** pour la qualité du code
- **CSS3** avec variables custom et animations

## 📦 Installation

1. Clonez le projet :
```bash
git clone <url-du-repo>
cd mon-projet-vue
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## 🛠️ Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Aperçu du build
- `npm run lint` - Linting du code
- `npm run format` - Formatage avec Prettier
- `npm run type-check` - Vérification TypeScript

## 🔧 Configuration Git Hooks

Les hooks Git sont automatiquement configurés :

- **Pre-commit** : Exécute le linting avant chaque commit
- **Post-commit** : Lance un build après chaque commit

Les hooks sont situés dans `.git/hooks/` et sont exécutables.

## 🌐 Déploiement sur Netlify

### Configuration automatique

Le fichier `netlify.toml` est configuré pour :
- Build automatique avec `npm run build`
- Publication du dossier `dist`
- Variables d'environnement de production
- Redirections SPA

### Étapes de déploiement

1. **Connectez votre dépôt à Netlify** :
   - Connectez-vous à [Netlify](https://netlify.com)
   - Cliquez sur "New site from Git"
   - Sélectionnez votre fournisseur Git (GitHub, GitLab, etc.)
   - Choisissez ce repository

2. **Configuration automatique** :
   - Netlify détectera automatiquement le fichier `netlify.toml`
   - Build command : `npm run build`
   - Publish directory : `dist`

3. **Déploiement continu** :
   - Chaque push sur la branche principale déclenche un nouveau déploiement
   - Les hooks Git garantissent la qualité du code avant déploiement

### Variables d'environnement

Si nécessaire, configurez les variables d'environnement dans :
`Site settings > Environment variables` sur Netlify

## 🎨 Structure du projet

```
src/
├── components/           # Composants Vue
│   ├── MagicCard.vue    # Composant carte individuelle
│   └── CardGrid.vue     # Grille de cartes avec filtres
├── data/                # Données statiques
│   └── sampleCards.ts   # Cartes d'exemple
├── types/               # Types TypeScript
│   └── Card.ts          # Interface MagicCard
├── App.vue              # Composant racine
├── main.ts              # Point d'entrée
└── style.css            # Styles globaux
```

## 🎯 Fonctionnalités des cartes

Chaque carte Magic affiche :
- **Nom** et **coût de mana**
- **Image** représentative
- **Type** et **description**
- **Rareté** avec code couleur
- **Force/Endurance** pour les créatures
- **Set** d'origine

## 🎨 Design et animations

- **Palette de couleurs** : Bleu mystique, violet, doré
- **Animations fluides** : Hover effects, transitions
- **Responsive design** : Mobile-first approach
- **Accessibilité** : Focus states, contrastes élevés

## 🔍 Filtres disponibles

- **Par rareté** : Commune, Peu commune, Rare, Rare mythique
- **Par type** : Éphémère, Rituel, Créature, Artefact

## 📱 Responsive breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🚀 Performance

- **Lazy loading** pour les images
- **CSS optimisé** avec variables custom
- **Build optimisé** avec Vite
- **Compression** automatique sur Netlify

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Projet sous licence MIT - voir le fichier `LICENSE` pour plus de détails.

## 👥 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Développé avec ❤️ en Vue.js**