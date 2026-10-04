import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomDropdown component
 * 
 * Replaces native OS <select> popovers with custom styled, mobile-optimized
 * dropdown menus that fade in and slide down smoothly, eliminating horizontal
 * overflow on mobile and matching the FAB Medical design system.
 */
export default function CustomDropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select option...',
  isActive = false,
  className = '',
  buttonClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click/touch outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Find currently selected option object
  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <div className="mb-1.5">
          {label}
        </div>
      )}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full text-left flex items-center justify-between text-xs font-mono py-2.5 px-3 rounded-lg border transition-all cursor-pointer shadow-sm select-none ${
          isActive || isOpen
            ? 'border-[#21409A] text-[#21409A] font-semibold ring-1 ring-[#21409A]/20 bg-blue-50/30'
            : 'border-slate-200 text-slate-700 bg-[#FAFCFE] hover:border-slate-300 hover:bg-white'
        } ${buttonClassName}`}
      >
        <span className="truncate pr-2">{displayLabel}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#21409A]' : 'text-slate-400'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Smooth Animated Fade-in-Down Menu */}
      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1 max-h-60 overflow-y-auto animate-fade-in-down w-full"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/80 text-[#21409A] font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#21409A]'
                }`}
              >
                <span className="truncate pr-2">{option.label}</span>
                {isSelected && (
                  <svg
                    className="w-3.5 h-3.5 text-[#21409A] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
