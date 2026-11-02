import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { products } from '../data/products';
import { getProductDetails } from '../data/productKnowledge';

/**
 * ProductDetail Component — Streamlined Swiss Architectural Medical Equipment Dossier
 * 
 * Refined Editorial Architecture:
 * - Part 01: Frameless equipment photography on pure white + unified technical specifications & quotation actions
 * - Part 02: Clinical & Engineering Dossier ("How the Equipment Works" + "Clinical Indications")
 * - Part 03: Related Clinical Inventory (3 synchronized hairline cards)
 * - Zero duplicated overview text, zero redundant card strips, zero rigid box traps
 */
export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const topHeadingRef = useRef(null);

  // Scroll to top, update document title, and focus heading on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (topHeadingRef.current) {
      topHeadingRef.current.focus();
    }
    const prevTitle = document.title;
    document.title = `${product.name} — Technical Equipment Sheet | FAB Medical Supplies Ltd.`;
    return () => {
      document.title = prevTitle;
    };
  }, [product]);

  // Load clinical knowledge for this equipment
  const details = getProductDetails(product);

  // Find 2-3 related products from the same category
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id && Boolean(p.image))
    .slice(0, 3);

  const refCode = `FAB-${product.id.toUpperCase()}`;
  const cleanCategory = product.categoryName?.split('(')[0]?.trim() || product.categoryName;

  // WhatsApp quotation inquiry URL pre-filled with product name and reference code
  const whatsappInquiryUrl = `https://wa.me/256704757991?text=${encodeURIComponent(
    `Hello FAB Medical Supplies Ltd., I am reaching out regarding formal procurement and specifications for the ${product.name} (Ref: ${refCode}).`
  )}`;

  return (
    <div className="bg-[#FAFCFE] min-h-screen text-[#0F172A] antialiased">
      {/* ========================================================
          TOP BREADCRUMB STRIP (ARCHITECTURAL LEDGER BAR)
          ======================================================== */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3 sm:py-3.5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 text-xs font-mono min-w-0">
            {/* Return Action */}
            <button
              type="button"
              onClick={onBack}
              className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1 cursor-pointer w-fit"
              aria-label="Back to equipment catalogue"
            >
              <span className="text-[#ED1C24] transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>BACK TO CATALOGUE</span>
            </button>

            {/* Breadcrumb Hierarchy */}
            <nav className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-500 min-w-0 max-w-full overflow-hidden" aria-label="Breadcrumb">
              <span className="uppercase truncate shrink min-w-0 max-w-[45%] sm:max-w-[220px]">
                {cleanCategory}
              </span>
              <span className="text-slate-300 shrink-0">/</span>
              <span className="text-[#0F172A] font-bold uppercase truncate shrink min-w-0 max-w-[50%] sm:max-w-[260px]">
                {product.name}
              </span>
            </nav>
          </div>
        </Container>
      </div>

      {/* ========================================================
          PART 01: THE MAIN STAGE
          (Frameless Photography + Unified Specifications & B2B Actions)
          ======================================================== */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-12 lg:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6-Col): High-Clarity Equipment Display */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative bg-[#FAFCFE] border border-slate-200 p-6 sm:p-10 flex items-center justify-center min-h-[320px] sm:min-h-[420px] aspect-[4/3] overflow-hidden select-none rounded-xs">
                {/* Technical Corner Pins */}
                <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-slate-300 select-none">+</div>

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    width="540"
                    height="405"
                    loading="eager"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-400 font-mono text-xs">
                    Official product photography on record
                  </div>
                )}

                {/* Technical Corner Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white px-2.5 py-1 border border-slate-200 text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                  KAMPALA CENTRAL STOCK
                </div>
              </div>

              {/* Technical Caption Bar */}
              <div className="px-1 text-[10px] sm:text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <span>REF CODE: <strong className="text-[#0F172A]">{refCode}</strong></span>
                <span className="uppercase text-slate-400">UGANDA HEALTHCARE SPECIFICATION</span>
              </div>
            </div>

            {/* Right Column (6-Col): Title, Summary, Unified Specs & Quotation Actions */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-3">
                {/* Department Eyebrow */}
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A]">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span>{cleanCategory}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-600 font-semibold">IN STOCK</span>
                </div>

                {/* Large Product Name */}
                <h1
                  tabIndex={-1}
                  ref={topHeadingRef}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0F172A] tracking-tight leading-tight focus:outline-none"
                >
                  {product.name}
                </h1>

                {/* Concise Clinical Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {product.summary || details.overview}
                </p>
              </div>

              {/* Unified Technical Specifications Table */}
              <div className="border border-slate-200 bg-white overflow-hidden rounded-xs shadow-xs">
                <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  <span>TECHNICAL SPECIFICATIONS</span>
                  <span>REF: {refCode}</span>
                </div>
                <table className="w-full text-left font-mono">
                  <tbody className="divide-y divide-slate-100">
                    {details.specifications && details.specifications.length > 0 ? (
                      details.specifications.map((spec, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? 'bg-[#FAFCFE]' : 'bg-white'}
                        >
                          <td className="py-2.5 px-3.5 font-bold text-[#21409A] uppercase tracking-wider w-5/12 text-xs align-top border-r border-slate-100">
                            {spec.label}
                          </td>
                          <td className="py-2.5 px-3.5 text-slate-800 text-xs leading-relaxed align-top">
                            {spec.value}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <>
                        <tr className="bg-[#FAFCFE]">
                          <td className="py-2.5 px-3.5 font-bold text-[#21409A] uppercase tracking-wider w-5/12 text-xs border-r border-slate-100">
                            Primary Application
                          </td>
                          <td className="py-2.5 px-3.5 text-slate-800 text-xs">
                            {details.application || details.productType}
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="py-2.5 px-3.5 font-bold text-[#21409A] uppercase tracking-wider w-5/12 text-xs border-r border-slate-100">
                            Clinical Scope
                          </td>
                          <td className="py-2.5 px-3.5 text-slate-800 text-xs">
                            {details.clinicalUse}
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {/* B2B Procurement Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary: WhatsApp B2B Quotation Button */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs flex-1 text-center rounded-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                  <span aria-hidden="true">→</span>
                </a>

                {/* Secondary: Formal Tender / Quotation Request Link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 text-center rounded-xs shadow-xs"
                >
                  <span>REQUEST FORMAL QUOTATION</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          PART 02: CLINICAL & ENGINEERING DOSSIER
          (How the Equipment Works + Clinical Indications & Use Cases)
          ======================================================== */}
      <section className="bg-[#F8FAFC] border-b border-slate-200 py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6-Col): How the Equipment Works (Operating Principle) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                  OPERATING PRINCIPLE
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  How the Equipment Works
                </h2>
              </div>
              
              <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-xs shadow-xs space-y-3">
                <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                  {details.howItWorks}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-[11px] font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>On-site clinical commissioning and biomedical user training provided.</span>
                </div>
              </div>
            </div>

            {/* Right Column (6-Col): Indications & Clinical Applications */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                  CLINICAL INDICATIONS
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  What It Is Used For
                </h2>
              </div>

              <div className="border border-slate-200 divide-y divide-slate-200 bg-white rounded-xs shadow-xs">
                {details.whatItIsUsedFor && details.whatItIsUsedFor.map((useCase, idx) => (
                  <div key={idx} className="py-3 px-4 flex items-start space-x-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="text-[#ED1C24] font-black font-mono text-xs mt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          PART 03: RELATED CLINICAL INVENTORY
          ======================================================== */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                  RELATED CLINICAL INVENTORY
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  More in {cleanCategory}
                </h2>
              </div>

              <button
                type="button"
                onClick={onBack}
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] hover:underline cursor-pointer"
              >
                <span>BACK TO ALL</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Horizontal Split Cards matching the refined ProductCard standard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {relatedProducts.map((relProduct) => (
                <article
                  key={relProduct.id}
                  onClick={() => {
                    if (onSelectProduct) {
                      onSelectProduct(relProduct);
                    }
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="group cursor-pointer bg-white border border-slate-200 hover:border-[#21409A] transition-all duration-200 p-3 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:shadow-sm rounded-xs"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-[#F8FAFC] border border-slate-100 p-2 flex items-center justify-center overflow-hidden rounded-xs">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      width="112"
                      height="112"
                      loading="lazy"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-grow flex flex-col justify-between min-w-0 h-full py-0.5 space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#21409A] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                        <span className="truncate">
                          {relProduct.categoryName?.split('(')[0]?.trim()}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0F172A] text-sm leading-snug tracking-tight group-hover:text-[#21409A] transition-colors line-clamp-2">
                        {relProduct.name}
                      </h3>
                    </div>

                    <div>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#21409A] group-hover:bg-[#1B3580] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors rounded-xs shadow-xs">
                        <span>VIEW SHEET</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
