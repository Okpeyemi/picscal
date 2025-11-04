'use client';

import { motion } from 'framer-motion';
import { Gift, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function SpecialOfferBanner() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Sparkle effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-foreground/10 to-transparent rounded-full"
            />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left side - Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full border border-primary-foreground/30"
              >
                <Sparkles className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold text-sm">Offre Limitée</span>
              </motion.div>

              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-primary-foreground mb-4">
                  4 Sites Web Gratuits !
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 font-mono">
                  Un site offert chaque semaine pendant 1 mois
                </p>
                <p className="text-primary-foreground/80 font-mono">
                  Site vitrine, portfolio ou blog personnalisé • Prêt à l&apos;emploi • Aucune compétence requise
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/offre-speciale"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground font-bold rounded-full hover:bg-background/90 transition-all hover:scale-105 shadow-lg"
                >
                  <Gift className="w-5 h-5" />
                  <span>Découvrir l&apos;offre</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-primary-foreground font-semibold rounded-full border-2 border-primary-foreground hover:bg-primary-foreground/10 transition-all"
                >
                  <span>Postuler maintenant</span>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-primary-foreground/90 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                  <span>4 places disponibles</span>
                </div>
                <div>
                  <span className="font-semibold">100% gratuit</span>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Floating cards */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-48 h-32 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 p-4 shadow-xl"
                >
                  <div className="w-8 h-8 bg-primary-foreground/80 rounded-lg mb-2" />
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-foreground/30 rounded w-3/4" />
                    <div className="h-2 bg-primary-foreground/20 rounded w-1/2" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [2, -2, 2],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-0 left-0 w-48 h-32 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 p-4 shadow-xl"
                >
                  <div className="w-8 h-8 bg-primary-foreground/80 rounded-lg mb-2" />
                  <div className="space-y-2">
                    <div className="h-2 bg-primary-foreground/30 rounded w-2/3" />
                    <div className="h-2 bg-primary-foreground/20 rounded w-3/4" />
                  </div>
                </motion.div>

                {/* Center gift icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 w-32 h-32 mx-auto bg-background rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <Gift className="w-16 h-16 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
