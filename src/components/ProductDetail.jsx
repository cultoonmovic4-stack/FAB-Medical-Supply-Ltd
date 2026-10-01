import React, { useEffect, useRef } from 'react';
import Container from './Container';
import { companyInfo } from '../data/company';
import { products } from '../data/products';
import fabLogoImg from '../assets/fab-logo.png';

/**
 * ProductDetail component — Redesigned into Technical Medical Equipment Sheet
 * 
 * Features:
 * - Technical blueprint / equipment documentation layout
 * - Large architectural typography for product title
 * - Subtle technical construction lines and crosshairs
 * - Direct editorial inquiry actions (Phone, WhatsApp)
 * - Related equipment section using editorial catalogue items
 * - Authentic FAB branding and quality signature
 */
export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const topHeadingRef = useRef(null);

  useEffect(() => {
    if (topHeadingRef.current) {
      topHeadingRef.current.focus();
    }
  }, [product]);

  const whatsappUrl = `https://wa.me/256704757991?text=${encodeURIComponent(
    `Hello FAB Medical Supplies Ltd., I am inquiring about the ${product.name} (Ref: FAB-${product.id.slice(0, 8).toUpperCase()}) listed in your equipment catalogue.`
  )}`;

  // Find related products from the same category (excluding current item)
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const refCode = `FAB-${product.id.toUpperCase()}`;

  return (
    <div className="bg-[#FAFCFE] min-h-screen">
      {/* Editorial Navigation & Breadcrumb Strip */}
      <div className="bg-white border-b border-slate-200 py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            {/* Return Action */}
            <button
              onClick={onBack}
              className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A] hover:text-[#21409A] transition-colors py-1"
              aria-label="Return to product catalogue"
            >
              <span className="text-[#E11D48] font-bold transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>RETURN TO CATALOGUE INDEX</span>
            </button>

            {/* Breadcrumb Hierarchy */}
            <nav className="flex items-center space-x-2 text-slate-400" aria-label="Breadcrumb">
              <span>CATALOGUE</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600 uppercase truncate max-w-[200px]">{product.categoryName}</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#21409A] font-bold uppercase truncate max-w-[220px]">
                {product.name}
              </span>
            </nav>
          </div>
        </Container>
      </div>

      {/* Main Technical Equipment Sheet Content */}
      <div className="py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* ======================================================== */}
            {/* LEFT / CENTER COLUMN: Dominant Technical Image (Col 6)  */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 space-y-4">
              {/* Technical Drawing Blueprint Frame */}
              <div className="relative bg-white border border-slate-200 p-8 sm:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.03)] overflow-hidden">
                {/* SVG Blueprint Construction Guidelines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                  viewBox="0 0 500 400"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line x1="50" y1="20" x2="50" y2="380" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="450" y1="20" x2="450" y2="380" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="20" y1="50" x2="480" y2="50" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="20" y1="350" x2="480" y2="350" stroke="#F1F5F9" strokeWidth="1" />
                  <circle cx="250" cy="200" r="140" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Technical Corner Registration Marks */}
                <div className="absolute top-2.5 left-3 text-xs font-mono text-slate-300 select-none">+</div>
                <div className="absolute top-2.5 right-3 text-xs font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2.5 left-3 text-xs font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2.5 right-3 text-xs font-mono text-slate-300 select-none">+</div>

                {/* Top Blueprint Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48]" aria-hidden="true" />
                    <span className="text-[#0F172A] font-bold tracking-wider">REF: {refCode}</span>
                  </div>
                  <span className="tracking-widest uppercase">TECHNICAL SPECIFICATION SHEET</span>
                </div>

                {/* Main Visual */}
                <div className="relative z-10 aspect-[4/3] flex items-center justify-center p-4">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain block"
                    />
                  ) : (
                    /* Precision Technical Equipment Blueprint Graphic */
                    <div
                      role="img"
                      aria-label={`Photograph placeholder for ${product.name}: Photograph to be supplied by FAB`}
                      className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[#FAFCFE] border border-dashed border-slate-200"
                    >
                      <svg
                        className="w-20 h-20 text-slate-300 mb-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="2" x2="12" y2="22" strokeWidth="0.8" />
                        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="0.8" />
                      </svg>
                      <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#0F172A] block">
                        Product Photograph to be Supplied
                      </span>
                      <span className="text-xs font-mono text-slate-400 mt-1 block max-w-sm">
                        Official high-resolution photography pending owner verification and supply.
                      </span>
                      <div className="mt-4 px-3 py-1 bg-white border border-slate-200 rounded-[2px] text-[10px] font-mono text-[#21409A] font-bold uppercase tracking-widest">
                        FAB VERIFIED SPECIFICATION
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Blueprint Bar */}
                <div className="relative z-10 pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>SCALE: 1:1 REVISED</span>
                  <span>STATUS: AVAILABLE FOR PROCUREMENT</span>
                </div>
              </div>

              {/* Verified Authentic Source Note */}
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between px-1">
                <span>FAB MEDICAL SUPPLIES LTD. • KAMPALA</span>
                <span>ORIGIN: IMPORTATION &amp; PROCUREMENT</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Information, Specs & Direct Inquiry (Col 6) */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 space-y-8">
              {/* Header: Category & Dominant Product Name */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]">
                    {product.categoryName}
                  </span>
                </div>

                <h1
                  tabIndex={-1}
                  ref={topHeadingRef}
                  className="text-3xl sm:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-[#0F172A] leading-[1.08] focus:outline-none"
                >
                  {product.name}
                </h1>

                {/* Reference String */}
                <div className="text-xs font-mono text-slate-400 tracking-wider">
                  CATALOGUE REFERENCE: <strong className="text-slate-700">{refCode}</strong>
                </div>
              </div>

              {/* Verified Product Summary / Description */}
              <div className="p-6 bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#21409A] block">
                  EQUIPMENT OVERVIEW
                </span>
                {product.summary ? (
                  <p className="text-sm sm:text-base text-[#0F172A] font-medium leading-relaxed">
                    {product.summary}
                  </p>
                ) : (
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    This medical equipment is procured and supplied by FAB Medical Supplies Ltd. for hospitals, clinics, laboratories, and specialized clinical departments across Uganda.
                  </p>
                )}
              </div>

              {/* Technical Specifications Area */}
              <div className="p-6 bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                    TECHNICAL SPECIFICATIONS
                  </h2>
                  <span className="text-[10px] font-mono text-[#21409A] font-semibold">
                    [CONFIRMATION ON QUOTE]
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Detailed technical data sheets, electrical voltage tolerances, dimensions, clinical accessories, and operational documentation for this equipment are confirmed directly with our procurement team based on your clinical facility requirements.
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  <strong>SOURCE STATUS:</strong> Specifications verified directly against manufacturer importation documentation.
                </div>
              </div>

              {/* Supply & Servicing Scope Notice */}
              <div className="p-4 bg-[#F2F6FA] border-l-2 border-[#21409A] text-xs space-y-1.5 text-slate-600">
                <p>
                  <strong className="text-[#0F172A] font-bold">Supply Scope:</strong> FAB Medical Supplies Ltd. operates as a certified procurement and importation supply partner in Uganda. We do not manufacture medical equipment.
                </p>
                <p>
                  <strong className="text-[#0F172A] font-bold">Maintenance &amp; Support:</strong> Comprehensive delivery, servicing, and repair support are provided for all equipment procured through FAB.
                </p>
              </div>

              {/* Direct Inquiry Action Block */}
              <div className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-5">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E11D48] font-bold mb-1">
                    INTERESTED IN THIS EQUIPMENT?
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0F172A]">
                    INQUIRE ABOUT THIS EQUIPMENT →
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Contact our Kampala equipment desk to confirm availability, delivery timeline, and quotation:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-1">
                  {/* Phone Call Button */}
                  <a
                    href={companyInfo.phones[0].link}
                    className="inline-flex items-center justify-center px-5 py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] transition-colors shadow-sm min-h-[44px] w-full sm:w-auto text-center"
                    aria-label={`Call about ${product.name}: ${companyInfo.phones[0].number}`}
                  >
                    Call: {companyInfo.phones[0].number}
                  </a>

                  {/* WhatsApp Inquiry Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 bg-[#21409A] hover:bg-[#1A337A] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] transition-colors shadow-sm min-h-[44px] w-full sm:w-auto text-center"
                    aria-label={`Inquire about ${product.name} on WhatsApp (opens in new window)`}
                  >
                    Inquire on WhatsApp →
                  </a>

                  {/* Return to Catalogue */}
                  <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex items-center justify-center px-5 py-3.5 border border-slate-300 hover:border-[#21409A] text-slate-700 hover:text-[#21409A] text-xs font-mono font-bold uppercase tracking-[0.16em] transition-colors min-h-[44px] w-full sm:w-auto text-center"
                  >
                    Return to Catalogue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RELATED EQUIPMENT SECTION                                */}
          {/* ======================================================== */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] mb-1">
                    <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                    <span>RELATED CATEGORY EQUIPMENT</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0F172A]">
                    MORE IN {product.categoryName}
                  </h2>
                </div>
                <button
                  onClick={onBack}
                  className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:underline"
                >
                  <span>VIEW ALL</span>
                  <span>→</span>
                </button>
              </div>

              {/* Related Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct, idx) => (
                  <div
                    key={relProduct.id}
                    onClick={() => {
                      if (onSelectProduct) {
                        onSelectProduct(relProduct);
                      }
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="group cursor-pointer bg-white border border-slate-200 p-5 hover:border-[#21409A] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="text-[#21409A] font-bold">REF: FAB-{relProduct.id.slice(0, 8).toUpperCase()}</span>
                        <span>0{idx + 1}</span>
                      </div>
                      <h3 className="font-bold text-[#0F172A] text-base leading-snug group-hover:text-[#21409A] transition-colors">
                        {relProduct.name}
                      </h3>
                      {relProduct.summary && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {relProduct.summary}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#0F172A] group-hover:text-[#21409A]">
                      <span>VIEW DETAILS</span>
                      <span className="text-[#E11D48] ml-2 font-bold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Brand Signature */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img src={fabLogoImg} alt="FAB Medical Supplies Ltd." className="h-6 w-auto object-contain" />
              <div className="h-4 w-[1px] bg-slate-300" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#21409A]">
                QUALITY SUPPLIERS. HEALTHIER TOMORROWS.
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
              FAB MEDICAL SUPPLIES LTD. • EQUIPMENT SPECIFICATION SHEET
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
