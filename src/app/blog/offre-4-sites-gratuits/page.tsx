import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Gift, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Offre Spéciale : 4 Sites Web Gratuits en 1 Mois",
  description:
    "Découvrez notre initiative unique : 4 sites web gratuits offerts pendant 1 mois. Site vitrine, portfolio ou blog personnalisé, prêt à l'emploi. Postulez maintenant !",
  alternates: {
    canonical: "https://picscal.maqsoud.tech/blog/offre-4-sites-gratuits",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://picscal.maqsoud.tech/blog/offre-4-sites-gratuits",
    siteName: "Picscal",
    title: "Offre Spéciale : 4 Sites Web Gratuits en 1 Mois",
    description:
      "Découvrez notre initiative unique : 4 sites web gratuits offerts pendant 1 mois. Postulez maintenant !",
    publishedTime: new Date().toISOString(),
    authors: ["Équipe Picscal"],
  },
};

export default function BlogArticlePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Offre Spéciale : 4 Sites Web Gratuits en 1 Mois",
    description:
      "Découvrez notre initiative unique : 4 sites web gratuits offerts pendant 1 mois.",
    image: "/og-image.jpg",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Picscal",
    },
    publisher: {
      "@type": "Organization",
      name: "Picscal",
      logo: {
        "@type": "ImageObject",
        url: "https://picscal.maqsoud.tech/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://picscal.maqsoud.tech/blog/offre-4-sites-gratuits",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://picscal.maqsoud.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://picscal.maqsoud.tech/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Offre Spéciale : 4 Sites Web Gratuits",
        item: "https://picscal.maqsoud.tech/blog/offre-4-sites-gratuits",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="relative">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        </div>

        {/* Header */}
        <header className="relative mx-auto max-w-4xl px-6 pt-24 pb-12">
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8 font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-border mb-6">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium text-sm">Offre Spéciale</span>
            </div>
          </div>

          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Une Initiative Unique : 4 Sites Web Gratuits en 1 Mois
          </h1>

          <p className="font-mono text-xl text-muted-foreground mb-8">
            Dans un esprit de partage et de découverte, j&apos;offre gratuitement un site web personnalisé chaque semaine pendant 1 mois.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={new Date().toISOString()}>
                {new Date().toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mx-auto max-w-5xl px-6 mb-12">
          <div className="relative aspect-video rounded-2xl border border-border/60 bg-muted/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Gift className="w-20 h-20 text-primary mx-auto" />
                <p className="text-2xl font-bold font-sans">4 Sites Web Gratuits</p>
                <p className="text-muted-foreground font-mono">Un site offert chaque semaine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-3xl px-6 pb-24">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-4">Pourquoi cette offre ?</h2>
              <p className="text-muted-foreground font-mono leading-relaxed mb-4">
                Je crois fermement au pouvoir du <strong className="text-foreground">partage</strong> et de l&apos;<strong className="text-foreground">entraide</strong>. 
                Trop souvent, avoir une présence en ligne de qualité semble réservé à ceux qui ont les moyens ou les compétences techniques.
              </p>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Cette initiative me permet de contribuer concrètement à votre projet. 
                C&apos;est une opportunité gagnant-gagnant : vous obtenez un <strong className="text-foreground">site professionnel gratuit</strong>, et je continue à développer mon expertise.
              </p>
            </section>

            {/* Ce que vous recevez */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-6">Ce que vous recevez</h2>
              
              <div className="bg-muted/10 rounded-2xl border border-border/60 p-8 mb-6">
                <h3 className="text-xl font-bold font-sans mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Un site web complet et professionnel
                </h3>
                <ul className="space-y-3">
                  {[
                    "Page d'accueil professionnelle et attractive",
                    "Section À propos pour présenter votre activité",
                    "Formulaire de contact simple et fonctionnel",
                    "Design responsive (mobile, tablette, desktop)",
                    "Option blog léger ou portfolio selon vos besoins",
                    "Sous-domaine",
                    "Hébergement inclus pour démarrer",
                    "Support technique de base",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground font-mono">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Types de sites */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-6">Types de sites proposés</h2>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "Site Vitrine",
                    desc: "Idéal pour présenter votre activité, vos services et vos coordonnées de manière professionnelle.",
                    examples: ["Artisan", "Freelance", "PME", "Association"],
                  },
                  {
                    title: "Portfolio",
                    desc: "Parfait pour mettre en valeur vos créations, réalisations et projets de manière visuelle.",
                    examples: ["Photographe", "Designer", "Artiste", "Développeur"],
                  },
                  {
                    title: "Blog / Page de Présentation",
                    desc: "Pour partager votre contenu, vos idées et vous exprimer librement en ligne.",
                    examples: ["Blogueur", "Expert", "Consultant", "Créateur"],
                  },
                ].map((site, index) => (
                  <div
                    key={index}
                    className="bg-muted/10 rounded-xl border border-border/60 p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold font-sans mb-3">{site.title}</h3>
                    <p className="text-muted-foreground font-mono text-sm mb-4">{site.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {site.examples.map((example, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-mono"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment ça marche */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-6">Comment ça marche ?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Postulez",
                    desc: "Contactez-moi via le formulaire de contact en expliquant votre projet et vos besoins.",
                  },
                  {
                    step: "2",
                    title: "Sélection",
                    desc: "Chaque lundi, j'annonce le gagnant de la semaine. 4 gagnants au total sur 1 mois.",
                  },
                  {
                    step: "3",
                    title: "Création",
                    desc: "Je développe votre site personnalisé en fonction de vos besoins et de votre identité.",
                  },
                  {
                    step: "4",
                    title: "Livraison",
                    desc: "Vous recevez votre site clé en main, prêt à être utilisé, avec un guide de prise en main.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-sans mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-mono">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Qui peut postuler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-6">Qui peut postuler ?</h2>
              
              <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8">
                <p className="text-muted-foreground font-mono leading-relaxed mb-4">
                  <strong className="text-foreground">Tout le monde !</strong> Cette offre est ouverte à tous, sans condition :
                </p>
                <ul className="space-y-2 text-muted-foreground font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Entrepreneurs qui démarrent leur activité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Freelances qui veulent une vitrine professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Artistes et créatifs qui souhaitent un portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Associations qui ont besoin de visibilité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Passionnés qui veulent partager leur contenu</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold font-sans mb-6">Questions fréquentes</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "C'est vraiment 100% gratuit ?",
                    a: "Oui, absolument ! Aucun frais caché, aucune condition. C'est une initiative de partage.",
                  },
                  {
                    q: "Combien de temps faut-il pour créer le site ?",
                    a: "Entre 3 et 7 jours selon la complexité. Vous serez impliqué dans le processus pour valider les choix.",
                  },
                  {
                    q: "Puis-je modifier le site après ?",
                    a: "Oui, je vous fournis un guide pour gérer le contenu. Pour des modifications importantes, nous pouvons discuter d'un accompagnement.",
                  },
                  {
                    q: "Que se passe-t-il après la livraison ?",
                    a: "Le site est à vous ! Je reste disponible pour un support de base pendant 1 mois après la livraison.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-muted/10 rounded-xl border border-border/60 p-6">
                    <h3 className="text-lg font-bold font-sans mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground font-mono">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Final */}
            <section className="mt-16">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
                  Prêt à tenter votre chance ?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 font-mono">
                  Ne manquez pas cette opportunité unique. Les places sont limitées !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/offre-speciale"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <Gift className="w-5 h-5" />
                    Voir l&apos;offre complète
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-foreground font-semibold rounded-full border-2 border-primary-foreground hover:bg-primary-foreground/10 transition-all"
                  >
                    Postuler maintenant
                  </Link>
                </div>
                <p className="text-primary-foreground/80 mt-6 text-sm font-mono">
                  4 places disponibles • 100% gratuit • Aucun engagement
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
