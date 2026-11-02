import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Container from '../components/Container';
import CustomDropdown from '../components/CustomDropdown';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import NotFound from './NotFound';
import { categories, products } from '../data/products';
import { categoryMetadata } from '../config/seo';
import heroEquipmentPhoto from '../assets/products-hero-equipment.webp';

export default function Products({ onNavigate }) {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [applicationFilter, setApplicationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(true);

  // Sync selectedProduct from ?product= query param (e.g., when navigating from HomeHero) or reset on category route change
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const matched = products.find((p) => p.id === productParam);
      if (matched) {
        setSelectedProduct(matched);
        return;
      }
    }
    setSelectedProduct(null);
  }, [categoryId, searchParams]);

  // Keep search input in sync if cleared from external action
  useEffect(() => {
    if (!searchQuery) setSearchInput('');
  }, [searchQuery]);

  // If a categoryId is present in URL, verify against the 9 authoritative categories
  const activeCategoryObj = categoryId
    ? categories.find((c) => c.id === categoryId)
    : null;

  // Invalid category handling: render site NotFound experience if categoryId is not one of the 9 valid IDs
  if (categoryId && !activeCategoryObj) {
    return <NotFound />;
  }

  const selectedCategory = categoryId || 'all';
  const isCategoryPage = Boolean(categoryId && activeCategoryObj);
  const categorySeoData = isCategoryPage ? categoryMetadata[categoryId] : null;

  // Active products with authentic client equipment photography only (products missing images are excluded)
  const activeProducts = products.filter((product) => Boolean(product.image));

  // Application category matching
  const matchesApplication = (product) => {
    if (applicationFilter === 'all') return true;
    const cat = product.categoryId;
    const name = product.name.toLowerCase();
    if (applicationFilter === 'diagnostic') {
      return (
        cat === 'radiology-imaging' ||
        name.includes('scanner') ||
        name.includes('ultrasound') ||
        name.includes('doppler') ||
        name.includes('x-ray') ||
        name.includes('analyzer') ||
        name.includes('ecg')
      );
    }
    if (applicationFilter === 'critical-care') {
      return (
        cat === 'emergency-icu' ||
        name.includes('monitor') ||
        name.includes('oxygen') ||
        name.includes('concentrator') ||
        name.includes('ventilator') ||
        name.includes('vital')
      );
    }
    if (applicationFilter === 'theatre') {
      return (
        cat === 'theatre-room' ||
        name.includes('operating') ||
        name.includes('surgical') ||
        name.includes('anesthesia') ||
        name.includes('electrosurgical') ||
        name.includes('endoscope')
      );
    }
    if (applicationFilter === 'laboratory') {
      return (
        cat === 'laboratory' ||
        name.includes('centrifuge') ||
        name.includes('microscope') ||
        name.includes('autoclave') ||
        name.includes('biosafety')
      );
    }
    if (applicationFilter === 'furniture') {
      return (
        cat === 'hospital-furniture' ||
        cat === 'opd-consultation' ||
        name.includes('couch') ||
        name.includes('bed') ||
        name.includes('wheelchair') ||
        name.includes('locker') ||
        name.includes('trolley')
      );
    }
    return true;
  };

  // Filter products by category, search term, and application
  const filteredProducts = activeProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categoryId === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.summary && product.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch && matchesApplication(product);
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    if (sortBy === 'category') {
      return a.categoryName.localeCompare(b.categoryName);
    }
    return 0;
  });

  const handleCategoryChange = (targetCat) => {
    const newCat = typeof targetCat === 'string' ? targetCat : targetCat?.target?.value;
    if (!newCat || newCat === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${newCat}`);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSearchInput('');
    setApplicationFilter('all');
    setSortBy('default');
    if (categoryId) {
      navigate('/products');
    }
  };

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0) +
    (applicationFilter !== 'all' ? 1 : 0) +
    (sortBy !== 'default' ? 1 : 0);

  // Dropdown options for custom mobile-optimized menus
  const sortOptions = [
    { value: 'default', label: 'Default Order ⇅' },
    { value: 'name-asc', label: 'Name (A — Z) ⇅' },
    { value: 'name-desc', label: 'Name (Z — A) ⇅' },
    { value: 'category', label: 'Department ⇅' },
  ];

  const specialtyOptions = [
    { value: 'all', label: `All Specialties (${activeProducts.length})` },
    ...categories.map((cat, idx) => {
      const count = activeProducts.filter((p) => p.categoryId === cat.id).length;
      const indexFormatted = String(idx + 1).padStart(2, '0');
      return {
        value: cat.id,
        label: `${indexFormatted} ${cat.shortName} (${count})`,
      };
    }),
  ];

  const applicationOptions = [
    { value: 'all', label: 'All Applications' },
    { value: 'diagnostic', label: 'Diagnostic & Imaging' },
    { value: 'critical-care', label: 'Critical Care & ICU' },
    { value: 'theatre', label: 'Surgical & Theatre' },
    { value: 'laboratory', label: 'Laboratory & Diagnostics' },
    { value: 'furniture', label: 'Hospital Ward & Furniture' },
  ];

  // If a product is selected, render the dedicated in-place Technical Equipment Sheet
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => {
          setSelectedProduct(null);
          if (searchParams.has('product')) {
            const nextParams = new URLSearchParams(searchParams);
            nextParams.delete('product');
            setSearchParams(nextParams);
          }
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          const nextParams = new URLSearchParams(searchParams);
          nextParams.set('product', p.id);
          setSearchParams(nextParams);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />
    );
  }

  return (
    <div className="bg-[#FAFCFE] min-h-screen text-[#0F172A]">
      {/* ========================================================
          PART 01: HERO SECTION — CENTERED EDITORIAL + FEATHERED HORIZON (1A)
          ======================================================== */}
      <section
        className="relative bg-white border-b border-slate-200 pt-14 sm:pt-18 pb-0 overflow-hidden"
        aria-labelledby="products-hero-heading"
      >
        <Container>
          <div
            className="max-w-3xl mx-auto text-center space-y-4"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>
                {isCategoryPage
                  ? `CLINICAL INDEX / ${activeCategoryObj.shortName.toUpperCase()}`
                  : 'EQUIPMENT CATALOGUE • UGANDA'}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="products-hero-heading"
              className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]"
            >
              {isCategoryPage ? (
                categorySeoData?.h1 || activeCategoryObj.name
              ) : (
                <>
                  Medical Equipment <br />
                  <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
                </>
              )}
            </h1>

            {/* Concise Supporting Line */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              {isCategoryPage
                ? categorySeoData?.intro
                : 'Certified clinical diagnostic systems, surgical apparatus, and hospital infrastructure supplied across Uganda.'}
            </p>

            {/* Clean Hairline Micro-Ledger */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2 text-xs font-mono text-slate-500">
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-[#0F172A]">{sortedProducts.length}</span>
                <span className="uppercase text-[11px] text-slate-500">
                  {sortedProducts.length === 1 ? 'VERIFIED UNIT' : 'VERIFIED UNITS'}
                </span>
              </div>
              <span className="text-[#ED1C24]" aria-hidden="true">&bull;</span>
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-[#21409A]">09</span>
                <span className="uppercase text-[11px] text-slate-500">DEPARTMENTS</span>
              </div>
              <span className="text-[#ED1C24]" aria-hidden="true">&bull;</span>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                <span className="uppercase text-[11px] text-slate-700 font-semibold">KAMPALA CENTRAL STOCK</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Feathered equipment panorama — dissolves seamlessly into the page */}
        <div className="relative mt-8 h-[240px] sm:h-[320px] lg:h-[360px] select-none">
          <img
            src={heroEquipmentPhoto}
            alt="Clinical diagnostic monitors, vital signs meters, and medical documentation on calibration desk"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden="true" />
        </div>
      </section>

      {/* ========================================================
          PART 02: ARCHITECTURAL FILTER CONSOLE (Concept 2A)
          ======================================================== */}
      <section className="bg-white border-b border-slate-200 py-6 relative z-20">
        <Container>
          <div className="space-y-4">
            {/* Top Control Bar: Live Search Input + Secondary Controls (Application & Sort) */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              {/* Search input with live debounced / responsive filtering */}
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearchQuery(e.target.value);
                  }}
                  placeholder="Search equipment by name, department, or technical specification..."
                  className="w-full bg-[#FAFCFE] border border-slate-300 focus:border-[#21409A] focus:bg-white text-[#0F172A] text-sm rounded-xs pl-10 pr-10 py-3 focus:outline-none transition-all placeholder:text-slate-400 font-sans"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setSearchQuery('');
                    }}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono font-bold text-slate-400 hover:text-[#ED1C24] transition-colors cursor-pointer"
                    aria-label="Clear search input"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Secondary Controls: Application Filter & Sort Selector */}
              <div className="grid grid-cols-2 md:flex md:items-center gap-2.5 sm:gap-3 flex-shrink-0">
                <div className="w-full md:w-52 flex-shrink-0">
                  <CustomDropdown
                    options={applicationOptions}
                    value={applicationFilter}
                    onChange={(val) => setApplicationFilter(val)}
                    isActive={applicationFilter !== 'all'}
                    buttonClassName="py-3 rounded-xs border-slate-300"
                  />
                </div>

                <div className="w-full md:w-48 flex-shrink-0">
                  <CustomDropdown
                    options={sortOptions}
                    value={sortBy}
                    onChange={(val) => setSortBy(val)}
                    buttonClassName="py-3 rounded-xs border-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Open 1-Click Horizontal Department Track */}
            <div className="pt-2 border-t border-slate-100 overflow-x-auto scrollbar-none">
              <div className="flex items-center space-x-1 sm:space-x-2 min-w-max pb-1" role="tablist" aria-label="Clinical Departments">
                <button
                  type="button"
                  onClick={() => handleCategoryChange('all')}
                  className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-1.5 cursor-pointer rounded-xs border-b-2 ${
                    selectedCategory === 'all'
                      ? 'border-[#ED1C24] text-[#21409A] bg-blue-50/70'
                      : 'border-transparent text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                  }`}
                >
                  <span>ALL DEPARTMENTS</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                    selectedCategory === 'all' ? 'bg-[#21409A] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {activeProducts.length}
                  </span>
                </button>

                {categories.map((cat, idx) => {
                  const count = activeProducts.filter((p) => p.categoryId === cat.id).length;
                  const isSelected = selectedCategory === cat.id;
                  const numFormatted = String(idx + 1).padStart(2, '0');

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-1.5 cursor-pointer rounded-xs border-b-2 ${
                        isSelected
                          ? 'border-[#ED1C24] text-[#21409A] bg-blue-50/70'
                          : 'border-transparent text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                      }`}
                    >
                      <span className={isSelected ? 'text-[#ED1C24]' : 'text-slate-400'}>{numFormatted}</span>
                      <span>{cat.shortName}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                        isSelected ? 'bg-[#21409A] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status Ledger & Reset Filters */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>
                  SHOWING <strong className="text-[#0F172A] font-bold">{sortedProducts.length}</strong> OF{' '}
                  <strong className="text-[#0F172A] font-bold">{activeProducts.length}</strong> VERIFIED RECORDS
                </span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#21409A] font-semibold text-[11px]">
                    <span>DEPT: {activeCategoryObj?.shortName || selectedCategory}</span>
                    <button
                      type="button"
                      onClick={() => navigate('/products')}
                      className="text-slate-400 hover:text-[#ED1C24] ml-1 cursor-pointer"
                      aria-label="Clear department filter"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {applicationFilter !== 'all' && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-[11px]">
                    <span>APP: {applicationOptions.find((o) => o.value === applicationFilter)?.label || applicationFilter}</span>
                    <button
                      type="button"
                      onClick={() => setApplicationFilter('all')}
                      className="text-slate-400 hover:text-[#ED1C24] ml-1 cursor-pointer"
                      aria-label="Clear application filter"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-[11px]">
                    <span>QUERY: &ldquo;{searchQuery}&rdquo;</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchInput('');
                        setSearchQuery('');
                      }}
                      className="text-slate-400 hover:text-[#ED1C24] ml-1 cursor-pointer"
                      aria-label="Clear search query"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="self-end sm:self-auto px-3.5 py-1.5 bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#0F172A] text-xs font-mono font-bold tracking-wider uppercase rounded-xs transition-all flex items-center space-x-1.5 shadow-xs cursor-pointer"
                >
                  <span aria-hidden="true">↺</span>
                  <span>RESET FILTERS</span>
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          PART 04: PRODUCT LIST (CATALOGUE FIELD — ARCHITECTURAL LEDGER)
          ======================================================== */}
      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          {/* Active Category Editorial Status Strip */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 sm:mb-10 border-b border-slate-300 text-xs font-mono"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span className="text-slate-400 uppercase tracking-wider text-[11px]">CATALOGUE INDEX:</span>
              <span className="font-bold text-[#0F172A] uppercase">
                {selectedCategory === 'all'
                  ? 'VERIFIED CLINICAL INVENTORY'
                  : activeCategoryObj?.name || selectedCategory}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[#21409A] font-bold">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'RECORD' : 'RECORDS'}
              </span>
              {searchQuery && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">QUERY: &ldquo;{searchQuery}&rdquo;</span>
                </>
              )}
            </div>

            <div className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
              TECHNICAL DATA SHEET &amp; WARRANTY INCLUDED
            </div>
          </div>

          {/* Product Grid / Catalogue Field */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 items-stretch">
              {sortedProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  total={sortedProducts.length}
                  onSelect={(p) => {
                    setSelectedProduct(p);
                    const nextParams = new URLSearchParams(searchParams);
                    nextParams.set('product', p.id);
                    setSearchParams(nextParams);
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
                  onClick={handleResetFilters}
                  className="inline-block px-6 py-2.5 bg-[#21409A] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#1B3580] transition-colors"
                >
                  RESET TO ALL EQUIPMENT ({activeProducts.length})
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
