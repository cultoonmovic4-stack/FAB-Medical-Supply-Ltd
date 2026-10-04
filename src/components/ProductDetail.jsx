import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import { products } from '../data/products';
import { getProductDetails } from '../data/productKnowledge';

/**
 * ProductDetail Component — Design 1 Core Visual Direction
 * 
 * Clean, premium, professional medical-equipment catalogue interface:
 * - SECTION 1: Product Header (Spacious two-column layout with gallery & key facts)
 * - SECTION 2: Product Overview (Overview, How It Works, What It Is Used For)
 * - SECTION 3: Key Features (Subtle 2-4 column grid with understated icons)
 * - SECTION 4: Technical Specifications (Organized table/list layout)
 * - SECTION 5: Related Category Equipment (Restrained horizontal cards)
 * 
 * Restrained: No large CTA banners, no "Request a Quote", no repetitive supply/maintenance sections.
 */
export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const topHeadingRef = useRef(null);

  // Scroll to top and focus heading on product change
  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (topHeadingRef.current) {
      topHeadingRef.current.focus();
    }
  }, [product]);

  // Load clinical knowledge for this equipment
  const details = getProductDetails(product);

  // Image gallery: main client photograph plus alternate simulated clinical perspectives
  const gallery = [
    { label: 'Primary View', url: product.image, angle: 'System Overview' },
    { label: 'Gantry / Interface', url: product.image, angle: 'Operational Angle' },
    { label: 'Patient Support', url: product.image, angle: 'Component View' },
  ];

  // Find 2-3 related products from the same category
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id && Boolean(p.image))
    .slice(0, 3);

  const refCode = `FAB-${product.id.toUpperCase()}`;

  // Understated SVG icons for Key Features
  const renderFeatureIcon = (iconName) => {
    const iconProps = {
      className: 'w-4 h-4 text-[#21409A]',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      strokeWidth: 2,
      'aria-hidden': 'true',
    };

    switch (iconName) {
      case 'scan':
      case 'probe':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H5a2 2 0 01-2-2v-2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'shield':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'refresh':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'network':
      case 'database':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case 'monitor':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'pulse':
      case 'activity':
      case 'wave':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'bell':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
      case 'battery':
      case 'cpu':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-[#FAFCFE] min-h-screen text-[#0F172A] antialiased">
      {/* ========================================================
          TOP BREADCRUMB STRIP (DESIGN 1 SPECIFICATION)
          ======================================================== */}
      <div className="bg-white border-b border-slate-200/90 py-3 sm:py-3.5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 text-xs font-mono min-w-0">
            {/* Return Action */}
            <button
              onClick={onBack}
              className="group inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 hover:text-[#21409A] transition-colors py-1 cursor-pointer w-fit"
              aria-label="Back to equipment catalogue"
            >
              <span className="text-[#21409A] transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>BACK TO CATALOGUE</span>
            </button>

            {/* Breadcrumb Hierarchy */}
            <nav className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-400 min-w-0 max-w-full overflow-hidden" aria-label="Breadcrumb">
              <span className="text-slate-500 uppercase truncate shrink min-w-0 max-w-[45%] sm:max-w-[220px]">
                {product.categoryName}
              </span>
              <span className="text-slate-300 shrink-0">/</span>
              <span className="text-[#0F172A] font-bold uppercase truncate shrink min-w-0 max-w-[50%] sm:max-w-[260px]">
                {product.name}
              </span>
            </nav>
          </div>
        </Container>
      </div>

      <div className="py-6 sm:py-12 lg:py-16">
        <Container>
          {/* ========================================================
              SECTION 1: PRODUCT HEADER (TWO-COLUMN DESIGN 1 LAYOUT)
              ======================================================== */}
          <section className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)] mb-8 sm:mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Product Photography & Thumbnail Gallery */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main Product Image Frame */}
                <div className="relative bg-[#FAFCFE] border border-slate-200/90 rounded-lg p-4 sm:p-10 flex items-center justify-center min-h-[260px] sm:min-h-[340px] aspect-[4/3] overflow-hidden select-none">
                  {product.image ? (
                    <img
                      src={gallery[activeImageIndex]?.url || product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-all duration-300"
                      width="540"
                      height="405"
                      decoding="async"
                    />
                  ) : (
                    <div className="text-center p-6 text-slate-400 font-mono text-xs">
                      Official product photography on record
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery Underneath (Design 1) */}
                {product.image && (
                  <div className="flex items-center space-x-2 sm:space-x-3 pt-1 overflow-x-auto pb-1">
                    {gallery.map((thumb, idx) => {
                      const isSelected = activeImageIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-16 h-14 sm:w-24 sm:h-18 p-1 sm:p-1.5 shrink-0 bg-[#FAFCFE] rounded border transition-all cursor-pointer overflow-hidden ${
                            isSelected
                              ? 'border-[#21409A] ring-2 ring-[#21409A]/20 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100'
                          }`}
                          aria-label={`View ${thumb.angle}`}
                        >
                          <img
                            src={thumb.url}
                            alt=""
                            className="w-full h-full object-contain"
                            width="96"
                            height="72"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Model / Reference Tag */}
                <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-1">
                  <span>REF: <strong className="text-slate-700">{refCode}</strong></span>
                  <span className="uppercase text-slate-400">UGANDA HEALTHCARE PROCUREMENT</span>
                </div>
              </div>

              {/* Right Column: Title, Description & Key-Information Area */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <div>
                  {/* Category Eyebrow with Red Accent (Aligned to Cap-Height) */}
                  <div className="flex items-start gap-2.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#21409A] mb-3">
                    <span className="w-4 sm:w-5 h-[2px] bg-[#ED1C24] shrink-0 mt-1.5" aria-hidden="true" />
                    <span className="leading-snug">{product.categoryName}</span>
                  </div>

                  {/* Large Product Name with Balanced Line Wrapping */}
                  <h1
                    tabIndex={-1}
                    ref={topHeadingRef}
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-snug uppercase focus:outline-none break-words [text-wrap:balance]"
                  >
                    {product.name}
                  </h1>

                  {/* One Concise Professional Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal mt-3 sm:mt-4 [text-wrap:pretty]">
                    {product.summary || details.overview}
                  </p>
                </div>

                {/* Compact Key-Information Area (Structured Clinical Spec Matrix) */}
                <div className="border-t border-slate-200/80 pt-5 sm:pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                    {/* 1. Ref Code */}
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-lg p-3 sm:p-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        REF CODE
                      </span>
                      <span className="font-mono font-bold text-xs text-[#0F172A] tracking-wide">
                        {refCode}
                      </span>
                    </div>

                    {/* 2. Availability */}
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-lg p-3 sm:p-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        AVAILABILITY
                      </span>
                      <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold text-[#21409A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#21409A] animate-pulse" aria-hidden="true" />
                        <span>Available for procurement</span>
                      </span>
                    </div>

                    {/* 3. Product Type */}
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-lg p-3 sm:p-3.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        PRODUCT TYPE
                      </span>
                      <span className="text-xs font-semibold text-slate-800 leading-snug block [text-wrap:pretty]">
                        {details.productType}
                      </span>
                    </div>

                    {/* 4. Clinical Use */}
                    <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-lg p-3 sm:p-3.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        CLINICAL USE
                      </span>
                      <span className="text-xs font-semibold text-slate-800 leading-snug block [text-wrap:pretty]">
                        {details.clinicalUse}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 2: PRODUCT INFORMATION (PRODUCT OVERVIEW)
              ======================================================== */}
          <section className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)] mb-8 sm:mb-12 lg:mb-16">
            <div className="border-b border-slate-100 pb-3 sm:pb-4 mb-6 sm:mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                CLINICAL DOCUMENTATION
              </span>
              <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#0F172A]">
                Product Overview
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Subsection 1: Overview */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] mb-2">
                  01. Overview
                </h3>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                  {details.overview}
                </p>
              </div>

              {/* Subsection 2: How It Works */}
              <div className="pt-5 sm:pt-6 border-t border-slate-100">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] mb-2">
                  02. How It Works
                </h3>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                  {details.howItWorks}
                </p>
              </div>

              {/* Subsection 3: What It Is Used For */}
              <div className="pt-5 sm:pt-6 border-t border-slate-100">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] mb-3">
                  03. What It Is Used For
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                  {details.whatItIsUsedFor.map((useCase, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#21409A] mt-1.5 sm:mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 3: KEY FEATURES
              ======================================================== */}
          <section className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)] mb-8 sm:mb-12 lg:mb-16">
            <div className="border-b border-slate-100 pb-3 sm:pb-4 mb-6 sm:mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                SYSTEM CAPABILITIES
              </span>
              <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#0F172A]">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {details.features.map((feature, idx) => (
                <div key={idx} className="space-y-2 sm:space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-center">
                    {renderFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 4: TECHNICAL SPECIFICATIONS (TABLE LAYOUT)
              ======================================================== */}
          <section className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)] mb-8 sm:mb-12 lg:mb-16">
            <div className="border-b border-slate-100 pb-3 sm:pb-4 mb-5 sm:mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                VERIFIED SPECIFICATION TABLE
              </span>
              <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#0F172A]">
                Technical Specifications
              </h2>
            </div>

            <div className="overflow-hidden border border-slate-200/90 rounded-lg">
              <table className="w-full text-left font-mono">
                <tbody className="divide-y divide-slate-100">
                  {details.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-[#FAFCFE]' : 'bg-white'}
                    >
                      <td className="py-3 sm:py-3.5 px-3 sm:px-6 font-bold text-[#21409A] uppercase tracking-wider w-5/12 sm:w-1/3 text-[11px] sm:text-xs align-top border-r border-slate-100 sm:border-slate-200/60 break-words">
                        {spec.label}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-6 text-slate-800 text-[11px] sm:text-xs leading-relaxed align-top break-words">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3.5 sm:mt-4 text-[10px] sm:text-[11px] font-mono text-slate-400">
              Technical specifications verified against importation documentation. Detailed technical data sheets confirmed directly on quotation.
            </div>
          </section>

          {/* ========================================================
              SECTION 5: RELATED CATEGORY EQUIPMENT
              ======================================================== */}
          {relatedProducts.length > 0 && (
            <section className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4 mb-6 sm:mb-8">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] mb-1">
                    <span className="w-4 h-[2px] bg-[#ED1C24]" aria-hidden="true" />
                    <span>RELATED CATEGORY</span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#0F172A]">
                    More in {product.categoryName}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={onBack}
                  className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] hover:underline cursor-pointer"
                >
                  <span>VIEW ALL</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {/* Simple Horizontal Product Cards (Design 1) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((relProduct) => (
                  <article
                    key={relProduct.id}
                    onClick={() => {
                      if (onSelectProduct) {
                        onSelectProduct(relProduct);
                      }
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="group cursor-pointer bg-[#FAFCFE] border border-slate-200 rounded-lg p-4 sm:p-5 hover:border-[#21409A] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Thumbnail */}
                      <div className="w-full aspect-[4/3] bg-white rounded border border-slate-100 p-3 sm:p-4 flex items-center justify-center overflow-hidden mb-3 sm:mb-4">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          width="240"
                          height="180"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="font-bold text-[#0F172A] text-xs sm:text-sm leading-snug group-hover:text-[#21409A] transition-colors mb-1 sm:mb-1.5 break-words">
                        {relProduct.name}
                      </h3>

                      {relProduct.summary && (
                        <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                          {relProduct.summary}
                        </p>
                      )}
                    </div>

                    <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-slate-200/80 flex items-center text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#21409A]">
                      <span>VIEW DETAILS</span>
                      <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

        </Container>
      </div>
    </div>
  );
}
