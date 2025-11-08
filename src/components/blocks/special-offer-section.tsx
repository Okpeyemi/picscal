'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Globe, Palette, Zap, CheckCircle2, Calendar, Users, Sparkles, Clock } from 'lucide-react';
import { ApplicationFormModal } from './application-form-modal';

export function SpecialOfferSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: Globe,
      title: "Site Web Complet",
      description: "Page d'accueil, à propos, contact et design responsive"
    },
    {
      icon: Palette,
      title: "Design Personnalisé",
      description: "Adapté à votre identité et vos besoins spécifiques"
    },
    {
      icon: Zap,
      title: "Prêt à l'Emploi",
      description: "Livré clé en main avec nom de domaine ou sous-domaine"
    },
    {
      icon: Users,
      title: "Aucune Compétence Requise",
      description: "Pas besoin de connaissances techniques pour gérer votre site"
    }
  ];

  const included = [
    "Page d'accueil professionnelle",
    "Section À propos",
    "Formulaire de contact simple",
    "Design responsive (mobile, tablette, desktop)",
    "Option blog léger ou portfolio selon demande",
    "Sous-domaine",
    "Hébergement inclus",
    "Support technique de base"
  ];

  const timeline = [
    {
      week: "Étape 1",
      status: "Remplissez le formulaire d'inscription (nom, projet, besoins détaillés)",
      badge: "Formulaire"
    },
    {
      week: "Étape 2",
      status: "Sélection transparente : 2 projets retenus par semaine selon l'ordre d'arrivée et la pertinence",
      badge: "Sélection"
    },
    {
      week: "Étape 3",
      status: "Appel de lancement sous 48h pour cadrer contenus et objectifs",
      badge: "Kick-off"
    },
    {
      week: "Étape 4",
      status: "Livraison du site en 7 jours avec guide de prise en main",
      badge: "Livraison"
    }
  ];

  const applicationFields = [
    "Nom et prénom",
    "Nom du projet ou de l'activité",
    "Objectif principal du site",
    "Public cible et besoins clés",
    "Contenus disponibles (textes, images, logos)",
    "Contraintes ou échéances spécifiques"
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-border mb-6"
          >
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">2 sites gratuits par semaine</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            2 Sites Web Gratuits / Semaine
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-mono">
            Jusqu'à deux projets sélectionnés chaque semaine pour un accompagnement personnalisé et intensif
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
            Dans un esprit de <span className="text-primary font-semibold">partage</span> et de <span className="text-primary font-semibold">découverte</span>, votre site est livré en 7 jours après sélection
          </p>
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-muted/10 backdrop-blur-sm border border-border/60 rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
        >
          <div className="flex flex-col items-start gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold font-sans text-foreground mb-2">L&apos;Offre en Détail</h2>
              <p className="text-muted-foreground font-mono">Tout ce que vous recevrez, gratuitement</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold font-sans text-foreground">2 places par semaine</h3>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  Pour garantir un suivi sur-mesure, seuls deux sites sont produits chaque semaine. Les candidatures complètes sont traitées par ordre d&apos;arrivée.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold font-sans text-foreground">Livraison en 7 jours</h3>
                </div>
                <p className="text-muted-foreground font-mono text-sm">
                  Une fois votre projet sélectionné, nous lançons l&apos;atelier de cadrage sous 48h puis livrons votre site clé en main dans un délai maximum de 7 jours.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-muted/10 rounded-xl border border-border/60 hover:border-primary/50 transition-colors"
              >
                <div className="p-2 bg-primary/15 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm font-mono">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-muted/10 rounded-2xl p-6 border border-border/60">
            <h3 className="text-xl font-bold font-sans text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Fonctionnalités Incluses
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-2 text-muted-foreground font-mono"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-sans text-foreground mb-2 flex items-center justify-center gap-2">
              <Calendar className="w-8 h-8 text-primary" />
              Processus en 4 étapes
            </h2>
            <p className="text-muted-foreground font-mono">2 projets accompagnés chaque semaine</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative bg-muted/10 backdrop-blur-sm border border-border/60 rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:scale-105"
              >
                {/* Badge de statut */}
                <div className="absolute top-3 right-3">
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">{item.badge}</span>
                  </div>
                </div>

                <div className="text-4xl font-bold text-primary mb-2">{index + 1}</div>
                <div className="text-lg font-semibold font-sans text-foreground mb-1">{item.week}</div>
                <div className="text-sm text-muted-foreground font-mono">{item.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selection transparency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="bg-muted/10 backdrop-blur-sm border border-border/60 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold font-sans text-foreground mb-6 text-center">Sélection transparente chaque semaine</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[{
              title: "Ordre d'arrivée prioritaire",
              description: "Les dossiers complets sont évalués dans l'ordre de réception afin de garantir une chance égale à chaque candidature."
            }, {
              title: "Critères simples",
              description: "Pertinence du projet, clarté des besoins et capacité à fournir les contenus essentiels suffisent pour décider."
            }, {
              title: "Tirage au sort en cas d'égalité",
              description: "Si plusieurs projets répondent aux mêmes critères, un tirage au sort est réalisé pour départager de manière équitable."
            }].map((item, index) => (
              <div key={index} className="rounded-2xl border border-border/60 bg-background/40 p-6">
                <h3 className="text-xl font-bold font-sans text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-mono text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-mono text-sm text-center mt-8">
            Les deux projets retenus sont annoncés chaque lundi par email, avec un plan d&apos;action détaillé et les prochaines étapes.
          </p>
        </motion.div>

        {/* Application requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-muted/10 backdrop-blur-sm border border-border/60 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold font-sans text-foreground mb-6 text-center">Formulaire d'inscription : les informations essentielles</h2>
          <p className="text-muted-foreground font-mono text-sm text-center mb-6">
            Préparez ces éléments pour accélérer votre candidature et faciliter la sélection :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {applicationFields.map((field, index) => (
              <div key={index} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground font-mono">{field}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-mono text-xs text-center mt-6">
            Les projets complets reçoivent une réponse sous 24h avec un lien vers le formulaire détaillé et le calendrier de disponibilité.
          </p>
        </motion.div>

        {/* Types of Sites */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-muted/10 backdrop-blur-sm border border-border/60 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold font-sans text-foreground mb-6 text-center">Types de Sites Proposés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Site Vitrine", desc: "Présentation de votre activité, services et coordonnées" },
              { type: "Portfolio", desc: "Mise en valeur de vos créations et réalisations" },
              { type: "Blog / Page de Présentation", desc: "Partage de contenu et expression personnelle" }
            ].map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-muted/10 rounded-xl p-6 border border-border/60 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold font-sans text-foreground mb-2">{site.type}</h3>
                <p className="text-muted-foreground font-mono">{site.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="bg-muted/10 backdrop-blur-sm border border-border/60 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold font-sans text-foreground mb-6 text-center">Critères de Sélection</h2>
          <p className="text-center text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
            Pour garantir que cette offre profite à ceux qui en ont vraiment besoin, voici comment j&apos;évalue les candidatures
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Qualité du projet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 }}
              className="bg-muted/10 rounded-xl p-6 border border-border/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-primary">30%</div>
                <h3 className="text-xl font-bold font-sans text-foreground">Qualité du projet</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Clarté de la description</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pertinence du besoin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Potentiel d&apos;impact</span>
                </li>
              </ul>
            </motion.div>

            {/* Motivation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-muted/10 rounded-xl p-6 border border-border/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-primary">25%</div>
                <h3 className="text-xl font-bold font-sans text-foreground">Motivation</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Authenticité de la démarche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Engagement dans le projet</span>
                </li>
              </ul>
            </motion.div>

            {/* Préparation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="bg-muted/10 rounded-xl p-6 border border-border/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-primary">20%</div>
                <h3 className="text-xl font-bold font-sans text-foreground">Préparation</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Contenu disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Clarté des objectifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Idées précises</span>
                </li>
              </ul>
            </motion.div>

            {/* Urgence/Besoin */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-muted/10 rounded-xl p-6 border border-border/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-primary">15%</div>
                <h3 className="text-xl font-bold font-sans text-foreground">Urgence / Besoin</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-mono text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Timing du projet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Absence de solution actuelle</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Diversité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mt-6 bg-muted/10 rounded-xl p-6 border border-border/60"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl font-bold text-primary">10%</div>
              <h3 className="text-xl font-bold font-sans text-foreground">Diversité</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground font-mono text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Variété des secteurs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Mix des types de sites</span>
              </li>
            </ul>
          </motion.div>

          <p className="text-center text-muted-foreground font-mono text-sm mt-6 italic">
            Ces critères me permettent d&apos;offrir cette opportunité aux projets les plus prometteurs et authentiques
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Intéressé(e) par cette offre ?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-mono">
              Contactez-moi pour participer à cette aventure et peut-être être l&apos;un des 4 heureux gagnants !
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-all hover:scale-105 shadow-lg"
            >
              <Gift className="w-5 h-5" />
              Postuler Maintenant
            </button>
            <p className="text-primary-foreground/80 mt-6 text-sm font-mono">
              Places limitées • 100% gratuit • Aucun engagement
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 text-center text-muted-foreground font-mono"
        >
          <p className="text-lg mb-2">
            <span className="text-primary font-semibold">Pourquoi cette offre ?</span>
          </p>
          <p className="max-w-3xl mx-auto">
            Je crois au pouvoir du partage et de l&apos;entraide. 
            Cette initiative me permet de contribuer à votre projet tout en développant mon expertise. 
            Ensemble, créons quelque chose d&apos;unique, à votre rythme et avec un accompagnement transparent.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <ApplicationFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
