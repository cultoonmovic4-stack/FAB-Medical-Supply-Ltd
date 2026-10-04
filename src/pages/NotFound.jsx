import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';

export default function NotFound() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36 min-h-[60vh] flex items-center border-b border-slate-200">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center justify-center space-x-2.5">
            <span className="w-6 h-[2px] bg-[#21409A]" aria-hidden="true" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]">
              ERROR 404 • PAGE NOT FOUND
            </span>
            <span className="w-6 h-[2px] bg-[#21409A]" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0F172A] leading-tight">
            The Requested Page <br />
            <span className="text-[#21409A]">Could Not Be Located.</span>
          </h1>

          {/* Factual Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mx-auto">
            The URL you entered does not match any verified section of the FAB Medical Supplies Ltd. platform. 
            Use the actions below to navigate to verified healthcare equipment and service records.
          </p>

          {/* Action Navigation */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/"
              className="px-6 py-3.5 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold tracking-[0.18em] uppercase transition-colors shadow-sm w-full sm:w-auto text-center"
            >
              RETURN TO HOME
            </Link>
            <Link
              to="/products"
              className="px-6 py-3.5 bg-white border border-slate-300 hover:border-[#21409A] text-slate-700 hover:text-[#21409A] text-xs font-mono font-bold tracking-[0.18em] uppercase transition-colors w-full sm:w-auto text-center"
            >
              EXPLORE PRODUCTS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-white border border-slate-300 hover:border-[#21409A] text-slate-700 hover:text-[#21409A] text-xs font-mono font-bold tracking-[0.18em] uppercase transition-colors w-full sm:w-auto text-center"
            >
              CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
