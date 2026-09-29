import React from 'react';

/**
 * ProductCard component — Redesigned into Editorial Medical Equipment Catalogue Item
 * 
 * Features:
 * - Controlled editorial variation (Organized Editorial Disorder)
 * - Authentic technical medical documentation placeholder
 * - High-contrast editorial typography
 * - Restrained VIEW DETAILS → text action with hover transition
 * - Technical reference numbering and fine rules
 */
export default function ProductCard({ product, onSelect, index = 0, total = 54 }) {
  // Format sequential item number (e.g. "01", "14")
  const itemNumber = String(index + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');
  const refCode = `FAB-${product.id.slice(0, 8).toUpperCase()}`;

  // Controlled rhythmic variation (index % 3)
  const variant = index % 3;

  return (
    <article
      onClick={() => onSelect(product)}
      className={`group cursor-pointer bg-white border border-slate-200/90 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
        variant === 1
          ? 'hover:border-[#21409A] hover:shadow-[0_12px_28px_rgba(33,64,154,0.06)]'
          : variant === 2
          ? 'hover:border-[#21409A] hover:shadow-[0_12px_28px_rgba(33,64,154,0.06)]'
          : 'hover:border-[#21409A] hover:shadow-[0_12px_28px_rgba(33,64,154,0.06)]'
      }`}
    >
      {/* Top Technical Metadata Header */}
      <div className="px-5 pt-4 pb-2.5 flex items-center justify-between border-b border-slate-100 text-[10px] font-mono text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="text-[#21409A] font-bold tracking-wider">{itemNumber} / {totalFormatted}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
          <span className="tracking-wider uppercase text-slate-500">REF: {refCode}</span>
        </div>
        <span className="text-[9px] uppercase tracking-wider text-slate-400 hidden sm:inline">
          CATALOGUE SPEC
        </span>
      </div>

      {/* Product Image / Technical Blueprint Documentation Placeholder */}
      <div className="relative p-5 bg-[#FAFCFE] flex items-center justify-center overflow-hidden border-b border-slate-100 select-none">
        {product.image ? (
          <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          /* High-Precision Technical Medical Equipment Placeholder */
          <div
            role="img"
            aria-label={`Photograph placeholder for ${product.name}: Photograph to be supplied by FAB`}
            className="w-full aspect-[4/3] relative flex flex-col items-center justify-center p-4 text-center border border-dashed border-slate-200/90 bg-white"
          >
            {/* Technical Registration Crosshairs at Corners */}
            <div className="absolute top-1 left-1.5 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute top-1 right-1.5 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-1 left-1.5 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-1 right-1.5 text-[10px] font-mono text-slate-300 select-none">+</div>

            {/* Subtle Blueprint Concentric Ring Graphic */}
            <svg
              className="w-14 h-14 text-slate-300/80 mb-2 transition-transform duration-500 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="22" strokeWidth="0.8" />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth="0.8" />
            </svg>

            <span className="text-[11px] font-mono uppercase font-bold text-[#0F172A] tracking-wider block">
              Product Photograph to be Supplied
            </span>
            <span className="text-[10px] font-mono text-slate-400 mt-0.5 block">
              Pending owner verification
            </span>

            {/* Subtle Technical Annotation Stamp */}
            <div className="mt-2.5 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-[2px] text-[9px] font-mono text-[#21409A] font-medium tracking-widest uppercase">
              FAB VERIFIED SPECIFICATION
            </div>
          </div>
        )}
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] inline-block" aria-hidden="true" />
            <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#21409A] font-bold truncate">
              {product.categoryName}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-[#0F172A] text-base lg:text-[17px] leading-snug tracking-tight group-hover:text-[#21409A] transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          {product.summary ? (
            <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
              {product.summary}
            </p>
          ) : (
            <p className="text-xs text-slate-400 italic font-normal">
              Procured and supplied by FAB Medical Supplies Ltd.
            </p>
          )}
        </div>

        {/* Editorial Action: VIEW DETAILS → */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A] group-hover:text-[#21409A] transition-colors">
            <span>VIEW DETAILS</span>
            <span className="text-[#E11D48] ml-2 font-bold transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </span>
          <span className="text-[10px] font-mono text-slate-400 tracking-wider">
            UGANDA SUPPLY
          </span>
        </div>
      </div>
    </article>
  );
}
