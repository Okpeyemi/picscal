# 📅 Guide - Gestion de la Timeline de l'Offre Spéciale

## Vue d'ensemble

Un système de badges a été ajouté pour suivre l'état de réalisation de chaque semaine de l'offre spéciale.

## Badges disponibles

### 🕐 En attente
- **Couleur** : Gris (muted)
- **Icône** : Clock
- **Texte** : "En attente"
- **Quand l'utiliser** : Pour les semaines qui n'ont pas encore eu de gagnant

### ✅ Réalisé
- **Couleur** : Primary (votre couleur de thème)
- **Icône** : CheckCircle2
- **Texte** : "Réalisé"
- **Quand l'utiliser** : Pour les semaines où un gagnant a été sélectionné et le site livré

## Comment marquer une semaine comme réalisée

### Fichier à modifier
`src/components/blocks/special-offer-section.tsx`

### Localisation
Lignes 42-47 (environ)

### Code actuel
```typescript
const timeline = [
  { week: "Semaine 1", status: "Gagnant annoncé le lundi", completed: false },
  { week: "Semaine 2", status: "Gagnant annoncé le lundi", completed: false },
  { week: "Semaine 3", status: "Gagnant annoncé le lundi", completed: false },
  { week: "Semaine 4", status: "Gagnant annoncé le lundi", completed: false }
];
```

### Exemple : Marquer la semaine 1 comme réalisée

```typescript
const timeline = [
  { week: "Semaine 1", status: "Site livré à [Nom du gagnant]", completed: true }, // ✅ Réalisé
  { week: "Semaine 2", status: "Gagnant annoncé le lundi", completed: false },
  { week: "Semaine 3", status: "Gagnant annoncé le lundi", completed: false },
  { week: "Semaine 4", status: "Gagnant annoncé le lundi", completed: false }
];
```

### Exemple : Marquer plusieurs semaines

```typescript
const timeline = [
  { week: "Semaine 1", status: "Site livré à Marie Dupont", completed: true },    // ✅
  { week: "Semaine 2", status: "Site livré à Jean Martin", completed: true },     // ✅
  { week: "Semaine 3", status: "En cours de développement", completed: false },   // 🕐
  { week: "Semaine 4", status: "Gagnant annoncé le lundi", completed: false }     // 🕐
];
```

## Personnalisation du statut

Vous pouvez personnaliser le texte du statut pour chaque semaine :

### Exemples de statuts

**Avant sélection :**
- "Gagnant annoncé le lundi"
- "Candidatures ouvertes"
- "Sélection en cours"

**Pendant développement :**
- "En cours de développement"
- "Site en création pour [Nom]"
- "Développement en cours"

**Après livraison :**
- "Site livré à [Nom du gagnant]"
- "Terminé - [Nom du gagnant]"
- "Livré avec succès"

## Rendu visuel

### Badge "En attente"
```
┌─────────────────────────┐
│  🕐 En attente         │ ← Badge gris en haut à droite
│                         │
│         1               │ ← Numéro de semaine
│     Semaine 1           │ ← Titre
│  Gagnant annoncé...     │ ← Statut
└─────────────────────────┘
```

### Badge "Réalisé"
```
┌─────────────────────────┐
│  ✅ Réalisé            │ ← Badge primary en haut à droite
│                         │
│         1               │ ← Numéro de semaine
│     Semaine 1           │ ← Titre
│  Site livré à...        │ ← Statut
└─────────────────────────┘
```

## Workflow recommandé

### Semaine 1 - Lancement
1. Laisser `completed: false`
2. Status : "Candidatures ouvertes"

### Semaine 1 - Sélection
1. Laisser `completed: false`
2. Status : "Gagnant annoncé : [Nom]"

### Semaine 1 - Développement
1. Laisser `completed: false`
2. Status : "En cours de développement"

### Semaine 1 - Livraison
1. Changer à `completed: true` ✅
2. Status : "Site livré à [Nom]"

## Code complet avec commentaires

```typescript
const timeline = [
  { 
    week: "Semaine 1", 
    status: "Site livré à Marie Dupont",  // Personnalisez ce texte
    completed: true                        // true = ✅ Réalisé, false = 🕐 En attente
  },
  { 
    week: "Semaine 2", 
    status: "En cours de développement", 
    completed: false 
  },
  { 
    week: "Semaine 3", 
    status: "Gagnant annoncé le lundi", 
    completed: false 
  },
  { 
    week: "Semaine 4", 
    status: "Candidatures ouvertes", 
    completed: false 
  }
];
```

## Mise à jour en temps réel

Après avoir modifié le fichier :
1. Sauvegardez (`Ctrl+S`)
2. Le serveur de développement recompilera automatiquement
3. Rafraîchissez la page `/offre-speciale` dans votre navigateur
4. Les badges seront mis à jour instantanément

## Conseils

### ✅ Bonnes pratiques
- Mettez à jour le statut ET le completed en même temps
- Utilisez des noms ou pseudonymes si autorisé
- Gardez les statuts courts et clairs
- Marquez comme "Réalisé" uniquement après livraison complète

### ❌ À éviter
- Ne pas mettre `completed: true` avant la livraison
- Ne pas laisser des statuts vagues
- Ne pas oublier de mettre à jour après chaque semaine

## Exemple de progression complète

### Début du mois
```typescript
const timeline = [
  { week: "Semaine 1", status: "Candidatures ouvertes", completed: false },
  { week: "Semaine 2", status: "Candidatures ouvertes", completed: false },
  { week: "Semaine 3", status: "Candidatures ouvertes", completed: false },
  { week: "Semaine 4", status: "Candidatures ouvertes", completed: false }
];
```

### Fin du mois
```typescript
const timeline = [
  { week: "Semaine 1", status: "Site livré à Marie D.", completed: true },
  { week: "Semaine 2", status: "Site livré à Jean M.", completed: true },
  { week: "Semaine 3", status: "Site livré à Sophie L.", completed: true },
  { week: "Semaine 4", status: "Site livré à Pierre K.", completed: true }
];
```

## Support

Si vous avez besoin de modifier le design des badges ou ajouter d'autres statuts, les badges sont définis aux lignes 172-185 du fichier `special-offer-section.tsx`.

Vous pouvez personnaliser :
- Les couleurs (bg-primary, text-primary, etc.)
- Les icônes (CheckCircle2, Clock, etc.)
- Le texte ("Réalisé", "En attente", etc.)
- La taille (text-xs, w-3.5, h-3.5, etc.)
