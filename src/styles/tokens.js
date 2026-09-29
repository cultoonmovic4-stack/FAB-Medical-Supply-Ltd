/**
 * Centralized design tokens for FAB Medical Supplies Ltd.
 * Derived from the official company profile PDF swatch metadata.
 * 
 * Rules:
 * - Brand blue: #21409A (Canonical brand blue based on CMYK swatch conversion)
 * - Brand red: #ED1C24 (Restrained accent color)
 * - White: #FFFFFF
 * - Dark text: #202A35
 * - Muted text: #667085
 * - Light background: #F5F7FA
 * - Border: #D9E0E7
 */

export const palette = {
  brand: {
    blue: '#21409A',
    red: '#ED1C24',
    white: '#FFFFFF',
  },
  neutral: {
    dark: '#202A35',
    muted: '#667085',
    light: '#F5F7FA',
    border: '#D9E0E7',
  },
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
  },
};

export default {
  palette,
  typography,
};
