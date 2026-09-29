import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import ParticleRingLoader from '../components/ParticleRingLoader';
import { categories, products } from '../data/products';
import { companyInfo } from '../data/company';

/**
 * Products page component — Editorial Medical Equipment Catalogue
 * 
 * Redesigned into a technical, architectural medical equipment catalogue
 * matching the FAB Medical Supplies Ltd. editorial design system.
 * 
 * Features:
 * - Part 01: Hero with controlled editorial asymmetry and dynamic inventory counters
 * - Part 02: Full-width editorial search field with technical query feedback
 * - Part 03: Structured Editorial Equipment Index (00-09) replacing rounded ecommerce pills
 * - Part 04: Organized editorial product grid with rhythmic variation and technical placeholders
 * - Part 05: In-place Technical Medical Equipment Sheet detail view with cross-linking
 * - Bottom Procurement Support strip with direct phone & WhatsApp communication
 */
export default function Products({ initialCategory = 'all', onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize category if prop changes externally
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filter products by category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categoryId === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.summary && product.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Current category metadata
  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);

  // If a product is selected, render the dedicated in-place Technical Equipment Sheet
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => {
          setSelectedProduct(null);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />
    );
  }

  return (
    <div className="bg-[#FAFCFE] min-h-screen text-[#0F172A]">
      {/* Luminous Particle Ring Page Transition Loader */}
      <ParticleRingLoader
        label="FAB MEDICAL SUPPLIES LTD."
        sublabel="Service That Exceeds"
        duration={12000}
      />

      {/* ========================================================
          PART 01: HERO SECTION — EDITORIAL ASYMMETRY
          ======================================================== */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* Subtle Background Technical Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="catalogue-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#21409A" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#catalogue-grid)" />
          </svg>
        </div>

        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Asymmetrical Editorial Heading & Premise */}
            <div className="lg:col-span-8 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-[#E11D48]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#21409A] uppercase">
                  EQUIPMENT CATALOGUE — UGANDA PROCUREMENT & SUPPLY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08] uppercase">
                Medical Equipment <br />
                <span className="text-[#21409A]">&amp; Clinical Supplies.</span>
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                FAB Medical Supplies Ltd. procures, supplies, delivers and services clinical machinery, 
                diagnostic analyzers, surgical instruments, and healthcare infrastructure for hospitals, 
                laboratories, and clinics across Uganda.
              </p>

              {/* Scope Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200">PROCUREMENT</span>
                <span className="text-slate-300">/</span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200">DIRECT SUPPLY</span>
                <span className="text-slate-300">/</span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200">DELIVERY &amp; INSTALLATION</span>
                <span className="text-slate-300">/</span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200">MAINTENANCE &amp; SERVICE</span>
              </div>
            </div>

            {/* Right Column: Technical Metadata & Dynamic Inventory Counters */}
            <div className="lg:col-span-4 border-l-2 border-[#21409A]/20 pl-6 lg:pl-8 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  CURRENT VERIFIED INVENTORY
                </span>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-mono">
                  {String(products.length).padStart(2, '0')}
                  <span className="text-xs font-mono font-bold text-[#E11D48] tracking-widest uppercase ml-2.5">
                    ITEMS
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Catalogued clinical equipment items across nationwide facilities.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  CLINICAL SPECIALTIES
                </span>
                <div className="text-3xl font-extrabold text-[#21409A] tracking-tight font-mono">
                  {String(categories.length).padStart(2, '0')}
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-widest uppercase ml-2.5">
                    DEPARTMENTS
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Covering radiology, intensive care, maternity, laboratory &amp; theatre.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">SUPPLY SCOPE:</span>
                  <span className="font-semibold text-[#0F172A]">NATIONWIDE UGANDA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">DISPATCH ORIGIN:</span>
                  <span className="font-semibold text-[#0F172A]">KAMPALA MEDICAL DESK</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          PART 02: SEARCH & PART 03: CATEGORY NAVIGATION
          ======================================================== */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <Container>
          {/* Part 02: Long Editorial Search Field */}
          <div className="pt-6 pb-4 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-grow max-w-3xl">
                <label htmlFor="catalogue-search" className="block text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] mb-2">
                  SEARCH EQUIPMENT BY NAME, SPECIFICATION OR CATEGORY
                </label>
                <div className="relative flex items-center">
                  <input
                    id="catalogue-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter equipment name (e.g. Ventilator, Ultrasound, Centrifuge, Autoclave)..."
                    className="w-full bg-[#FAFCFE] border-b-2 border-slate-300 focus:border-[#21409A] text-sm sm:text-base text-[#0F172A] placeholder-slate-400 py-3 pl-3 pr-10 focus:outline-none transition-colors font-sans"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 text-xs font-mono font-bold text-slate-400 hover:text-[#E11D48] transition-colors p-1"
                      aria-label="Clear search query"
                    >
                      ✕ CLEAR
                    </button>
                  ) : (
                    <svg
                      className="w-5 h-5 text-slate-400 absolute right-3 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Live Count Badge */}
              <div className="hidden md:flex flex-col items-end text-right font-mono">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">FILTERED RESULTS</span>
                <span className="text-xl font-bold text-[#0F172A]">
                  {String(filteredProducts.length).padStart(2, '0')}{' '}
                  <span className="text-xs text-slate-500 font-normal">/ {products.length}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Part 03: Editorial Equipment Index (00-09) replacing rounded pills */}
          <div className="py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                CLINICAL SPECIALTY INDEX
              </span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-[11px] font-mono font-bold text-[#E11D48] hover:underline flex items-center space-x-1"
                >
                  <span>RESET FILTERS</span>
                  <span aria-hidden="true">↺</span>
                </button>
              )}
            </div>

            {/* Horizontal Scrollable Index Bar */}
            <div
              role="group"
              aria-label="Filter equipment by clinical specialty"
              className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200"
            >
              {/* 00 — ALL EQUIPMENT */}
              <button
                type="button"
                aria-pressed={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
                className={`flex-shrink-0 px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center space-x-2 border ${
                  selectedCategory === 'all'
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#21409A] hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className={selectedCategory === 'all' ? 'text-[#E11D48] font-bold' : 'text-slate-400'}>
                  00
                </span>
                <span className="font-bold">ALL EQUIPMENT</span>
                <span className={`text-[10px] ${selectedCategory === 'all' ? 'text-slate-300' : 'text-slate-400'}`}>
                  ({products.length})
                </span>
              </button>

              {/* 01 through 09 Categories */}
              {categories.map((cat, idx) => {
                const count = products.filter((p) => p.categoryId === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                const indexFormatted = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-shrink-0 px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center space-x-2 border ${
                      isSelected
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                        : 'bg-white text-slate-700 hover:text-[#21409A] hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className={isSelected ? 'text-[#E11D48] font-bold' : 'text-slate-400'}>
                      {indexFormatted}
                    </span>
                    <span className="font-bold">{cat.shortName}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          PART 04: PRODUCT LIST (CATALOGUE FIELD — DESIGN B)
          ======================================================== */}
      <section className="py-12 lg:py-16">
        <Container>
          {/* Active Category Editorial Status Strip */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-slate-200 text-xs font-mono"
          >
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#21409A]" aria-hidden="true" />
              <span className="text-slate-400 uppercase tracking-wider">INDEX SCOPE:</span>
              <span className="font-bold text-[#0F172A] uppercase">
                {selectedCategory === 'all'
                  ? 'FULL CATALOGUE SPECIFICATION'
                  : activeCategoryObj?.name || selectedCategory}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[#21409A] font-bold">
                {filteredProducts.length} RECORD{filteredProducts.length === 1 ? '' : 'S'}
              </span>
              {searchQuery && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">QUERY: &ldquo;{searchQuery}&rdquo;</span>
                </>
              )}
            </div>

            <div className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
              TECHNICAL DATA SHEET AVAILABLE FOR EVERY ITEM
            </div>
          </div>

          {/* Product Grid / Catalogue Field */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  total={filteredProducts.length}
                  onSelect={(p) => {
                    setSelectedProduct(p);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                />
              ))}
            </div>
          ) : (
            /* No Results Technical Notice */
            <div className="p-12 lg:p-16 text-center bg-white border border-slate-200 max-w-2xl mx-auto space-y-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-slate-100 text-slate-400 font-mono text-xl">
                ✕
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wide">
                No Equipment Matching Selected Parameters
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                No catalogue records match &ldquo;{searchQuery}&rdquo; within the chosen department index.
                Try adjusting your search query or reset to view all verified inventory.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-[#21409A] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#1B3580] transition-colors"
                >
                  RESET TO ALL EQUIPMENT (54)
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ========================================================
          EDITORIAL PROCUREMENT SUPPORT & SOURCING STRIP
          ======================================================== */}
      <section className="bg-white border-t border-slate-200 py-16 lg:py-20">
        <Container>
          <div className="border border-slate-200 bg-[#FAFCFE] p-8 lg:p-12 relative overflow-hidden">
            {/* Top Registration Corner Marks */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E11D48]">
                  <span>CUSTOM MEDICAL PROCUREMENT</span>
                  <span>•</span>
                  <span>UNLISTED REAGENTS &amp; MACHINERY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">
                  Looking for Specialized Equipment Not Listed Here?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                  FAB Medical Supplies Ltd. works directly with international medical equipment manufacturers 
                  and certified reagent suppliers. If your clinical facility requires specialized machinery, 
                  custom hospital setups, or unlisted reagents, our procurement desk handles direct sourcing, 
                  importation, and local technical delivery.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={companyInfo.phones[0].link}
                  className="px-6 py-3.5 bg-[#21409A] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase text-center hover:bg-[#1B3580] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>CALL PROCUREMENT DESK</span>
                  <span>→</span>
                </a>
                <a
                  href={`https://wa.me/256704757991?text=${encodeURIComponent(
                    'Hello FAB Medical Supplies Ltd., I am looking for medical equipment not listed in your online catalogue and would like to speak with your procurement desk.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white border border-slate-300 text-[#0F172A] text-xs font-mono font-bold tracking-[0.2em] uppercase text-center hover:border-[#21409A] hover:text-[#21409A] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>WHATSAPP INQUIRY</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
