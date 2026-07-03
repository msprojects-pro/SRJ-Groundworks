/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Send, CheckCircle, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    area: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      console.log('--- SRJ GROUNDWORKS QUOTE REQUEST RECEIVED ---');
      console.log(formData);
      console.log('----------------------------------------------');
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      area: '',
      details: '',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            id="quote-modal-content"
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header banner */}
            <div className="bg-brand-secondary text-white px-6 py-6 relative">
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-brand-primary text-brand-secondary text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Free Quote
                </span>
                <span className="text-white/80 text-xs">No obligation estimate</span>
              </div>
              <h3 className="font-display text-2xl font-bold">Request a Free Estimate</h3>
              <p className="text-white/85 text-sm mt-1 font-sans">
                Tell us about your project. We cover Bath, Wiltshire, and surrounding areas.
              </p>
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              {!isSuccess ? (
                <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07835 996839"
                        className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.smith@example.com"
                        className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-service" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Service Required *
                      </label>
                      <select
                        id="quote-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Other">Other / Multi-service project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-area" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Project Location / Postcode *
                    </label>
                    <input
                      id="quote-area"
                      type="text"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="e.g. Bear Flat, Bath or Wiltshire postcode"
                      className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Project Details & Dimensions (Approximate) *
                    </label>
                    <textarea
                      id="quote-details"
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Please describe the work required (e.g., 'Looking to excavate and lay a 40sqm sandstone patio, clear 3 large tree stumps, and install a retaining oak sleeper wall...')"
                      className="w-full px-4 py-2.5 bg-gray-55 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Informational badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <ShieldCheck className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>Fully Insured & Certified</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <Calendar className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>Flexible Scheduling</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                      <span>Direct Business Line</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-end gap-3">
                    <button
                      id="cancel-quote-btn"
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-center"
                    >
                      Cancel
                    </button>
                    <button
                      id="submit-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-sm font-bold text-white bg-brand-secondary hover:bg-brand-secondary/95 active:scale-[0.98] rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Quote Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="quote-success-screen"
                  className="py-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-secondary mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h4>
                  <p className="text-gray-600 max-w-md mx-auto text-sm mb-6 leading-relaxed">
                    Thank you for contacting SRJ Groundworks, <strong>{formData.name}</strong>. We will review your project details and contact you shortly. For urgent inquiries, please call us directly at <strong>{BUSINESS_INFO.phoneFormatted}</strong>.
                  </p>
                  
                  <div className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-xl p-4 w-full max-w-sm text-left text-xs text-gray-600 mb-8 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Service:</span>
                      <span>{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Area:</span>
                      <span>{formData.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Primary Phone:</span>
                      <span>{formData.phone}</span>
                    </div>
                  </div>

                  <button
                    id="success-close-btn"
                    onClick={handleReset}
                    className="px-8 py-3 text-sm font-bold text-white bg-brand-secondary hover:bg-brand-secondary/95 rounded-lg shadow-md transition-all hover:shadow-lg"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
