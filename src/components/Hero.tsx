/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, CalendarRange, Shield, Award, Users } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBg}
          alt="Completed Sandstone Patio by SRJ Groundworks"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Deep custom gradient overlay for premium branding and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tagline / Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary/10 border border-brand-primary/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></span>
            <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
              Professional Groundworks & Landscaping
            </span>
          </motion.div>

          {/* Core Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Transforming Spaces From The <span className="text-brand-primary">Ground Up</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-sans max-w-2xl"
          >
            Expert footings, home extension prep, premium patio installations, paving, and garden clearances. Fully insured, reliable, and family-run, serving <strong>Bath, Wiltshire, and surrounding regions</strong>.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <button
              id="hero-quote-btn"
              onClick={onOpenQuoteModal}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
            >
              <CalendarRange className="w-5 h-5 transition-transform group-hover:scale-110" />
              Get a Free Quote
            </button>
            
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <Phone className="w-5 h-5 text-brand-primary" />
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </motion.div>

          {/* Core Trust Indicators Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fully Insured</h4>
                <p className="text-xs text-gray-400">Total peace of mind</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Guaranteed Quality</h4>
                <p className="text-xs text-gray-400">Premium workmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Local Specialists</h4>
                <p className="text-xs text-gray-400">Based in Bath, Somerset</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
