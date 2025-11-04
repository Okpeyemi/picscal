import { Metadata } from 'next';
import { SpecialOfferSection } from "@/components/blocks/special-offer-section";

export const metadata: Metadata = {
  title: "Offre Spéciale - 4 Sites Web Gratuits",
  description: "Chaque semaine pendant 1 mois, je crée gratuitement un site web personnalisé (vitrine, portfolio, blog). Aucune connaissance technique requise. Dans un esprit de partage et découverte.",
  alternates: {
    canonical: 'https://picscal.maqsoud.tech/offre-speciale',
  },
  openGraph: {
    title: "Offre Spéciale - 4 Sites Web Gratuits | Picscal",
    description: "Un site web gratuit offert chaque semaine pendant 1 mois. Site vitrine, portfolio ou blog personnalisé, prêt à l'emploi.",
    url: 'https://picscal.maqsoud.tech/offre-speciale',
  },
};

export default function OffreSpecialePage() {
  return (
    <>
      {/* Données structurées pour l'offre spéciale */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Site Web Gratuit - Offre Spéciale",
            "description": "Création gratuite d'un site web personnalisé chaque semaine pendant 1 mois",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/LimitedAvailability",
            "validFrom": new Date().toISOString(),
            "itemOffered": {
              "@type": "Service",
              "name": "Création de site web personnalisé",
              "description": "Site vitrine, portfolio ou blog avec design responsive et nom de domaine",
              "provider": {
                "@type": "Organization",
                "name": "Picscal"
              }
            },
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 4,
              "unitText": "sites"
            }
          })
        }}
      />

      <SpecialOfferSection />
    </>
  );
}
