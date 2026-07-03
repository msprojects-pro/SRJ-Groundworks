/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, Layers, Home, Grid, Milestone, Trees, Droplet, SquareStack,
  ArrowUpRight, X, Shield, Clock, BadgeCheck, CheckCircle2 
} from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

// Map icon name strings to Lucide components
const iconMap: Record<string, any> = {
  Wrench: Wrench,
  Layers: Layers,
  Home: Home,
  Grid: Grid,
  Milestone: Milestone,
  Trees: Trees,
  Droplet: Droplet,
  SquareStack: SquareStack,
};

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const handleOpenDetail = (service: ServiceItem) => {
    setActiveService(service);
  };

  const handleCloseDetail = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-55 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-3 mb-4">
            Professional Groundworks & Landscaping
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-xl mx-auto">
            From heavy excavation and concrete footings to high-end paving and patio designs, we provide domestic and commercial services across Bath and Wiltshire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white hover:shadow-xl rounded-xl p-6 border border-gray-100/80 transition-all flex flex-col justify-between group h-full relative"
              >
                <div>
                  {/* Icon and Accent circle */}
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 group-hover:bg-brand-secondary group-hover:border-brand-secondary text-brand-secondary group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-display font-extrabold text-gray-950 text-lg mb-3 leading-snug group-hover:text-brand-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="text-xs font-bold text-gray-800 group-hover:text-brand-secondary flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold uppercase">
                    SRJ-0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA box */}
        <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-secondary">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-950 text-base">Have a bespoke project or need multiple services?</h4>
              <p className="text-xs text-gray-500 mt-1">We can bundle groundworks, extension prep, and hard landscaping into a single streamlined quote.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Other')}
            className="w-full md:w-auto px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer text-center"
          >
            Request Multi-Service Estimate
          </button>
        </div>

      </div>

      {/* Slide-out details modal/drawer */}
      <AnimatePresence>
        {activeService && (
          <div id="service-detail-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              id="service-detail-card"
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseDetail}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1.5 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Close detailed service card"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service header decoration */}
              <div className="bg-brand-secondary/5 px-6 py-8 border-b border-gray-100">
                <div className="inline-flex items-center gap-2 text-brand-secondary bg-brand-secondary/10 px-2.5 py-1 rounded-full mb-3 text-xs font-bold">
                  {(() => {
                    const Icon = iconMap[activeService.iconName] || Wrench;
                    return <Icon className="w-4 h-4 stroke-[2]" />;
                  })()}
                  <span>Expert Service</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-950">
                  {activeService.title}
                </h3>
              </div>

              {/* Service content description */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Our Standards & Process</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {activeService.longDescription || activeService.description}
                  </p>
                </div>

                <div className="space-y-3.5 bg-gray-55 p-4 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">What We Guarantee</h4>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-700 font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>Experienced plant operators</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>Compliant with building regs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>Premium stone & porcelain</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>Free transparent site estimates</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      handleCloseDetail();
                      onOpenQuoteModal(activeService.title);
                    }}
                    className="flex-1 py-3 bg-brand-primary text-brand-secondary font-bold text-sm rounded-lg shadow-md hover:bg-brand-primary/95 text-center transition-all cursor-pointer"
                  >
                    Quote for {activeService.title}
                  </button>
                  <button
                    onClick={handleCloseDetail}
                    className="px-5 py-3 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 text-sm font-semibold rounded-lg text-center transition-all cursor-pointer"
                  >
                    Back to services
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
