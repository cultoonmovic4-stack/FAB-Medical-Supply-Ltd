import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { companyInfo } from '../data/company';

/**
 * Editorial + Technical Footer Component — FAB Medical Supplies Ltd.
 * 
 * Distinctive, asymmetric editorial architecture:
 * - Deep navy foundation (#071322) with architectural oversized cropped FAB watermark
 * - Top technical metadata strip (equipment, procurement, supply, Kampala coordinates)
 * - Large primary editorial brand statement: EQUIPPING HEALTHCARE. SUPPORTING BETTER CARE.
 * - Prominent "TALK TO FAB" contact zone with oversized clickable phone numbers & red marker
 * - Compact "VISIT FAB" physical location details
 * - Compact "EXPLORE" navigation linking to canonical routes
 * - Concise company procurement scope statement
 * - Subtle technical linework, numerical section markers (// 01, // 02, // 03)
 * - Restrained bottom legal strip
 */
export default function Footer({ onNavigate }) {
  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'products', path: '/products', label: 'Products' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'who-we-serve', path: '/who-we-serve', label: 'Who We Serve' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <footer
      className="bg-[#071322] text-white border-t border-[#13263F] mt-auto relative overflow-hidden select-none"
      role="contentinfo"
    >
      {/* 1. Oversized Architectural FAB Watermark (Partially cropped by footer boundary) */}
      <div
        className="absolute -right-8 -bottom-14 lg:-bottom-20 pointer-events-none select-none text-[180px] sm:text-[240px] lg:text-[340px] xl:text-[400px] font-black tracking-tighter text-white/[0.025] leading-none"
        aria-hidden="true"
      >
        FAB
      </div>

      {/* 2. Top Technical Metadata Strip */}
      <div className="border-b border-[#13263F]/90 bg-[#050E1B]/60">
        <Container className="py-3">
          <div className="flex flex-wrap items-center justify-between gap-y-2 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-slate-400">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] inline-block animate-pulse" aria-hidden="true" />
              <span className="text-slate-300 font-bold">FAB MEDICAL SUPPLIES LTD.</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-slate-400">
              <span className="hidden md:inline">MEDICAL EQUIPMENT</span>
              <span className="hidden md:inline">•</span>
              <span>PROCUREMENT &amp; SUPPLY</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-slate-300">UGANDA</span>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Main Asymmetric Editorial Body */}
      <Container className="py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-start">
          
          {/* LEFT & CENTER-LEFT AREA: Dominant Brand Statement & Company Mandate */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Editorial Statement Label */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-5 h-[2px] bg-[#ED1C24] flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
                  MISSION STATEMENT
                </span>
              </div>

              {/* Large, Bold Editorial Typography */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight text-white uppercase leading-[1.05]">
                  EQUIPPING <br />
                  <span className="text-slate-200">HEALTHCARE.</span>
                </h2>
                <div className="pt-2 text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.65rem] font-extrabold tracking-tight text-slate-300 uppercase leading-[1.08] pl-3 sm:pl-5 border-l-2 border-[#ED1C24]/80 mt-2">
                  SUPPORTING <br />
                  <span className="text-[#38BDF8]">BETTER CARE.</span>
                </div>
              </div>
            </div>

            {/* Concise Company Scope Description */}
            <div className="pt-2 max-w-lg border-t border-[#13263F] space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Procurement, importation, and supply of medical equipment, instruments, and reagents in Uganda.
              </p>
              <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span className="tracking-wider italic text-slate-300">Service That Exceeds</span>
              </div>
            </div>

          </div>

          {/* RIGHT AREA: "TALK TO FAB" Contact Section (Visually Prominent) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-6 xl:pl-8 lg:border-l lg:border-[#13263F]">
            
            {/* Contact Information Area */}
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <span className="w-5 h-[2px] bg-[#ED1C24]" aria-hidden="true" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-white">
                  TALK TO FAB
                </h3>
                <span className="text-[10px] font-mono text-slate-400 ml-auto tracking-widest">// 01</span>
              </div>

              <div className="space-y-6">
                {/* Primary Phone */}
                <div className="pb-5 border-b border-[#13263F]/90">
                  <a
                    href="tel:0786062191"
                    className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold font-mono text-white hover:text-[#ED1C24] transition-colors tracking-tight block leading-tight"
                    aria-label="Call primary phone: 0786 062 191"
                  >
                    0786 062 191
                  </a>
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1 block">
                    PRIMARY PHONE
                  </span>
                </div>

                {/* WhatsApp & Phone */}
                <div className="pb-1">
                  <a
                    href="https://wa.me/256704757991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold font-mono text-white hover:text-[#ED1C24] transition-colors tracking-tight block leading-tight"
                    aria-label="WhatsApp or call: 0704 757 991"
                  >
                    0704 757 991
                  </a>
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1 block">
                    WHATSAPP &amp; PHONE
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. LOWER INFORMATION ROW: Physical Location + Navigation */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-[#13263F] grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Location Area: VISIT FAB */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-[1.5px] bg-[#38BDF8]" aria-hidden="true" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-200">
                VISIT FAB
              </h4>
              <span className="text-[10px] font-mono text-slate-400 ml-1">// 02</span>
            </div>
            
            <address className="not-italic text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pl-4 border-l border-slate-700/80">
              Emka House, Bombo Road,<br />
              Ground Floor, Shop G01,<br />
              Kampala, Uganda
            </address>
          </div>

          {/* Navigation Area: EXPLORE */}
          <div className="md:col-span-7 space-y-3 md:pl-6 lg:pl-10 md:border-l md:border-[#13263F]">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-[1.5px] bg-[#ED1C24]" aria-hidden="true" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-200">
                EXPLORE
              </h4>
              <span className="text-[10px] font-mono text-slate-400 ml-1">// 03</span>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-all duration-150 inline-flex items-center group py-0.5"
                    >
                      <span className="text-[#ED1C24] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs mr-1 font-bold">
                        →
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* 5. Bottom Legal Strip */}
        <div className="mt-12 pt-6 border-t border-[#13263F]/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3">
          <p>© 2026 {companyInfo.name} All rights reserved.</p>
          <p className="text-slate-400 font-normal">
            Medical Equipment Procurement &amp; Supply — Uganda
          </p>
        </div>
      </Container>
    </footer>
  );
}
