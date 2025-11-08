# Configuration du Formulaire de Candidature

## 📋 Vue d'ensemble

Un formulaire modal a été créé pour permettre aux utilisateurs de postuler directement depuis la page "Offre Spéciale". Le formulaire s'ouvre en cliquant sur le bouton **"Postuler Maintenant"**.

## 🎯 Fonctionnalités

- ✅ Formulaire modal responsive (11 questions)
- ✅ Validation des champs obligatoires
- ✅ Envoi automatique d'email à `maqsoudt9@gmail.com`
- ✅ Email envoyé depuis `darellchooks@gmail.com`
- ✅ Confirmation visuelle après envoi
- ✅ Design moderne avec animations

## 📁 Fichiers créés

1. **`src/components/blocks/application-form-modal.tsx`**
   - Composant modal du formulaire
   - Gestion du state et validation
   - Interface utilisateur complète

2. **`src/app/api/submit-application/route.ts`**
   - API route pour l'envoi d'email
   - Utilise Web3Forms (service gratuit)
   - Format de l'email structuré

3. **`.env.local.example`**
   - Template pour les variables d'environnement

## 🔧 Configuration requise

### 1. Obtenir une clé Web3Forms (GRATUIT)

1. Allez sur https://web3forms.com
2. Entrez votre email : `maqsoudt9@gmail.com`
3. Vérifiez votre email et copiez la clé d'accès
4. Créez un fichier `.env.local` à la racine du projet :

```bash
WEB3FORMS_ACCESS_KEY=votre_cle_ici
```

### 2. Alternative : EmailJS (aussi gratuit)

Si vous préférez EmailJS :
1. Créez un compte sur https://www.emailjs.com
2. Configurez un service email
3. Modifiez l'API route en conséquence

## 📧 Format de l'email envoyé

```
NOUVELLE CANDIDATURE - OFFRE SITE WEB GRATUIT
=============================================

COORDONNÉES
-----------
Nom: [Prénom] [Nom]
Email: [email]
Téléphone: [téléphone]

PROJET
------
Type de site: [vitrine/portfolio/blog]
Nom du projet: [nom]
Secteur: [secteur]

Description:
[description du projet]

BESOINS
-------
Fonctionnalités souhaitées: [liste]

Motivation:
[motivation du candidat]

Contenu prêt: [oui/non]

DISPONIBILITÉ
-------------
Semaine préférée: [semaine]

=============================================
Candidature reçue le [date et heure]
```

## 🎨 Questions du formulaire

### Section 1 : Coordonnées
1. Prénom et Nom *
2. Email *
3. Téléphone

### Section 2 : Projet
4. Type de site * (Vitrine/Portfolio/Blog)
5. Nom du projet *
6. Secteur d'activité *
7. Description (300 caractères max) *

### Section 3 : Besoins
8. Fonctionnalités essentielles * (multi-choix)
9. Motivation (400 caractères max) *
10. Contenu prêt ? * (Oui/Non)

### Section 4 : Disponibilité
11. Semaine préférée *

## 🚀 Déploiement

### Sur Vercel

1. Ajoutez la variable d'environnement dans Vercel :
   - Dashboard → Settings → Environment Variables
   - Nom : `WEB3FORMS_ACCESS_KEY`
   - Valeur : votre clé Web3Forms

2. Redéployez l'application

### Test local

```bash
# 1. Créez le fichier .env.local avec votre clé
echo "WEB3FORMS_ACCESS_KEY=votre_cle" > .env.local

# 2. Redémarrez le serveur
npm run dev

# 3. Testez sur http://localhost:3000/offre-speciale
```

## 🔍 Vérification

1. Ouvrez `/offre-speciale`
2. Cliquez sur "Postuler Maintenant"
3. Remplissez le formulaire
4. Cliquez sur "Envoyer ma candidature"
5. Vérifiez l'email à `maqsoudt9@gmail.com`

## 🎯 Prochaines améliorations possibles

- [ ] Ajouter un captcha pour éviter le spam
- [ ] Sauvegarder les candidatures dans une base de données
- [ ] Créer un dashboard admin pour gérer les candidatures
- [ ] Ajouter des notifications Slack/Discord
- [ ] Permettre l'upload de fichiers (logo, images)
- [ ] Envoyer un email de confirmation au candidat
- [ ] Ajouter des analytics sur les candidatures

## 📝 Notes importantes

- Le service Web3Forms est gratuit jusqu'à 250 soumissions/mois
- Les emails sont envoyés instantanément
- Le formulaire fonctionne sans rechargement de page
- Toutes les données sont validées côté client et serveur
- Le modal est accessible (navigation au clavier, ARIA labels)

## 🐛 Dépannage

### L'email n'arrive pas
1. Vérifiez que la clé Web3Forms est correcte dans `.env.local`
2. Vérifiez les spams de `maqsoudt9@gmail.com`
3. Consultez les logs du serveur pour les erreurs

### Le modal ne s'ouvre pas
1. Vérifiez la console du navigateur pour les erreurs
2. Assurez-vous que JavaScript est activé
3. Testez sur un autre navigateur

### Erreur 500 lors de l'envoi
1. Vérifiez que l'API route est bien déployée
2. Vérifiez les variables d'environnement
3. Consultez les logs Vercel (si déployé)
