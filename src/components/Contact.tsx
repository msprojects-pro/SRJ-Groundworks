/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, Calendar, Send, 
  CheckCircle, ShieldAlert, ArrowRight, ExternalLink 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submit
    setTimeout(() => {
      console.log('--- SRJ GROUNDWORKS CONTACT MESSAGE RECEIVED ---');
      console.log(formData);
      console.log('------------------------------------------------');
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-3 mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            Ready to schedule a free, no-obligation site measurement or discuss design concepts? Give us a call or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-secondary text-white rounded-2xl p-8 relative overflow-hidden shadow-xl">
              {/* Background graphic */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              
              <h3 className="font-display text-2xl font-bold mb-6 text-white">
                Direct Contact Details
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-primary text-brand-secondary rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 font-semibold tracking-wider uppercase">Call Now</span>
                    <span className="block text-lg font-bold group-hover:text-brand-primary transition-colors mt-0.5">
                      {BUSINESS_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-primary text-brand-secondary rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-white/70 font-semibold tracking-wider uppercase">Email Us</span>
                    <span className="block text-base font-bold group-hover:text-brand-primary transition-colors mt-0.5 truncate">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 bg-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center shrink-0 border border-brand-primary/25">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 font-semibold tracking-wider uppercase">Location & Base</span>
                    <span className="block text-sm font-semibold mt-1">
                      {BUSINESS_INFO.location}
                    </span>
                    <span className="block text-xs text-white/65 mt-0.5">
                      Serving all of Bath & Wiltshire
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 bg-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center shrink-0 border border-brand-primary/25">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 font-semibold tracking-wider uppercase">Working Hours</span>
                    <span className="block text-xs font-semibold mt-1">
                      {BUSINESS_INFO.workingHours}
                    </span>
                    <span className="block text-xs text-white/60 mt-0.5">
                      Available for scheduled Saturday visits
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex gap-4 items-start">
              <Calendar className="w-6 h-6 text-brand-secondary shrink-0" />
              <div>
                <h4 className="font-display font-bold text-gray-950 text-sm">Site Surveys Available</h4>
                <p className="text-xs text-gray-500 mt-1">
                  We schedule quick 20-minute site assessment surveys to understand heights, dimensions, access boundaries, and design preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7 bg-gray-55 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  id="contact-form" 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-display text-xl font-bold text-gray-950 mb-6">Send Us an Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Miller"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07835 996839"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane.miller@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Subject / Enquiry Type *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all"
                    >
                      <option value="">Select subject...</option>
                      <option value="New Patio / Landscaping">New Patio & Hard Landscaping</option>
                      <option value="Groundworks / Excavation">Groundworks & Foundations</option>
                      <option value="Driveway Installation">Driveways & Block Paving</option>
                      <option value="Garden Clearance / Grading">Garden Clearances & Levelling</option>
                      <option value="Sewer / Land Drainage">Drainage Solutions</option>
                      <option value="Other">Other construction questions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Message Details *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project dimensions, timeline, material ideas, and site access constraints..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-gray-800 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-extrabold text-sm rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-screen"
                  className="py-12 text-center flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-secondary mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-gray-950 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-500 text-xs max-w-sm mx-auto mb-6 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your query regarding <strong>{formData.subject}</strong> and will email or call you within 24 business hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-xs font-bold text-brand-secondary hover:text-brand-secondary/90 transition-colors"
                  >
                    Send another message
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
