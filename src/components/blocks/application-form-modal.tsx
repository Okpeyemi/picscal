'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationFormModal({ isOpen, onClose }: ApplicationFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    siteType: '',
    projectName: '',
    sector: '',
    description: '',
    features: [] as string[],
    motivation: '',
    hasContent: '',
    preferredWeek: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation manuelle des champs Select obligatoires
    if (!formData.siteType || !formData.sector || !formData.preferredWeek) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            siteType: '',
            projectName: '',
            sector: '',
            description: '',
            features: [],
            motivation: '',
            hasContent: '',
            preferredWeek: ''
          });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">Postuler pour un site gratuit</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire en 2 minutes
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 space-y-6">
                {/* Coordonnées */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Vos coordonnées</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Projet */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Votre projet</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="siteType">Type de site *</Label>
                    <Select
                      value={formData.siteType}
                      onValueChange={(value) => setFormData({ ...formData, siteType: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vitrine">Site Vitrine</SelectItem>
                        <SelectItem value="portfolio">Portfolio</SelectItem>
                        <SelectItem value="blog">Blog</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectName">Nom du projet *</Label>
                    <Input
                      id="projectName"
                      type="text"
                      required
                      placeholder="Ex: Mon Atelier Photo"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sector">Secteur d&apos;activité *</Label>
                    <Select
                      value={formData.sector}
                      onValueChange={(value) => setFormData({ ...formData, sector: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="artisanat">Artisanat</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="sante">Santé</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="tech">Tech</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="personnel">Personnel</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description du projet (3-4 lignes) *</Label>
                    <Textarea
                      id="description"
                      required
                      maxLength={300}
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.description.length}/300 caractères
                    </p>
                  </div>
                </div>

                {/* Besoins */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Besoins et motivation</h3>
                  
                  <div className="space-y-2">
                    <Label>Fonctionnalités essentielles *</Label>
                    <div className="space-y-3">
                      {['Formulaire de contact', 'Galerie photos', 'Section blog', 'Réseaux sociaux', 'Autre'].map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={formData.features.includes(feature)}
                            onCheckedChange={() => handleFeatureToggle(feature)}
                          />
                          <Label
                            htmlFor={feature}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Pourquoi devriez-vous être sélectionné(e) ? *</Label>
                    <Textarea
                      id="motivation"
                      required
                      maxLength={400}
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.motivation.length}/400 caractères
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Avez-vous déjà vos textes et images ? *</Label>
                    <RadioGroup
                      required
                      value={formData.hasContent}
                      onValueChange={(value) => setFormData({ ...formData, hasContent: value })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oui" id="hasContent-oui" />
                        <Label htmlFor="hasContent-oui" className="font-normal cursor-pointer">Oui</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non" id="hasContent-non" />
                        <Label htmlFor="hasContent-non" className="font-normal cursor-pointer">Non</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Disponibilité</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredWeek">Quelle semaine vous convient ? *</Label>
                    <Select
                      value={formData.preferredWeek}
                      onValueChange={(value) => setFormData({ ...formData, preferredWeek: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semaine1">Semaine 1</SelectItem>
                        <SelectItem value="semaine2">Semaine 2</SelectItem>
                        <SelectItem value="semaine3">Semaine 3</SelectItem>
                        <SelectItem value="semaine4">Semaine 4</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600"
                  >
                    ✓ Candidature envoyée avec succès ! Nous vous contacterons bientôt.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600"
                  >
                    ✗ Une erreur est survenue. Veuillez réessayer.
                  </motion.div>
                )}
        </form>

        <DialogFooter className="p-6 pt-0 grid md:grid-cols-2 gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Envoi...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer ma candidature
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
