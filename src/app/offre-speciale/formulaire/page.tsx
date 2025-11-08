import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Gift,
  Sparkles,
  Users,
  Calendar,
  Clock,
  ClipboardList,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { AnimatedGroup } from "@/components/ui/animated-group";

export const metadata: Metadata = {
  title: "Candidature Offre Spéciale - 4 Sites Web Gratuits",
  description:
    "Remplissez le formulaire de candidature pour l'offre spéciale Picscal. 1 site web gratuit par semaine pendant 1 mois (4 sites au total).",
  alternates: {
    canonical: "https://picscal.maqsoud.tech/offre-speciale/formulaire",
  },
  openGraph: {
    title: "Formulaire Offre Spéciale | 4 Sites Web Gratuits",
    description:
      "Posez votre candidature pour bénéficier d'un site web gratuit. 4 places disponibles au total, 1 site par semaine pendant 1 mois.",
    url: "https://picscal.maqsoud.tech/offre-speciale/formulaire",
  },
};

const projectTypes = [
  { value: "vitrine", label: "Site vitrine" },
  { value: "portfolio", label: "Portfolio" },
  { value: "blog", label: "Blog / Magazine" },
  { value: "landing", label: "Landing page" },
  { value: "autre", label: "Autre (préciser plus bas)" },
];

const readinessLevels = [
  { value: "aucun", label: "Je n'ai pas encore préparé de contenus" },
  { value: "brouillons", label: "Quelques textes / idées en cours" },
  { value: "complet", label: "Textes et médias prêts" },
];

export default function OffreSpecialeFormPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-1/3 right-10 h-64 w-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12 flex flex-col gap-6">
          <Link
            href="/offre-speciale"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;offre
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-primary/10 text-primary font-medium">
                <Sparkles className="w-4 h-4" />
                Offre limitée : 1 site gratuit par semaine
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-sans">
                Formulaire de candidature
              </h1>
              <p className="text-muted-foreground text-lg font-mono max-w-2xl">
                Remplissez ce formulaire pour déposer votre candidature. Un projet est sélectionné chaque semaine pendant 1 mois (4 sites au total) selon la qualité du projet, la motivation et la préparation.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Rappel clé
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    100% gratuit • Aucune compétence requise
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                <li className="flex gap-2">
                  <Users className="w-4 h-4 text-primary mt-1" />
                  <span>2 places disponibles par semaine</span>
                </li>
                <li className="flex gap-2">
                  <Calendar className="w-4 h-4 text-primary mt-1" />
                  <span>Sélection annoncée chaque lundi</span>
                </li>
                <li className="flex gap-2">
                  <Clock className="w-4 h-4 text-primary mt-1" />
                  <span>Livraison du site en 7 jours après sélection</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
          <section className="bg-muted/10 border border-border/60 rounded-3xl p-8 md:p-10 shadow-lg">
            <AnimatedGroup className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-sans mb-2">Informations principales</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  Les champs marqués d&apos;un astérisque sont obligatoires. Votre dossier complet est traité sous 24h.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nom &amp; prénom *</Label>
                    <Input id="fullName" name="fullName" required placeholder="Ex. Aïcha Souleyman" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel *</Label>
                    <Input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(+229) 00 00 00 00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Nom du projet / activité *</Label>
                    <Input id="projectName" name="projectName" required placeholder="Ex. Atelier créatif Soleil" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Type de site souhaité *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Niveau de préparation des contenus *</Label>
                    <Select name="readiness" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Évaluez votre préparation" />
                      </SelectTrigger>
                      <SelectContent>
                        {readinessLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Objectif principal du site *</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    placeholder="Ex. Présenter mon activité, générer des prospects, vendre des prestations, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audience">Public cible &amp; besoins clés *</Label>
                  <Textarea
                    id="audience"
                    name="audience"
                    required
                    rows={4}
                    placeholder="Décrivez vos clients idéaux, leurs attentes, les fonctionnalités indispensables..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Contenus disponibles *</Label>
                  <Textarea
                    id="content"
                    name="content"
                    required
                    rows={4}
                    placeholder="Textes, photos, logos, vidéos, témoignages... Précisez ce que vous avez déjà et ce qu'il reste à créer."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="constraints">Contraintes, échéances ou particularités *</Label>
                  <Textarea
                    id="constraints"
                    name="constraints"
                    required
                    rows={4}
                    placeholder="Ex. Date de lancement souhaitée, contraintes techniques, obligations légales, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discovery">Comment avez-vous connu l&apos;offre ?</Label>
                  <Input
                    id="discovery"
                    name="discovery"
                    placeholder="Recommandation, réseaux sociaux, newsletter, autre..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Un dernier mot pour l&apos;équipe Picscal ?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Partagez un contexte supplémentaire ou des liens utiles."
                  />
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2 font-semibold text-primary mb-2">
                    <ClipboardList className="w-4 h-4" />
                    <span>Processus après envoi</span>
                  </div>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Accusé de réception sous 24h avec un lien vers le calendrier de disponibilité.</li>
                    <li>Sélection des 2 projets accompagnés chaque lundi matin.</li>
                    <li>Appel de cadrage sous 48h pour les projets retenus, puis livraison en 7 jours.</li>
                  </ol>
                </div>

                <Button type="submit" size="lg" className="w-full font-sans">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma candidature
                </Button>

                <p className="text-xs text-muted-foreground font-mono">
                  Vos informations restent confidentielles et ne sont utilisées que pour étudier votre candidature. Aucun frais caché, aucun engagement.
                </p>
              </form>
            </AnimatedGroup>
          </section>

          <aside className="space-y-8">
            <div className="bg-muted/10 border border-border/60 rounded-3xl p-6">
              <h2 className="text-xl font-bold font-sans mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Critères de sélection
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                <li>Clarté des objectifs et des besoins.</li>
                <li>Capacité à fournir les contenus essentiels.</li>
                <li>Adéquation avec le planning (2 projets maximum par semaine).</li>
                <li>Équité : ordre d&apos;arrivée et tirage au sort si égalité.</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-3xl p-6 space-y-4">
              <h2 className="text-xl font-bold font-sans">Besoin d&apos;aide immédiate ?</h2>
              <p className="text-sm font-mono text-primary-foreground/90">
                Pour toute question avant de déposer votre dossier, contactez-moi directement.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-4 py-2 font-semibold hover:bg-background/90 transition"
                >
                  <Gift className="w-4 h-4" />
                  Parler à un expert
                </Link>
                <a
                  href="mailto:maqsoudt9@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-mono hover:bg-primary-foreground/15 transition"
                >
                  maqsoudt9@gmail.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
