/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-brand-secondary hover:bg-brand-secondary/95 text-white rounded-full shadow-2xl relative group cursor-pointer transition-all active:scale-95"
        aria-label="Call SRJ Groundworks immediately"
      >
        {/* Pulsing back-rings to represent activity/telephone signal */}
        <span className="absolute inset-0 rounded-full bg-brand-secondary/40 animate-ping opacity-75"></span>
        <Phone className="w-6 h-6 text-brand-primary relative z-10" />
      </a>
    </div>
  );
}
