import React from 'react';
import Container from './Container';
import { companyInfo } from '../data/company';

/**
 * Footer component - Option C: Modern Grid with Visual Elements
 * Approved design with 4 distinct areas:
 * 1. Brand / Company
 * 2. Get In Touch (prominent phone numbers)
 * 3. Navigation
 * 4. Editorial Brand Statement (with subtle topographic visual element)
 * Bottom: Thin divider and copyright/legal strip.
 */
export default function Footer({ onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'who-we-serve', label: 'Who We Serve' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#08182D] text-white border-t border-[#162B45] mt-auto relative overflow-hidden" role="contentinfo">
      <Container className="py-12 lg:py-16">
        {/* Four-Column Modern Grid (Option C) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 items-start">
          {/* 1. BRAND / COMPANY */}
          <div className="lg:col-span-4 lg:pr-10 space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-9 h-9 rounded-md bg-brand-blue flex items-center justify-center text-white font-black text-sm tracking-wider flex-shrink-0 shadow-sm"
                aria-hidden="true"
              >
                FAB
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {companyInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Procurement, importation, and supply of medical equipment, instruments, and reagents in Uganda.
            </p>

            <div className="flex items-center space-x-2.5 pt-1">
              <span className="w-5 h-[2px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm italic text-slate-300 font-normal">
                Service That Exceeds
              </span>
            </div>
          </div>

          {/* 2. GET IN TOUCH */}
          <div className="lg:col-span-3 lg:px-8 lg:border-l lg:border-[#162B45] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              GET IN TOUCH
            </h3>

            <div className="space-y-3.5">
              {/* Primary Phone */}
              <div>
                <a
                  href="tel:0786062191"
                  className="text-base sm:text-lg font-bold text-white hover:text-brand-red transition-colors inline-block tracking-wide"
                  aria-label="Call primary phone: 0786 062 191"
                >
                  0786 062 191
                </a>
                <span className="block text-[11px] text-slate-400 font-medium">
                  Primary Phone
                </span>
              </div>

              {/* WhatsApp & Phone */}
              <div>
                <a
                  href="https://wa.me/256704757991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-white hover:text-brand-red transition-colors inline-block tracking-wide"
                  aria-label="WhatsApp or call: 0704 757 991 (opens WhatsApp)"
                >
                  0704 757 991
                </a>
                <span className="block text-[11px] text-slate-400 font-medium">
                  WhatsApp &amp; Phone
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-2 pt-1 text-slate-300">
                <svg
                  className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-xs text-slate-300 leading-relaxed">
                  Emka House, Bombo Road,<br />
                  Ground Floor, Shop G01,<br />
                  Kampala, Uganda
                </address>
              </div>
            </div>
          </div>

          {/* 3. NAVIGATION */}
          <div className="lg:col-span-2 lg:px-8 lg:border-l lg:border-[#162B45] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              NAVIGATION
            </h3>

            <nav aria-label="Footer Navigation">
              <ul className="space-y-2 text-sm text-slate-300">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate(item.id)}
                      className="hover:text-white transition-colors focus:outline-none focus:underline py-0.5 flex items-center text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 4. EDITORIAL BRAND STATEMENT */}
          <div className="lg:col-span-3 lg:pl-8 lg:border-l lg:border-[#162B45] relative flex flex-col justify-center min-h-[140px]">
            {/* Subtle Topographic Terrain Visual Element */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none" aria-hidden="true">
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M -20 180 Q 80 130 160 110 T 320 80" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
                <path d="M -10 160 Q 90 100 190 70 T 320 40" stroke="#38BDF8" strokeWidth="0.8" opacity="0.3" />
                <path d="M 0 140 Q 120 70 210 50 T 320 20" stroke="#38BDF8" strokeWidth="0.8" opacity="0.25" />
                <path d="M 20 190 Q 140 140 230 120 T 320 90" stroke="#38BDF8" strokeWidth="0.7" opacity="0.35" />
                <path d="M 60 195 Q 160 150 250 135 T 320 115" stroke="#38BDF8" strokeWidth="0.6" opacity="0.3" />
                {/* Elevation cross ridges */}
                <path d="M 120 60 L 170 190" stroke="#38BDF8" strokeWidth="0.6" opacity="0.15" />
                <path d="M 190 40 L 230 180" stroke="#38BDF8" strokeWidth="0.6" opacity="0.15" />
                <path d="M 240 30 L 270 170" stroke="#38BDF8" strokeWidth="0.6" opacity="0.15" />
              </svg>
            </div>

            <div className="relative z-10 space-y-3">
              <span className="w-8 h-[3px] bg-brand-red rounded-full block" aria-hidden="true" />
              <p className="text-base sm:text-lg font-medium text-white leading-snug max-w-xs">
                Quality medical supplies<br />
                for a healthier Uganda.
              </p>
            </div>
          </div>
        </div>

        {/* Thin Divider & Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[#162B45] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 {companyInfo.name} All rights reserved.</p>
          <p className="text-slate-400 font-normal">
            Medical Equipment Procurement &amp; Supply — Uganda
          </p>
        </div>
      </Container>
    </footer>
  );
}
