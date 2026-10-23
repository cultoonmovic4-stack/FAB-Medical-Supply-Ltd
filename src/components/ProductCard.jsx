import React from 'react';

/**
 * ProductCard component — Compact Horizontal Architectural Ledger Card
 * 
 * Redesigned for:
 * - Low card height (eliminates overly long/tall vertical stacking)
 * - Minimal, focused content (Department, Title, and Action button only)
 * - Fresh horizontal split layout with equipment thumbnail on left
 * - Highlighted solid brand blue action button
 */
export default function ProductCard({ product, onSelect, index = 0 }) {
  // Clean department short name
  const cleanDepartment = product.categoryName?.split('(')[0]?.trim() || product.categoryName;

  return (
    <article
      onClick={() => onSelect(product)}
      data-aos="fade-up"
      data-aos-duration="550"
      data-aos-delay={(index % 6) * 45}
      className="group cursor-pointer bg-white border border-slate-300 hover:border-[#21409A] transition-all duration-200 p-3 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:shadow-md relative"
    >
      {/* Left: Compact Equipment Thumbnail */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 bg-[#F8FAFC] border border-slate-200 p-2 flex items-center justify-center overflow-hidden select-none">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center text-slate-300 text-[10px] font-mono">
            <span>NO PHOTO</span>
          </div>
        )}
      </div>

      {/* Right: Clean, Restrained Information */}
      <div className="flex-grow flex flex-col justify-between min-w-0 h-full py-0.5 space-y-2">
        <div className="space-y-1">
          {/* Category Tag */}
          <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#21409A] truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{cleanDepartment}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-[#0F172A] text-sm sm:text-[15px] lg:text-base leading-snug tracking-tight group-hover:text-[#21409A] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Highlighted Action Button */}
        <div className="pt-1">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#21409A] group-hover:bg-[#1B3580] text-white text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-colors shadow-sm">
            <span>VIEW DETAILS</span>
            <span className="text-white font-bold transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
