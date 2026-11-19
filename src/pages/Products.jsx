import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Container from '../components/Container';
import CustomDropdown from '../components/CustomDropdown';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import NotFound from './NotFound';
import { categories, products } from '../data/products';
import { categoryMetadata } from '../config/seo';

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
          PART 01: HERO SECTION — COMPACT UTILITY-FIRST CATALOGUE HEADER
          ======================================================== */}
      <section
        className="bg-white border-b border-slate-200 relative"
        aria-labelledby="products-hero-heading"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 0.85px, transparent 0.85px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Dual-Brand Top Accent Rule */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <div className="w-2/3 bg-[#21409A]" />
          <div className="w-1/3 bg-[#ED1C24]" />
        </div>

        {/* Softening veil so typography stays razor-sharp */}
        <div className="bg-white/85 py-8 sm:py-10">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column (7 cols): Compact Editorial Header */}
              <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span>
                    {isCategoryPage
                      ? `CLINICAL INDEX / ${activeCategoryObj.shortName.toUpperCase()}`
                      : 'FAB MEDICAL SUPPLIES • UGANDA CATALOGUE'}
                  </span>
                </div>

                <h1
                  id="products-hero-heading"
                  className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.06]"
                >
                  {isCategoryPage ? (
                    categorySeoData?.h1 || activeCategoryObj.name
                  ) : (
                    <>
                      Medical Equipment{' '}
                      <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
                    </>
                  )}
                </h1>

                <p className="text-sm text-slate-600 max-w-2xl mx-auto lg:mx-0">
                  {isCategoryPage
                    ? categorySeoData?.intro
                    : 'Browse certified diagnostic, ICU, surgical, and laboratory equipment available for procurement across Uganda.'}
                </p>
              </div>

              {/* Right Column (5 cols): Compact Architectural Ledger + Direct Quote CTA */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-end gap-4">
                <div className="flex items-center divide-x divide-slate-200 bg-white border border-slate-200 px-2 py-2.5 rounded-xs shadow-xs">
                  <div className="px-3.5 text-center">
                    <div className="text-lg font-mono font-black text-[#0F172A]">
                      {sortedProducts.length}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-slate-500">
                      {sortedProducts.length === 1 ? 'Unit' : 'Units'}
                    </div>
                  </div>
                  <div className="px-3.5 text-center">
                    <div className="text-lg font-mono font-black text-[#21409A]">
                      {String(categories.length).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-slate-500">Depts</div>
                  </div>
                  <div className="px-3.5 text-center">
                    <div className="flex items-center justify-center space-x-1 text-xs font-mono font-black text-emerald-700 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                      <span>KLA</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 mt-0.5">Stock</div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/256704757991?text=${encodeURIComponent(
                    isCategoryPage
                      ? `Hello FAB Medical Supplies Ltd., I would like to request a quotation for ${activeCategoryObj.shortName} equipment.`
                      : 'Hello FAB Medical Supplies Ltd., I would like to request a quotation from your medical equipment catalogue.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xs transition-colors whitespace-nowrap"
                >
                  Request Quotation
                </a>
              </div>
            </div>
          </Container>
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
