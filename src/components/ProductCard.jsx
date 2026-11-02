import React from 'react';

/**
 * ProductCard component — Compact Horizontal Architectural Ledger Card
 * 
 * Swiss Editorial Refinements:
 * - Fine hairline borders (border-slate-200 hover:border-[#21409A])
 * - Clean equipment thumbnail on left with slate-50 backdrop
 * - Monospace reference code (FAB-REF) and clean department tag
 * - High-contrast title and tactile solid action button
 */
export default function ProductCard({ product, onSelect, index = 0 }) {
  // Clean department short name
  const cleanDepartment = product.categoryName?.split('(')[0]?.trim() || product.categoryName;
  const refCode = `FAB-${product.id.slice(0, 10).toUpperCase()}`;

  return (
    <article
      onClick={() => onSelect(product)}
      data-aos="fade-up"
      data-aos-duration="550"
      data-aos-delay={(index % 6) * 45}
      className="group cursor-pointer bg-white border border-slate-200 hover:border-[#21409A] transition-all duration-200 p-3 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:shadow-sm relative rounded-xs"
    >
      {/* Left: Compact Equipment Thumbnail */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 bg-[#F8FAFC] border border-slate-100 p-2.5 flex items-center justify-center overflow-hidden select-none rounded-xs">
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
          {/* Category Tag & Ref Code */}
          <div className="flex items-center justify-between text-[10.5px] font-mono text-[#21409A]">
            <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] flex-shrink-0" aria-hidden="true" />
              <span className="truncate">{cleanDepartment}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-normal hidden sm:inline flex-shrink-0">
              {refCode}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-[#0F172A] text-sm sm:text-[15px] lg:text-base leading-snug tracking-tight group-hover:text-[#21409A] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Action Button */}
        <div className="pt-1 flex items-center justify-between">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#21409A] group-hover:bg-[#1B3580] text-white text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-colors shadow-xs rounded-xs">
            <span>VIEW DETAILS</span>
            <span className="text-white font-bold transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>

          <span className="text-[10px] font-mono text-emerald-600 font-semibold hidden md:inline">
            In Stock
          </span>
        </div>
      </div>
    </article>
  );
}
