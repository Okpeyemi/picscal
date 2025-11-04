import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualités, cas d'usage IA et conseils web par Picscal. Découvrez notre offre spéciale : 4 sites web gratuits en 1 mois.",
  alternates: {
    canonical: "https://picscal.maqsoud.tech/blog",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://picscal.maqsoud.tech/blog",
    siteName: "Picscal",
    title: "Blog Picscal",
    description:
      "Actualités, cas d’usage IA et conseils web par Picscal. Les articles arrivent bientôt.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Picscal - Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Picscal",
    description:
      "Actualités, cas d'usage IA et conseils web par Picscal. Découvrez notre offre spéciale : 4 sites web gratuits en 1 mois.",
    images: ["/twitter-image.jpg"],
    creator: "@picscal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const articles = [
    {
      slug: "offre-4-sites-gratuits",
      title: "Offre Spéciale : 4 Sites Web Gratuits en 1 Mois",
      excerpt: "Découvrez notre initiative unique : 4 sites web gratuits offerts pendant 1 mois. Site vitrine, portfolio ou blog personnalisé, prêt à l'emploi.",
      date: new Date().toISOString(),
      readTime: "5 min",
      category: "Offre Spéciale",
      featured: true,
    },
  ];

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
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://picscal.maqsoud.tech/blog",
    name: "Blog Picscal",
    description:
      "Actualités, cas d'usage IA et conseils web par Picscal.",
    publisher: {
      "@type": "Organization",
      name: "Picscal",
      url: "https://picscal.maqsoud.tech",
    },
    blogPost: articles.map(article => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://picscal.maqsoud.tech/blog/${article.slug}`,
      datePublished: article.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative space-y-6 text-center mb-16">
          <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight">
            Blog Picscal
          </h1>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Actualités, conseils et initiatives autour de l&apos;IA et du développement web.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-muted/10 overflow-hidden hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              {/* Featured Badge */}
              {article.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Nouveau</span>
                  </div>
                </div>
              )}

              {/* Image placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Gift className="w-16 h-16 text-primary/40" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full font-mono">
                    {article.category}
                  </span>
                </div>

                <h2 className="font-sans text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                <p className="font-mono text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-4 border-t border-border/60">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 text-center">
          <div className="rounded-2xl border border-border/60 bg-muted/10 p-8">
            <p className="font-mono text-muted-foreground mb-6">
              D&apos;autres articles arrivent bientôt. En attendant, découvrez nos services.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 h-11 text-sm font-sans text-primary-foreground hover:bg-primary/90 transition"
              >
                Parler à un expert
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border px-6 h-11 text-sm font-sans hover:bg-accent hover:text-accent-foreground transition"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}