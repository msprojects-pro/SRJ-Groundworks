/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Eye, X, ChevronLeft, ChevronRight, Info, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'groundworks', label: 'Groundworks' },
    { key: 'landscaping', label: 'Landscaping & Patios' },
    { key: 'paving', label: 'Driveways & Paving' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find the original index of the item in GALLERY_ITEMS to allow pagination
    const index = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold text-brand-secondary uppercase tracking-widest bg-brand-secondary/5 px-3 py-1 rounded-full">
              Project Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-3 mb-2">
              Our Completed Works
            </h2>
            <p className="text-sm text-gray-500 max-w-lg">
              Explore our portfolio of high-end groundworks, home extension preps, and stunning garden landscape transformations in Bath and Wiltshire.
            </p>
          </div>

          {/* Categories/Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-brand-secondary text-white shadow-md shadow-brand-secondary/15'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-50 aspect-[4/3] border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Project Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-1.5 text-brand-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    {item.category === 'paving' ? 'Driveways & Paving' : item.category === 'landscaping' ? 'Landscaping & Patios' : item.category}
                  </div>
                  <h3 className="font-display font-bold text-white text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[11px] font-sans mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-white text-[10px] font-semibold border-t border-white/10 pt-3">
                    <span className="flex items-center gap-1 text-white/80">
                      <MapPin className="w-3 h-3 text-brand-primary" />
                      Bath & Wiltshire
                    </span>
                    <span className="flex items-center gap-1 text-brand-primary bg-white/10 px-2 py-0.5 rounded-full">
                      <Eye className="w-3 h-3" />
                      View Project
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if filter doesn't have matches */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
            <Info className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-700">No projects listed yet in this category.</p>
            <p className="text-xs text-gray-500 mt-1">Please check other categories or contact us to see offline work portfolios.</p>
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 md:p-6 select-none">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-white z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  SRJ Groundworks Project
                </span>
                <span className="text-sm font-display font-bold">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </span>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close project preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Slider */}
            <div className="relative flex-1 flex items-center justify-center max-h-[75vh]">
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 md:left-4 z-10 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full border border-white/10 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={GALLERY_ITEMS[selectedImageIndex].imageUrl}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 md:right-4 z-10 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full border border-white/10 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="text-center text-white/80 max-w-xl mx-auto z-10 pb-4">
              <p className="text-xs md:text-sm italic leading-relaxed">
                "{GALLERY_ITEMS[selectedImageIndex].description}"
              </p>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest mt-3">
                PROJECT {selectedImageIndex + 1} OF {GALLERY_ITEMS.length} • COVERING BATH & WILTSHIRE
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
