/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-55 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-3 py-1 rounded-full">
            Client Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-lg mx-auto">
            We are proud to have built a reputational foundation on honesty, structural integrity, and exquisite ground finishes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              {/* Giant elegant background quote symbol */}
              <div className="absolute top-6 right-6 text-brand-primary/10 group-hover:text-brand-primary/15 transition-colors">
                <Quote className="w-12 h-12 transform rotate-180 stroke-[1.5]" />
              </div>

              <div>
                {/* Stars and verified indicator */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="flex text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-current stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] text-brand-secondary bg-brand-secondary/5 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5" />
                    Verified Work
                  </span>
                </div>

                {/* Text */}
                <p className="text-sm text-gray-700 italic leading-relaxed mb-6 font-sans">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author / Client meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs">
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-gray-950 text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-400 mt-0.5 flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    {testimonial.location}
                  </span>
                </div>
                <div className="text-[11px] text-gray-400 font-medium">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom TrustPilot/Google review indicator */}
        <div className="mt-16 text-center max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-3 border border-gray-100 rounded-xl shadow-sm">
            <span className="text-sm font-bold text-gray-800">Excellent 5.0 Rating</span>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-none" />
              ))}
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-semibold text-gray-500">Based on local client reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}
