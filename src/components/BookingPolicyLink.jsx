import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

export default function BookingPolicyLink({ className = '', compact = false }) {
  return (
    <a
      href="/Aryan_Valley_Camp_Brochure_final.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-warm-brown/20 bg-warm-brown px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-warm-brown/90 hover:shadow-md ${className}`}
    >
      <FileText size={compact ? 14 : 16} className="shrink-0" />
      <span className={compact ? 'text-[11px]' : ''}>Booking & Cancellation Policy</span>
      <ExternalLink size={compact ? 12 : 14} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}
