import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { companyInfo } from '../data/company';

/**
 * Editorial + Modular Footer Component — FAB Medical Supplies Ltd.
 * 
 * - Desktop (lg+): Broadsheet editorial layout with concise mission statement, 
 *   prominent contact section, and canonical navigation. (FAB watermark removed).
 * - Mobile (<lg): Clean, single-column modular stack inspired by modern industrial/medical
 *   standards: About block, Quick Links (>), Clinical Specialties (>), Working Hours, 
 *   and direct tap-to-call/WhatsApp action cards.
 */
export default function Footer({ onNavigate }) {
  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'products', path: '/products', label: 'Products' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'who-we-serve', path: '/who-we-serve', label: 'Who We Serve' },
    { id: 'contact', path: '/contact', label: 'Contact Us' },
  ];

  const clinicalSpecialties = [
    { name: 'Radiology & Diagnostic Imaging', path: '/products' },
    { name: 'Emergency & Critical Care (ICU)', path: '/products' },
    { name: 'Operating Theatre & Anaesthesia', path: '/products' },
    { name: 'Laboratory & Pathology Reagents', path: '/products' },
    { name: 'General Hospital Ward Furniture', path: '/products' },
  ];

  return (
    <footer
      className="bg-[#071322] text-white border-t border-[#13263F] mt-auto relative overflow-hidden select-none"
      role="contentinfo"
    >
      {/* 1. Top Technical Metadata Strip */}
      <div className="border-b border-[#13263F]/90 bg-[#050E1B]/60">
        <Container className="py-3">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-400">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] inline-block" aria-hidden="true" />
              <span className="text-slate-200 font-bold tracking-normal sm:tracking-wider">FAB MEDICAL SUPPLIES LTD.</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-400">
              <span className="hidden sm:inline">MEDICAL EQUIPMENT &amp; SUPPLIES</span>
              <span className="text-slate-300 font-bold">KAMPALA, UGANDA</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14 lg:py-18 relative z-10">
        
        {/* ========================================================
            DESKTOP & TABLET VIEW (lg and up)
            Broadsheet Editorial Layout (No Watermark, Reduced Copy)
            ======================================================== */}
        <div className="hidden lg:block space-y-14">
          <div className="grid grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Area: Mission Statement & Company Mandate */}
            <div className="col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2.5 mb-4">
                  <span className="w-5 h-[2px] bg-[#ED1C24] flex-shrink-0" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
                    MISSION STATEMENT
                  </span>
                </div>

                <h2 className="text-3xl xl:text-[2.65rem] font-black tracking-tight text-white uppercase leading-[1.08]">
                  EQUIPPING HEALTHCARE. <br />
                  <span className="text-slate-200">SUPPORTING BETTER CARE.</span>
                </h2>
              </div>

              <div className="pt-2 max-w-lg border-t border-[#13263F] space-y-2">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Procurement, importation, and supply of certified medical equipment, surgical instruments, and clinical reagents in Uganda.
                </p>
                <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span className="tracking-wider text-slate-300 font-medium">Service That Exceeds</span>
                </div>
              </div>
            </div>

            {/* Right Area: Contact Section */}
            <div className="col-span-5 flex flex-col justify-between space-y-6 pl-6 xl:pl-8 border-l border-[#13263F]">
              <div>
                <div className="flex items-center space-x-2.5 mb-6">
                  <span className="w-5 h-[2px] bg-[#ED1C24]" aria-hidden="true" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-white">
                    TALK TO FAB
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 ml-auto tracking-widest">// 01</span>
                </div>

                <div className="space-y-5">
                  {/* Primary Phone */}
                  <div className="pb-4 border-b border-[#13263F]/90">
                    <a
                      href="tel:0786062191"
                      className="text-2xl xl:text-[2rem] font-bold font-mono text-white hover:text-[#ED1C24] transition-colors tracking-tight block leading-tight"
                      aria-label="Call primary phone: 0786 062 191"
                    >
                      0786 062 191
                    </a>
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1 block">
                      PRIMARY PHONE
                    </span>
                  </div>

                  {/* WhatsApp & Phone */}
                  <div>
                    <a
                      href="https://wa.me/256704757991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl xl:text-[2rem] font-bold font-mono text-white hover:text-[#ED1C24] transition-colors tracking-tight block leading-tight"
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

          {/* Lower Information Row: Location + Navigation */}
          <div className="pt-8 border-t border-[#13263F] grid grid-cols-12 gap-10">
            {/* Location Area */}
            <div className="col-span-5 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
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

            {/* Navigation Area */}
            <div className="col-span-7 space-y-3 pl-6 lg:pl-10 border-l border-[#13263F]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-[1.5px] bg-[#ED1C24]" aria-hidden="true" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-200">
                  EXPLORE
                </h4>
                <span className="text-[10px] font-mono text-slate-400 ml-1">// 03</span>
              </div>
              <nav aria-label="Footer Desktop Navigation">
                <ul className="grid grid-cols-3 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
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
        </div>

        {/* ========================================================
            MOBILE ONLY (< lg): Modular Single-Column Inspiration Stack
            No text-breaking, balanced typography, clear sections
            ======================================================== */}
        <div className="block lg:hidden space-y-7">
          
          {/* 1. ABOUT FAB MEDICAL */}
          <div className="space-y-3">
            <h3 className="text-base font-black font-mono tracking-wide text-white uppercase">
              ABOUT FAB MEDICAL
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Procurement, importation, and nationwide supply of certified medical equipment, surgical instruments, and clinical laboratory reagents across Uganda.
            </p>
            
            {/* Social / Direct Action Icon Buttons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://wa.me/256704757991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#102238] border border-[#1B355A] hover:bg-[#21409A] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp FAB Medical"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.637-.677-2.735-2.327-2.818-2.436-.082-.109-.675-.898-.675-1.71 0-.813.424-1.213.576-1.378.144-.156.326-.195.434-.195.109 0 .218.001.313.006.103.005.239-.039.375.287.144.343.489 1.192.532 1.28.043.088.072.191.014.306-.058.115-.088.187-.175.289-.088.102-.185.228-.264.306-.088.088-.18.184-.078.36.103.175.457.754.981 1.221.675.602 1.244.788 1.42.875.174.088.277.073.38-.044.103-.117.443-.516.562-.693.118-.175.238-.146.398-.088.16.059 1.015.479 1.189.566.174.088.291.131.334.204.043.073.043.424-.101.829z"/>
                </svg>
              </a>
              <a
                href="tel:0786062191"
                className="w-10 h-10 rounded-lg bg-[#102238] border border-[#1B355A] hover:bg-[#21409A] text-white flex items-center justify-center transition-colors"
                aria-label="Call FAB Medical"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-lg bg-[#102238] border border-[#1B355A] hover:bg-[#21409A] text-white flex items-center justify-center transition-colors"
                aria-label="View Location on Contact Page"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="space-y-3 pt-4 border-t border-[#13263F]">
            <h3 className="text-base font-black font-mono tracking-wide text-white uppercase">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center space-x-2.5 text-slate-300 hover:text-white py-1 transition-colors group"
                  >
                    <span className="text-slate-400 font-bold text-sm leading-none" aria-hidden="true">&gt;</span>
                    <span className="text-sm font-medium tracking-normal group-hover:translate-x-0.5 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CLINICAL SPECIALTIES */}
          <div className="space-y-3 pt-4 border-t border-[#13263F]">
            <h3 className="text-base font-black font-mono tracking-wide text-white uppercase">
              OUR SPECIALTIES
            </h3>
            <ul className="space-y-2.5">
              {clinicalSpecialties.map((spec, i) => (
                <li key={i}>
                  <Link
                    to={spec.path}
                    className="inline-flex items-center space-x-2.5 text-slate-300 hover:text-white py-1 transition-colors group"
                  >
                    <span className="text-slate-400 font-bold text-sm leading-none" aria-hidden="true">&gt;</span>
                    <span className="text-sm font-medium tracking-normal group-hover:translate-x-0.5 transition-transform">
                      {spec.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. WORKING HOURS */}
          <div className="space-y-3 pt-4 border-t border-[#13263F]">
            <h3 className="text-base font-black font-mono tracking-wide text-white uppercase">
              WORKING HOURS
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-[#13263F]/50">
                <span className="text-slate-400">Monday – Friday</span>
                <span className="font-bold text-white font-mono">8:00 AM – 5:30 PM</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-[#13263F]/50">
                <span className="text-slate-400">Saturday</span>
                <span className="font-bold text-white font-mono">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Sunday</span>
                <span className="font-bold text-slate-200 font-mono">Emergency On-Call</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider block mb-0.5">LOCATION:</span>
              <span>Emka House, Bombo Road, Shop G01, Kampala, Uganda</span>
            </div>
          </div>

          {/* 5. DIRECT CALL / INQUIRY CARDS (Inspiration Match) */}
          <div className="space-y-3 pt-4 border-t border-[#13263F]">
            {/* Primary Hotline Card */}
            <a
              href="tel:0786062191"
              className="flex items-center space-x-3.5 p-3.5 rounded-lg bg-[#0C1E34] border border-[#1A365D] hover:border-slate-500 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-[#21409A] flex items-center justify-center flex-shrink-0 text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Direct Supply Hotline
                </span>
                <span className="text-base font-bold font-mono text-white tracking-tight block">
                  +256 786 062 191
                </span>
              </div>
            </a>

            {/* WhatsApp Direct Card */}
            <a
              href="https://wa.me/256704757991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 p-3.5 rounded-lg bg-[#0C1E34] border border-[#1A365D] hover:border-slate-500 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.637-.677-2.735-2.327-2.818-2.436-.082-.109-.675-.898-.675-1.71 0-.813.424-1.213.576-1.378.144-.156.326-.195.434-.195.109 0 .218.001.313.006.103.005.239-.039.375.287.144.343.489 1.192.532 1.28.043.088.072.191.014.306-.058.115-.088.187-.175.289-.088.102-.185.228-.264.306-.088.088-.18.184-.078.36.103.175.457.754.981 1.221.675.602 1.244.788 1.42.875.174.088.277.073.38-.044.103-.117.443-.516.562-.693.118-.175.238-.146.398-.088.16.059 1.015.479 1.189.566.174.088.291.131.334.204.043.073.043.424-.101.829z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  WhatsApp Direct Inquiry
                </span>
                <span className="text-base font-bold font-mono text-white tracking-tight block">
                  +256 704 757 991
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* 6. Bottom Legal Strip */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#13263F]/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3 text-center sm:text-left">
          <p>© 2026 {companyInfo.name} All rights reserved.</p>
          <p className="text-slate-400 font-normal">
            Medical Equipment Procurement &amp; Supply — Uganda
          </p>
        </div>

      </Container>
    </footer>
  );
}
