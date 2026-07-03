/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingCallButton from './components/FloatingCallButton';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setPreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedService('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-brand-primary/30 selection:text-brand-secondary">
      {/* Sticky navigation and bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* About Section */}
        <About />

        {/* Services Showcase */}
        <Services onOpenQuoteModal={(serviceName) => handleOpenQuoteModal(serviceName)} />

        {/* Portfolio / Gallery Showcase */}
        <Gallery />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Us Form & Regional Map */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full-screen Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={preselectedService}
      />

      {/* Floating mobile call widget */}
      <FloatingCallButton />
    </div>
  );
}
