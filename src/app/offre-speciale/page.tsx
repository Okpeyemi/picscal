import { Metadata } from 'next';
import { SpecialOfferSection } from "@/components/blocks/special-offer-section";

export const metadata: Metadata = {
  title: "Offre Spéciale - 2 Sites Web Gratuits par Semaine",
  description: "Chaque semaine, je crée gratuitement jusqu'à 2 sites web personnalisés (vitrine, portfolio, blog). Aucune connaissance technique requise. Offre à places limitées pour un accompagnement sur-mesure.",
  alternates: {
    canonical: 'https://picscal.maqsoud.tech/offre-speciale',
  },
  openGraph: {
    title: "Offre Spéciale - 2 Sites Web Gratuits par Semaine | Picscal",
    description: "Jusqu'à 2 sites web gratuits offerts chaque semaine. Sites vitrines, portfolios ou blogs personnalisés, livrés en 7 jours après sélection.",
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
            "name": "Site Web Gratuit - Offre Spéciale (2 par semaine)",
            "description": "Création gratuite de deux sites web personnalisés sélectionnés chaque semaine",
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
              "value": 2,
              "unitText": "sites par semaine"
            },
            "deliveryLeadTime": {
              "@type": "QuantitativeValue",
              "value": 7,
              "unitCode": "DAY"
            }
          })
        }}
      />

      <SpecialOfferSection />
    </>
  );
}
