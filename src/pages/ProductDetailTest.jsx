import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { products } from '../data/products';
import { getProductDetails } from '../data/productKnowledge';

export default function ProductDetailTest() {
  const [activeTab, setActiveTab] = useState('1A');
  const [selectedProductId, setSelectedProductId] = useState('ct-scanner');

  const product = products.find((p) => p.id === selectedProductId) || products[0];
  const details = getProductDetails(product);
  const refCode = `FAB-${product.id.toUpperCase()}`;

  const whatsappInquiryUrl = `https://wa.me/256704757991?text=${encodeURIComponent(
    `Hello FAB Medical Supplies Ltd., I am reaching out regarding formal procurement and specifications for the ${product.name} (Ref: ${refCode}).`
  )}`;

  return (
    <div className="min-h-screen bg-[#FAFCFE] text-[#0F172A] antialiased">
      {/* ========================================================
          STICKY VARIATION TOGGLE BAR
          ======================================================== */}
      <aside aria-label="Testing Console" className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" aria-hidden="true" />
              <span className="font-bold uppercase tracking-wider text-slate-300">
                SECTION 1 TEST LAB:
              </span>
              <span className="text-white font-bold">
                {activeTab === '1A' ? 'Variation 1A (Broadsheet Embedded)' : 'Variation 1B (Horizon Ledger)'}
              </span>
            </div>

            {/* Variation Switcher */}
            <div className="flex items-center space-x-1.5 bg-slate-900 p-1 border border-slate-700 rounded-xs">
              <button
                type="button"
                onClick={() => setActiveTab('1A')}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                  activeTab === '1A'
                    ? 'bg-[#21409A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Variation 1A (Embedded)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('1B')}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                  activeTab === '1B'
                    ? 'bg-[#21409A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Variation 1B (Horizon Strip)
              </button>
            </div>

            {/* Sample Machine Switcher */}
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="hidden md:inline uppercase text-[11px] text-slate-400">Sample Equipment:</span>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="bg-slate-800 text-white text-xs font-mono border border-slate-700 px-2.5 py-1 focus:outline-none focus:border-[#21409A]"
              >
                <option value="ct-scanner">16-Slice CT Scanner</option>
                <option value="patient-monitor-icu">ICU Patient Monitor</option>
                <option value="ultrasound-color-doppler">Color Doppler Ultrasound</option>
              </select>
            </div>
          </div>
        </Container>
      </aside>

      {/* ========================================================
          DESIGN HIGHLIGHT BANNER
          ======================================================== */}
      <div className="bg-slate-100 border-b border-slate-200 py-2.5 text-[11.5px] font-mono text-slate-600">
        <Container>
          {activeTab === '1A' ? (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-[#0F172A] uppercase">VARIATION 1A HIGHLIGHTS:</strong> Balanced 6/6 broadsheet grid &bull; Smart context back link (`← BACK TO {product.categoryName?.split('(')[0]?.trim()}`) &bull; Embedded 4-point Uganda Assurance Quad directly under action buttons &bull; Working `[🖨️ PRINT SPEC SHEET]` trigger.
              </div>
              <span className="text-[#21409A] font-bold uppercase">BROADSHEET EMBEDDED</span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-[#0F172A] uppercase">VARIATION 1B HIGHLIGHTS:</strong> Expanded 7-col photographic surgical stage &bull; Streamlined 5-col vertical action ledger &bull; Continuous full-width 4-column horizontal assurance horizon bar running across the container &bull; Working `[🖨️ PRINT SPEC SHEET]`.
              </div>
              <span className="text-[#21409A] font-bold uppercase">HORIZON LEDGER</span>
            </div>
          )}
        </Container>
      </div>

      {/* RENDER ACTIVE VARIATION */}
      {activeTab === '1A' ? (
        <Section1AVariation
          product={product}
          details={details}
          refCode={refCode}
          whatsappInquiryUrl={whatsappInquiryUrl}
        />
      ) : (
        <Section1BVariation
          product={product}
          details={details}
          refCode={refCode}
          whatsappInquiryUrl={whatsappInquiryUrl}
        />
      )}

      {/* ========================================================
          CONTEXT DEMO: SUBSEQUENT SECTION PREVIEW (SPECS TABLE)
          ======================================================== */}
      <section className="bg-white border-t border-slate-200 py-10 sm:py-12">
        <Container>
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
              PAGE FLOW DEMO
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
              Subsequent Section (Specs &amp; Features)
            </h2>
            <p className="text-xs font-mono text-slate-500">
              Notice how smoothly {activeTab === '1A' ? 'Variation 1A' : 'Variation 1B'} flows into the technical data sheet below without jarring card boxes.
            </p>
          </div>

          <div className="border border-slate-200 bg-white overflow-hidden rounded-xs shadow-xs max-w-4xl mx-auto">
            <table className="w-full text-left font-mono">
              <tbody className="divide-y divide-slate-100">
                {details.specifications.slice(0, 4).map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FAFCFE]' : 'bg-white'}>
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#21409A] uppercase tracking-wider w-5/12 sm:w-1/3 text-xs align-top border-r border-slate-100">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-slate-800 text-xs leading-relaxed align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </div>
  );
}

/* =========================================================================
   VARIATION 1A: Architectural Broadsheet + Embedded 4-Point Assurance Grid
   ========================================================================= */
function Section1AVariation({ product, details, refCode, whatsappInquiryUrl }) {
  const cleanDepartment = product.categoryName?.split('(')[0]?.trim() || product.categoryName;

  return (
    <div>
      {/* Top Breadcrumb Strip */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3 sm:py-3.5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 text-xs font-mono min-w-0">
            {/* Context-aware Return Action */}
            <Link
              to={`/products/${product.categoryId}`}
              className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1 w-fit"
            >
              <span className="text-[#ED1C24] transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>BACK TO {cleanDepartment}</span>
            </Link>

            {/* Breadcrumb Hierarchy + Print Spec Sheet Action */}
            <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
              <nav className="flex items-center space-x-2 text-slate-500 overflow-hidden" aria-label="Breadcrumb">
                <span className="uppercase truncate max-w-[150px] sm:max-w-[200px]">
                  {cleanDepartment}
                </span>
                <span className="text-slate-300">/</span>
                <span className="text-[#0F172A] font-bold uppercase truncate max-w-[160px] sm:max-w-[220px]">
                  {product.name}
                </span>
              </nav>

              <span className="text-slate-300">|</span>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center space-x-1 text-slate-600 hover:text-[#21409A] font-bold uppercase transition-colors cursor-pointer"
                title="Print institutional technical data sheet"
              >
                <span aria-hidden="true">🖨️</span>
                <span className="hidden sm:inline">PRINT SPEC SHEET</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Dossier Header */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-12 lg:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6-Col): High-Clarity Equipment Display */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative bg-white border border-slate-200 p-6 sm:p-8 flex items-center justify-center min-h-[320px] sm:min-h-[400px] aspect-[4/3] overflow-hidden select-none rounded-xs">
                {/* Technical Registration Crosshairs */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>

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
                  KAMPALA DISPATCH
                </div>
              </div>

              {/* Technical Caption Bar */}
              <div className="px-1 text-[10px] sm:text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <span>REF CODE: <strong className="text-[#0F172A]">{refCode}</strong></span>
                <span className="uppercase text-slate-400">UGANDA HEALTHCARE SPECIFICATION</span>
              </div>
            </div>

            {/* Right Column (6-Col): Title, Spec Matrix, Actions & Assurance Quad */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-3">
                {/* Department Eyebrow */}
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A]">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span>{cleanDepartment}</span>
                </div>

                {/* Large Product Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0F172A] tracking-tight leading-tight">
                  {product.name}
                </h1>

                {/* Concise Clinical Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {product.summary || details.overview}
                </p>
              </div>

              {/* Architectural Spec Matrix Ledger */}
              <div className="border border-slate-200 divide-y divide-slate-200 bg-slate-50/50 rounded-xs">
                <div className="p-3 sm:p-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    PROCUREMENT REF
                  </span>
                  <span className="font-mono font-bold text-xs text-[#0F172A]">
                    {refCode}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    STOCK AVAILABILITY
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#21409A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    <span>In Stock / Kampala Warehouse</span>
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    PRIMARY APPLICATION
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A] text-left sm:text-right">
                    {details.application || details.productType}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    CLINICAL INDICATION
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A] text-left sm:text-right">
                    {details.clinicalUse}
                  </span>
                </div>
              </div>

              {/* B2B Procurement Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 text-center rounded-xs shadow-xs"
                >
                  <span>REQUEST FORMAL QUOTATION</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Embedded 4-Point Uganda Assurance Grid */}
              <div className="pt-2">
                <div className="border border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-xs">
                  <div className="p-3 sm:p-3.5 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold text-[#21409A] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      <span>01. NDA IMPORT CLEARED</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Authorized clinical importation conforming to Uganda health authority standards.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold text-[#21409A] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      <span>02. 240V / 50Hz READY</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Engineered for Uganda power grid stability with integrated surge tolerance.
                    </p>
                  </div>
                </div>

                <div className="border-x border-b border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-b-xs">
                  <div className="p-3 sm:p-3.5 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold text-[#21409A] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      <span>03. ON-SITE COMMISSIONING</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Installed and calibrated at your health facility with full biomedical staff handover.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold text-[#21409A] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      <span>04. KAMPALA SPARES &amp; SERVICE</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Comprehensive warranty backed by technical engineering support on Bombo Road.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}

/* =========================================================================
   VARIATION 1B: Minimalist Precision Ledger + Full-Width Horizon Assurance
   ========================================================================= */
function Section1BVariation({ product, details, refCode, whatsappInquiryUrl }) {
  const cleanDepartment = product.categoryName?.split('(')[0]?.trim() || product.categoryName;

  return (
    <div>
      {/* Top Breadcrumb Strip */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-3 sm:py-3.5">
        <Container>
          <div className="flex items-center justify-between text-xs font-mono">
            <Link
              to="/products"
              className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1"
            >
              <span className="text-[#ED1C24] transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>BACK TO CATALOGUE</span>
            </Link>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-[#21409A] font-bold uppercase transition-colors cursor-pointer"
            >
              <span aria-hidden="true">🖨️</span>
              <span>PRINT SPEC SHEET</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Asymmetric 7/5 Hero Showcase */}
      <section className="bg-white pt-8 sm:pt-12 pb-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7-Col): Expanded Panoramic Equipment Window */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#FAFCFE] border border-slate-200 p-8 sm:p-12 flex items-center justify-center min-h-[350px] sm:min-h-[440px] aspect-[16/10] overflow-hidden select-none rounded-xs">
                {/* Corner Pins */}
                <div className="absolute top-3 left-3 text-[11px] font-mono text-slate-300">+</div>
                <div className="absolute top-3 right-3 text-[11px] font-mono text-slate-300">+</div>
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300">+</div>
                <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-300">+</div>

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    width="620"
                    height="420"
                    loading="eager"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-400 font-mono text-xs">
                    Official product photography on record
                  </div>
                )}
              </div>

              <div className="pt-2 px-1 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>AUTHENTIC EQUIPMENT PHOTOGRAPHY</span>
                <span>REF: {refCode}</span>
              </div>
            </div>

            {/* Right Column (5-Col): Streamlined Vertical Action Ledger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                  <span>{cleanDepartment}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase text-[#0F172A] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {product.summary || details.overview}
                </p>
              </div>

              {/* Streamlined Specs Strip */}
              <div className="border-t border-b border-slate-200 py-3.5 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400 uppercase">CLASSIFICATION:</span>
                  <span className="font-bold text-[#0F172A]">{details.application || 'Diagnostic System'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 uppercase">AVAILABILITY:</span>
                  <span className="font-bold text-emerald-600 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>In Stock / Kampala</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs text-center rounded-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                  <span>→</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-all text-center rounded-xs shadow-xs"
                >
                  <span>REQUEST FORMAL QUOTATION</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Dedicated Full-Width Horizon Assurance Strip */}
      <section className="bg-[#F8FAFC] border-t border-b border-slate-200 py-6 sm:py-7">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="p-4 sm:px-6 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#ED1C24] uppercase tracking-wider block">
                01. REGULATORY
              </span>
              <h3 className="text-xs font-bold font-mono uppercase text-[#0F172A]">
                NDA Import Cleared
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Fully certified medical device importation for Uganda hospitals.
              </p>
            </div>

            <div className="p-4 sm:px-6 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#ED1C24] uppercase tracking-wider block">
                02. ELECTRICAL
              </span>
              <h3 className="text-xs font-bold font-mono uppercase text-[#0F172A]">
                240V / 50Hz Stable
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Tested for Uganda national power grid and generator transitions.
              </p>
            </div>

            <div className="p-4 sm:px-6 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#ED1C24] uppercase tracking-wider block">
                03. DEPLOYMENT
              </span>
              <h3 className="text-xs font-bold font-mono uppercase text-[#0F172A]">
                On-Site Handover
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Commissioning, calibration, and clinical user training included.
              </p>
            </div>

            <div className="p-4 sm:px-6 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#ED1C24] uppercase tracking-wider block">
                04. MAINTENANCE
              </span>
              <h3 className="text-xs font-bold font-mono uppercase text-[#0F172A]">
                Kampala Spares
              </h3>
              <p className="text-[11px] text-slate-600 leading-snug">
                Rapid warranty service and replacement parts from Bombo Road.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
