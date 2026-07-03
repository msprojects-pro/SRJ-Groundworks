/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro bar for quick contact info */}
      <div className="bg-brand-secondary text-white text-xs py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              Serving <strong>Bath, Wiltshire</strong> & Surrounding Areas
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-white/95">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-primary flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-brand-primary" />
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <span className="text-white/30">|</span>
            <span className="hidden md:inline text-white/80">{BUSINESS_INFO.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 bg-blur-nav shadow-lg border-b border-gray-100/50 py-3'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full border-2 border-brand-primary bg-brand-secondary flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display text-2xl font-black text-brand-primary tracking-tighter">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold tracking-tight text-gray-950 uppercase leading-none">
                SRJ <span className="text-brand-secondary">Groundworks</span>
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase mt-0.5">
                Bath & Wiltshire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-brand-secondary transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="nav-quote-btn"
              onClick={onOpenQuoteModal}
              className="bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary hover:text-brand-secondary font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 duration-200"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-brand-secondary hover:bg-gray-100 transition-all focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="lg:hidden fixed top-[112px] sm:top-[104px] inset-x-0 bottom-0 bg-white z-40 border-t border-gray-100 flex flex-col p-6 animate-fade-in-down"
          >
            <div className="flex flex-col gap-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg font-bold text-gray-800 hover:text-brand-secondary flex items-center justify-between py-2 border-b border-gray-50"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 border border-brand-secondary text-brand-secondary font-bold rounded-lg text-center bg-brand-secondary/5"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  handleLinkClick();
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-brand-primary hover:bg-brand-primary/95 text-brand-secondary font-extrabold rounded-lg shadow-md text-center"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
