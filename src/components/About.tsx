/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, ShieldCheck, MapPin, HardHat, Compass, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'Bath & Wiltshire Experts',
      description: 'Extensive knowledge of local ground conditions, council guidelines, and geology in Somerset and Wiltshire.',
      icon: MapPin,
    },
    {
      title: 'Full Machinery Fleet',
      description: 'Operate our own range of precision excavators, dumpers, and compactors suited to both tight and large spaces.',
      icon: Compass,
    },
    {
      title: 'Certified Operators',
      description: 'Highly trained professionals holding industry certifications for safe excavation, trenching, and structural preparation.',
      icon: HardHat,
    },
    {
      title: '100% Client Satisfaction',
      description: 'Built on a solid foundation of local referrals, transparent pricing, and robust construction standards.',
      icon: ThumbsUp,
    },
  ];

  const coreServicesSummary = [
    'Excavators of all sizes (1t to 8t)',
    'Detailed building control oversight',
    'High-end porcelain and Indian stone laying',
    'Robust sub-base engineering standards',
    'Fast, efficient garden clearances',
    'Foul and storm water sewer installations',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artistic Brand Grid / Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]"
            >
              <img
                src={ASSETS.excavationBg}
                alt="SRJ Groundworks Excavation work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Green color block overlay in corner */}
              <div className="absolute top-0 right-0 bg-brand-primary text-brand-secondary font-extrabold px-6 py-4 rounded-bl-2xl shadow-md text-center">
                <span className="block text-3xl">100%</span>
                <span className="block text-xs uppercase tracking-wider font-sans">Reliable</span>
              </div>

              {/* Floating review card inside image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-1.5 mb-1 text-amber-500 text-sm">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "The precision of their foundation work was incredible. Building control signed it off instantly."
                </p>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2">
                  — Building Contractor, Bath
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copywriting content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-extrabold text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-3 py-1 rounded-full">
                Established Specialists
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-6 leading-tight">
              A Solid Foundation of Professionalism, Based in <span className="text-brand-secondary">Bath</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <p>
                At <strong>SRJ Groundworks</strong>, we pride ourselves on delivering outstanding quality, structural precision, and modern design. Based in <strong>Walcot, Bath</strong>, we extend our services across the entirety of Somerset and Wiltshire, serving both domestic homeowners and commercial builders.
              </p>
              <p>
                With years of combined experience in high-end groundworks and premium landscaping, our team possesses the technical expertise and state-of-the-art plant equipment to manage projects of any complexity. From the initial soil excavation and deep concrete footings to the final exquisite stone paving, we execute every phase with meticulous care.
              </p>
            </div>

            {/* Core guarantees list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {coreServicesSummary.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-secondary shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Premium service badge */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-secondary text-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-950">Fully Certified & Insured</h4>
                <p className="text-xs text-gray-500 mt-1">
                  We hold full public liability insurance and are fully licensed waste carriers. All drainage and structural footings are executed strictly to current UK Building Regulations.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Why Choose Us Grid */}
        <div className="mt-20 md:mt-28 border-t border-gray-100 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl font-bold text-gray-950 tracking-tight">
              Why Homeowners & Builders Choose SRJ
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Our principles are built on transparency, structural perfection, and beautiful, long-lasting landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50/60 hover:bg-white hover:shadow-lg rounded-xl p-6 border border-gray-100 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-secondary/5 group-hover:bg-brand-secondary text-brand-secondary group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-gray-950 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
