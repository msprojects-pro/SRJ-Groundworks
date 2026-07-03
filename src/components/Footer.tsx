/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, ArrowUp, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Groundworks', href: '#services' },
    { name: 'Foundations & Footings', href: '#services' },
    { name: 'Patios & Hard Landscaping', href: '#services' },
    { name: 'Driveways & Block Paving', href: '#services' },
    { name: 'Garden Clearances', href: '#services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery Showcase', href: '#gallery' },
    { name: 'Contact & Quotes', href: '#contact' },
  ];

  const subregions = [
    'Bath (Lansdown, Bear Flat, Walcot, Weston)',
    'Bradford-on-Avon & Trowbridge',
    'Chippenham, Corsham & Melksham',
    'Keynsham, Saltford & Bristol Borders',
    'Westbury & Warminster regions',
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-gray-900 overflow-hidden pt-16">
      
      {/* Top Footer Widgets */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 border-b border-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Widget 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-brand-primary bg-brand-secondary flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="font-display text-lg font-black text-brand-primary tracking-tighter">S</span>
              </div>
              <span className="font-display text-lg font-black text-white tracking-tight uppercase leading-none">
                SRJ <span className="text-brand-primary">Groundworks</span>
              </span>
            </a>
            
            <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-sm">
              Professional groundworks, structural extensions, footings, land clearances, and high-end hard landscaping services in Bath and Wiltshire. Fully certified and building inspector compliant.
            </p>

            <div className="space-y-2 text-xs text-gray-400">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span>{BUSINESS_INFO.phoneFormatted} (Direct Line)</span>
              </a>
              <a 
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Widget 2: Services links (2.5 cols) */}
          <div className="lg:col-span-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white flex items-center gap-1 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-brand-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 3: Quick navigation (2.5 cols) */}
          <div className="lg:col-span-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white flex items-center gap-1 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-brand-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 4: Coverage area summary (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Areas Covered
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {subregions.map((region, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-primary shrink-0"></span>
                  <span>{region}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <span className="inline-block text-[10px] text-brand-secondary bg-brand-secondary/10 border border-brand-secondary/20 font-bold px-2 py-0.5 rounded">
                25-MILE HQ RADIUS
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Credits Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-medium">
        <div>
          © {currentYear} <strong>SRJ Groundworks</strong>. All rights reserved. Registered in Bath, United Kingdom.
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#services" className="hover:text-gray-400">Terms of Service</a>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 hover:text-white text-gray-500 transition-colors py-1 px-2.5 rounded border border-gray-900 bg-gray-950 hover:bg-gray-900"
            aria-label="Scroll back to top"
          >
            Top
            <ArrowUp className="w-3 h-3 text-brand-primary" />
          </button>
        </div>
      </div>

    </footer>
  );
}
