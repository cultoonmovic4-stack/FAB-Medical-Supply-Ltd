import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import CustomDropdown from '../components/CustomDropdown';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import LogoLoader from '../components/LogoLoader';
import NotFound from './NotFound';
import { categories, products } from '../data/products';
import { companyInfo } from '../data/company';
import { categoryMetadata } from '../config/seo';
import customProcurementEquipmentWebp from '../assets/custom-procurement-equipment.webp';
import customProcurementEquipmentJpg from '../assets/custom-procurement-equipment.jpg';

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
export default function Products({ onNavigate }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [applicationFilter, setApplicationFilter] = useState('all');
  const [supplyFilter, setSupplyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(true);

  // Reset selected product when category route changes
  useEffect(() => {
    setSelectedProduct(null);
  }, [categoryId]);

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

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    if (newCat === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${newCat}`);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSearchInput('');
    setApplicationFilter('all');
    setSupplyFilter('all');
    setSortBy('default');
    if (categoryId) {
      navigate('/products');
    }
  };

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0) +
    (applicationFilter !== 'all' ? 1 : 0) +
    (supplyFilter !== 'all' ? 1 : 0) +
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

  const supplyOptions = [
    { value: 'all', label: 'All Procurement Channels' },
    { value: 'kampala', label: 'Kampala Central Dispatch' },
    { value: 'factory', label: 'Direct Manufacturer Supply' },
    { value: 'turnkey', label: 'Turnkey Facility Equipping' },
  ];

  const catalogueOrderOptions = [
    { value: 'default', label: 'Default Index Order' },
    { value: 'name-asc', label: 'Alphabetical (A — Z)' },
    { value: 'name-desc', label: 'Alphabetical (Z — A)' },
    { value: 'category', label: 'Department Grouping' },
  ];

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
      {/* Clean Professional Logo Loader (matching Home page) */}
      <LogoLoader duration={6000} />

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
            <div
              className="lg:col-span-8 space-y-6"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-[#E11D48]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#21409A] uppercase">
                  {isCategoryPage
                    ? `CLINICAL INDEX — ${activeCategoryObj.shortName.toUpperCase()}`
                    : 'EQUIPMENT CATALOGUE — UGANDA PROCUREMENT & SUPPLY'}
                </span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08] uppercase">
                {isCategoryPage ? (
                  categorySeoData?.h1 || activeCategoryObj.name
                ) : (
                  <>
                    Medical Equipment <br />
                    <span className="text-[#21409A]">&amp; Clinical Supplies.</span>
                  </>
                )}
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {isCategoryPage
                  ? categorySeoData?.intro
                  : 'FAB Medical Supplies Ltd. procures, supplies, delivers and services clinical machinery, diagnostic analyzers, surgical instruments, and healthcare infrastructure for hospitals, laboratories, and clinics across Uganda.'}
              </p>
            </div>

            {/* Right Column: Technical Metadata & Dynamic Inventory Counters */}
            <div
              className="lg:col-span-4 border-l-2 border-[#21409A]/20 pl-6 lg:pl-8 space-y-6"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  {isCategoryPage ? 'DEPARTMENT INVENTORY' : 'CURRENT VERIFIED INVENTORY'}
                </span>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-mono">
                  {String(sortedProducts.length).padStart(2, '0')}
                  <span className="text-xs font-mono font-bold text-[#E11D48] tracking-widest uppercase ml-2.5">
                    ITEMS
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {isCategoryPage
                    ? `Catalogued ${activeCategoryObj.shortName.toLowerCase()} equipment records.`
                    : 'Catalogued clinical equipment items across nationwide facilities.'}
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
          PART 02: INSPiRED DROPDOWN FILTER CONSOLE (IMAGE TWO INSPIRATION)
          ======================================================== */}
      <section className="bg-[#FAFCFE] border-b border-slate-200 py-6 sm:py-8 relative z-20">
        <Container>
          {/* Clean Editorial Filter Console Card matching FAB Medical Brand Colors */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(33,64,154,0.05)]">
            {/* Top Row: Search Input, Search Button, Filters Toggle & Sort Selector */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(searchInput);
              }}
              className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
            >
              {/* Search input with magnifying glass */}
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  placeholder="Search equipment by name, category, or specification..."
                  className="w-full bg-[#FAFCFE] border border-slate-200 focus:border-[#21409A] focus:bg-white text-[#0F172A] text-sm rounded-lg pl-11 pr-10 py-3 focus:outline-none transition-all placeholder:text-slate-400 font-sans shadow-sm"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setSearchQuery('');
                    }}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono font-bold text-slate-400 hover:text-[#ED1C24] transition-colors"
                    aria-label="Clear search input"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Search Button (Red accent matching Image Two) */}
              <button
                type="submit"
                className="bg-[#ED1C24] hover:bg-[#D91B24] active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all shadow-md flex items-center justify-center space-x-1.5 flex-shrink-0"
              >
                <span>SEARCH</span>
              </button>

              {/* FILTERS toggle button */}
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border text-xs font-mono font-bold uppercase tracking-wider transition-all flex-shrink-0 ${
                  showFilters
                    ? 'bg-blue-50/70 border-[#21409A] text-[#21409A] shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <svg className="w-4 h-4 text-[#21409A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span>FILTERS</span>
                {activeFiltersCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                )}
              </button>

              {/* Sort Selector */}
              <div className="w-full md:w-48 flex-shrink-0">
                <CustomDropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={(val) => setSortBy(val)}
                  buttonClassName="py-3"
                />
              </div>
            </form>

            {/* Middle Row: Dropdown Filters with Fade-in-down animation */}
            {showFilters && (
              <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-down">
                {/* 1. CLINICAL SPECIALTY */}
                <CustomDropdown
                  label={
                    <span className="flex items-center space-x-1.5 text-[11px] font-mono font-bold tracking-wider text-[#21409A] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                      <span>CLINICAL SPECIALTY</span>
                    </span>
                  }
                  options={specialtyOptions}
                  value={selectedCategory}
                  onChange={(val) => handleCategoryChange({ target: { value: val } })}
                  isActive={selectedCategory !== 'all'}
                />

                {/* 2. EQUIPMENT APPLICATION */}
                <CustomDropdown
                  label={
                    <span className="flex items-center space-x-1.5 text-[11px] font-mono font-bold tracking-wider text-[#21409A] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                      <span>EQUIPMENT APPLICATION</span>
                    </span>
                  }
                  options={applicationOptions}
                  value={applicationFilter}
                  onChange={(val) => setApplicationFilter(val)}
                  isActive={applicationFilter !== 'all'}
                />

                {/* 3. SUPPLY & PROCUREMENT */}
                <CustomDropdown
                  label={
                    <span className="flex items-center space-x-1.5 text-[11px] font-mono font-bold tracking-wider text-[#21409A] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                      <span>SUPPLY &amp; PROCUREMENT</span>
                    </span>
                  }
                  options={supplyOptions}
                  value={supplyFilter}
                  onChange={(val) => setSupplyFilter(val)}
                  isActive={supplyFilter !== 'all'}
                />

                {/* 4. CATALOGUE ORDER */}
                <CustomDropdown
                  label={
                    <span className="flex items-center space-x-1.5 text-[11px] font-mono font-bold tracking-wider text-[#21409A] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                      <span>CATALOGUE ORDER</span>
                    </span>
                  }
                  options={catalogueOrderOptions}
                  value={sortBy}
                  onChange={(val) => setSortBy(val)}
                  isActive={sortBy !== 'default'}
                />
              </div>
            )}

            {/* Bottom Row: Results Counter & RESET FILTERS Action (Matching Image Two) */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                <span>
                  SHOWING <strong className="text-[#0F172A] font-bold">{sortedProducts.length}</strong> OF{' '}
                  <strong className="text-[#0F172A] font-bold">{activeProducts.length}</strong> VERIFIED RECORDS
                </span>
                {selectedCategory !== 'all' && (
                  <span className="text-[#21409A] font-semibold ml-1">
                    ({activeCategoryObj?.shortName || selectedCategory})
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                className="self-end sm:self-auto px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#0F172A] text-xs font-mono font-bold tracking-wider uppercase rounded-lg transition-all flex items-center space-x-2 shadow-sm"
              >
                <span aria-hidden="true">↺</span>
                <span>RESET FILTERS</span>
              </button>
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
                {sortedProducts.length} RECORD{sortedProducts.length === 1 ? '' : 'S'}
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
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {sortedProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  total={sortedProducts.length}
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

      {/* ========================================================
          PART 05: CUSTOM PROCUREMENT (DESIGN 3 EDITORIAL COMPOSITION)
          ======================================================== */}
      <section
        className="relative bg-white border-t border-slate-200 overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20"
        aria-labelledby="custom-procurement-heading"
      >
        <Container className="max-w-7xl">
          {/* Main Grid: Editorial Typography & Content Left, Clinical Photography & Side Detail Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left / Upper Column (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8" data-aos="fade-right" data-aos-duration="850">
              
              {/* Section Marker: 04 — CUSTOM PROCUREMENT */}
              <div className="flex items-center space-x-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#21409A]">04</span>
                <span className="w-5 h-[2px] bg-[#E11D48]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.24em] text-[#0F172A] uppercase">
                  CUSTOM PROCUREMENT
                </span>
              </div>

              {/* Dominant Editorial Headline */}
              <h2
                id="custom-procurement-heading"
                className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase leading-[0.96] tracking-tight"
              >
                <span className="text-[#0F172A] block">CAN&apos;T FIND</span>
                <span className="text-[#21409A] block mt-1">WHAT YOU NEED?</span>
              </h2>

              {/* Mobile-only Photography placement (stacks right after headline on mobile as requested) */}
              <div className="block lg:hidden my-6">
                <div className="relative rounded-sm overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm">
                  <picture>
                    <source srcSet={customProcurementEquipmentWebp} type="image/webp" />
                    <img
                      src={customProcurementEquipmentJpg}
                      alt="Specialized ICU and hospital clinical equipment for custom medical procurement"
                      className="w-full h-auto object-cover max-h-[320px]"
                      width="1280"
                      height="720"
                      loading="lazy"
                    />
                  </picture>
                  {/* Subtle technical overlay badge on mobile image */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 border border-slate-200 text-right">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-none">
                      GLOBAL ACCESS.
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-none mt-0.5">
                      LOCAL DELIVERY.
                    </span>
                    <span className="w-4 h-[1.5px] bg-[#E11D48] block ml-auto mt-1" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Procurement Capabilities Strip */}
              <div className="pt-2 pb-1">
                <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-4 sm:gap-0 sm:divide-x divide-slate-200 border-y border-slate-200/90 py-3 sm:py-3.5">
                  
                  {/* 01: SPECIALIZED EQUIPMENT */}
                  <div className="flex items-center space-x-2.5 sm:pr-5 w-full sm:w-auto">
                    <div className="w-7 h-7 rounded bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0F172A] block leading-tight">
                        SPECIALIZED EQUIPMENT
                      </span>
                    </div>
                  </div>

                  {/* 02: CUSTOM MACHINERY */}
                  <div className="flex items-center space-x-2.5 sm:px-5 w-full sm:w-auto">
                    <div className="w-7 h-7 rounded bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0F172A] block leading-tight">
                        CUSTOM MACHINERY
                      </span>
                    </div>
                  </div>

                  {/* 03: UNLISTED REAGENTS */}
                  <div className="flex items-center space-x-2.5 sm:pl-5 w-full sm:w-auto">
                    <div className="w-7 h-7 rounded bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0F172A] block leading-tight">
                        UNLISTED REAGENTS
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                FAB Medical Supplies Ltd. works directly with international medical equipment manufacturers 
                and certified reagent suppliers. If your clinical facility requires specialized machinery, 
                custom hospital setups, or unlisted reagents, our procurement desk handles direct sourcing, 
                importation, and local technical delivery.
              </p>

              {/* Contact Actions (Lower Portion) */}
              <div className="pt-3 border-t border-slate-200/90">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Phone Action */}
                  <div className="space-y-2 group">
                    <a
                      href={companyInfo.phones[0].link}
                      className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                    >
                      <span>CALL PROCUREMENT DESK</span>
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </a>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] group-hover:bg-[#21409A] group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href={companyInfo.phones[0].link}
                          className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-none"
                        >
                          {companyInfo.phones[0].number}
                        </a>
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mt-1">
                          Primary Phone
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="space-y-2 group">
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am reaching out to the Custom Procurement desk regarding specialized equipment or reagents not listed in your online catalogue.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                    >
                      <span>WHATSAPP INQUIRY</span>
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </a>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] group-hover:bg-[#21409A] group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <a
                          href={`https://wa.me/256704757991?text=${encodeURIComponent(
                            'Hello FAB Medical Supplies Ltd., I am reaching out to the Custom Procurement desk regarding specialized equipment or reagents not listed in your online catalogue.'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-none"
                        >
                          {companyInfo.phones[1].number}
                        </a>
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mt-1">
                          WhatsApp / Phone
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Brand Detail */}
              <div className="pt-1 flex items-center space-x-3">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                  FAB MEDICAL SUPPLIES LTD.
                </span>
                <span className="w-8 h-[1px] bg-[#21409A]/40" aria-hidden="true" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" aria-hidden="true" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                  DIRECT CLINICAL IMPORTATION &amp; LOGISTICS
                </span>
              </div>

            </div>

            {/* Right Column: Large Clinical Equipment Photograph with Editorial Side Detail (hidden on mobile, shown on lg+) */}
            <div className="hidden lg:block lg:col-span-5 relative" data-aos="fade-left" data-aos-duration="900">
              
              {/* Image Frame & Technical Layers */}
              <div className="relative rounded-sm overflow-hidden bg-white border border-slate-200/90 shadow-sm">
                
                {/* Dotted technical background matrix */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#21409A 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                  aria-hidden="true"
                />

                <picture>
                  <source srcSet={customProcurementEquipmentWebp} type="image/webp" />
                  <img
                    src={customProcurementEquipmentJpg}
                    alt="Advanced ICU and hospital clinical equipment available via custom medical procurement"
                    className="w-full h-full object-cover min-h-[460px] max-h-[540px] relative z-10"
                    width="1280"
                    height="720"
                    loading="lazy"
                  />
                </picture>

                {/* Soft natural white blend on the left edge */}
                <div
                  className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Editorial Side Detail Badge */}
                <div className="absolute top-6 right-6 z-30 bg-white/95 backdrop-blur-sm px-4 py-3 border border-slate-200 shadow-sm text-right">
                  <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-[#0F172A] leading-tight">
                    GLOBAL ACCESS.
                  </div>
                  <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-[#21409A] leading-tight mt-0.5">
                    LOCAL DELIVERY.
                  </div>
                  <div className="w-8 h-[2px] bg-[#E11D48] ml-auto mt-2" aria-hidden="true" />
                </div>

                {/* Corner registration mark */}
                <div className="absolute bottom-3 right-3 z-30 text-[10px] font-mono text-slate-400 select-none">
                  + 04.PRC
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
