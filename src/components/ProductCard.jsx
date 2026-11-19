import React from 'react';

/**
 * ProductCard component — Vertical Full-Bleed Visual Showcase Card (Option 4)
 *
 * - Edge-to-edge 16:10 equipment photography for maximum clarity on mobile and desktop
 * - Floating top-left department pill with FAB red indicator dot
 * - Crisp footer bar with high-contrast product title and tactile action button
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
      className="group cursor-pointer bg-white border border-slate-200 hover:border-[#21409A] transition-all duration-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md flex flex-col"
    >
      {/* Top: Full-Bleed Edge-to-Edge 16:10 Equipment Photography */}
      <div className="w-full aspect-[16/10] bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100 select-none">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center text-slate-300 text-xs font-mono">
            <span>NO PHOTO</span>
          </div>
        )}

        {/* Floating Department Pill */}
        <div className="absolute top-2.5 left-2.5 max-w-[85%] bg-white/95 backdrop-blur-xs border border-slate-200 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A] flex items-center space-x-1.5 rounded-xs shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{cleanDepartment}</span>
        </div>
      </div>

      {/* Bottom: Compact Title & Action Bar */}
      <div className="p-3.5 sm:p-4 flex-grow flex items-center justify-between gap-3">
        <h3 className="font-bold text-[#0F172A] text-[15px] sm:text-base leading-snug tracking-tight group-hover:text-[#21409A] transition-colors line-clamp-2">
          {product.name}
        </h3>

        <span className="flex-shrink-0 inline-flex items-center space-x-1 px-3 py-2 bg-[#21409A] group-hover:bg-[#1B3580] text-white text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-colors shadow-xs rounded-xs">
          <span>VIEW</span>
          <span
            className="text-white font-bold transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </span>
      </div>
    </article>
  );
}
