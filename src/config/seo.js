/**
 * SEO & Metadata Configuration for FAB Medical Supplies Ltd.
 * 
 * Centralized, route-aware configuration for:
 * - Document Titles
 * - Meta Descriptions
 * - Canonical URLs
 * - Open Graph (og:*)
 * - Twitter Cards (twitter:*)
 */

// Base production domain. Configurable via environment variable VITE_SITE_URL.
// Default aligns with canonical mapping: https://fabmedicalsupplies.com
export const SITE_URL = (
  (typeof process !== 'undefined' && process.env && process.env.VITE_SITE_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  'https://fabmedicalsupplies.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'FAB Medical Supplies Ltd.';

export const categoryMetadata = {
  'radiology-imaging': {
    title: 'Radiology & Imaging Equipment | FAB Medical Supplies',
    description:
      'Diagnostic radiology and medical imaging equipment supplied by FAB Medical Supplies Ltd., including X-ray machines, ultrasound, CT scanners, MRI, and mammography systems in Uganda.',
    h1: 'Radiology and Imaging Equipment',
    intro:
      'Diagnostic radiology and medical imaging equipment supplied by FAB Medical Supplies Ltd., including stationary and mobile X-ray machines, ultrasound systems, CT scanners, MRI machines, mammography units, and C-arm systems for healthcare facilities in Uganda.',
  },
  'opd-consultation': {
    title: 'OPD & Consultation Equipment | FAB Medical Supplies',
    description:
      'Outpatient department and clinical consultation room equipment supplied by FAB Medical Supplies Ltd., including stethoscopes, BP machines, thermometers, diagnostic sets, and examination couches.',
    h1: 'Outpatient Department & Consultation Room Equipment',
    intro:
      'Clinical diagnostic instruments and examination equipment for outpatient departments and consultation rooms, including stethoscopes, BP machines, digital thermometers, diagnostic sets, weighing scales, examination couches, and glucometers.',
  },
  'emergency-icu': {
    title: 'Emergency & ICU Equipment | FAB Medical Supplies',
    description:
      'Emergency and critical care ICU equipment supplied by FAB Medical Supplies Ltd., including ventilators, defibrillators, patient monitors, infusion pumps, crash carts, and oxygen systems in Uganda.',
    h1: 'Emergency & ICU Critical Care Equipment',
    intro:
      'Emergency resuscitation and intensive care machinery supplied by FAB Medical Supplies Ltd., including ventilators, defibrillators, infusion pumps, ICU patient monitors, crash carts, oxygen concentrators, and nebulizers.',
  },
  'maternity-pediatrics': {
    title: 'Maternity & Pediatrics Equipment | FAB Medical Supplies',
    description:
      'Maternity and neonatal pediatric care equipment supplied by FAB Medical Supplies Ltd., including infant incubators, radiant warmers, fetal monitors, and delivery beds in Uganda.',
    h1: 'Maternity & Pediatric Care Equipment',
    intro:
      'Specialized maternal, neonatal, and pediatric care equipment supplied by FAB Medical Supplies Ltd., including infant incubators, radiant warmers, fetal monitoring units, and specialized delivery beds.',
  },
  'specialized-departments': {
    title: 'Specialized Department Equipment | FAB Medical Supplies',
    description:
      'Specialized hospital department equipment supplied by FAB Medical Supplies Ltd., including dialysis machines, physiotherapy equipment, endoscopy towers, and dental units.',
    h1: 'Specialized Department Medical Equipment',
    intro:
      'Clinical machinery and specialized department apparatus supplied by FAB Medical Supplies Ltd., including hemodialysis machines for renal care, physiotherapy equipment, endoscopy towers, and complete dental chair setups.',
  },
  'utility-services': {
    title: 'Utility & Hospital Support Equipment | FAB Medical Supplies',
    description:
      'Hospital supporting and utility services equipment supplied by FAB Medical Supplies Ltd., including autoclaves, medical gas pipelines, waste incinerators, laundry systems, and mortuary chambers.',
    h1: 'Supporting & Utility Services Equipment',
    intro:
      'Hospital facility infrastructure and clinical utility systems supplied by FAB Medical Supplies Ltd., including sterilization autoclaves, medical gas pipeline networks, waste incinerators, laundry units, and mortuary chambers.',
  },
  'hospital-furniture': {
    title: 'General Hospital Furniture | FAB Medical Supplies',
    description:
      'Hospital furniture and ward equipment supplied by FAB Medical Supplies Ltd., including electric and manual hospital beds, bedside lockers, overbed tables, IV stands, and stretchers.',
    h1: 'General Hospital Furniture',
    intro:
      'Clinical furniture designed for patient wards and healthcare facilities, including electric and manual hospital beds, bedside lockers, overbed tables, IV stands, wheelchairs, and patient stretchers.',
  },
  'laboratory': {
    title: 'Laboratory Equipment & Instruments | FAB Medical Supplies',
    description:
      'Clinical laboratory equipment, analyzers, and diagnostic instruments supplied by FAB Medical Supplies Ltd., including hematology analyzers, chemistry analyzers, microscopes, and centrifuges in Uganda.',
    h1: 'Laboratory Equipment & Instruments',
    intro:
      'Diagnostic analyzers and laboratory instruments supplied for clinical diagnostics, including hematology analyzers, clinical chemistry units, binocular and trinocular microscopes, centrifuges, and laboratory glassware.',
  },
  'theatre-room': {
    title: 'Operating Theatre Equipment | FAB Medical Supplies',
    description:
      'Operating theatre room equipment supplied by FAB Medical Supplies Ltd., including anesthesia machines, operation tables, surgical lights, electrosurgical units, and surgical instruments.',
    h1: 'Operating Theatre Equipment',
    intro:
      'Surgical apparatus and operating theatre infrastructure supplied by FAB Medical Supplies Ltd., including anesthesia workstations, operating tables, surgical lighting systems, electrosurgical units, and surgical instruments.',
  },
};

// The 15 verified public indexable routes for sitemap and discovery
export const sitemapRoutes = [
  '/',
  '/about',
  '/products',
  '/products/radiology-imaging',
  '/products/opd-consultation',
  '/products/emergency-icu',
  '/products/maternity-pediatrics',
  '/products/specialized-departments',
  '/products/utility-services',
  '/products/hospital-furniture',
  '/products/laboratory',
  '/products/theatre-room',
  '/services',
  '/who-we-serve',
  '/contact',
];

// Shared default social share image located in public/ directory
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-medical-equipment.jpg`;

export const routeMetadata = {
  '/': {
    title: 'FAB Medical Supplies Ltd. | Medical Equipment Supplier in Uganda',
    description:
      'FAB Medical Supplies Ltd. supplies medical equipment, instruments and reagents in Uganda, with procurement, delivery, servicing and repair support.',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/about': {
    title: 'About FAB Medical Supplies Ltd. | Medical Equipment Uganda',
    description:
      'Learn about FAB Medical Supplies Ltd., a Uganda-based medical supplies company providing procurement, supply, delivery, servicing and repair of medical equipment.',
    canonical: `${SITE_URL}/about`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products': {
    title: 'Medical Equipment & Clinical Supplies | FAB Medical Supplies',
    description:
      'Explore medical equipment, instruments and clinical supplies supplied by FAB Medical Supplies Ltd. for healthcare environments in Uganda.',
    canonical: `${SITE_URL}/products`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/radiology-imaging': {
    title: categoryMetadata['radiology-imaging'].title,
    description: categoryMetadata['radiology-imaging'].description,
    canonical: `${SITE_URL}/products/radiology-imaging`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/opd-consultation': {
    title: categoryMetadata['opd-consultation'].title,
    description: categoryMetadata['opd-consultation'].description,
    canonical: `${SITE_URL}/products/opd-consultation`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/emergency-icu': {
    title: categoryMetadata['emergency-icu'].title,
    description: categoryMetadata['emergency-icu'].description,
    canonical: `${SITE_URL}/products/emergency-icu`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/maternity-pediatrics': {
    title: categoryMetadata['maternity-pediatrics'].title,
    description: categoryMetadata['maternity-pediatrics'].description,
    canonical: `${SITE_URL}/products/maternity-pediatrics`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/specialized-departments': {
    title: categoryMetadata['specialized-departments'].title,
    description: categoryMetadata['specialized-departments'].description,
    canonical: `${SITE_URL}/products/specialized-departments`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/utility-services': {
    title: categoryMetadata['utility-services'].title,
    description: categoryMetadata['utility-services'].description,
    canonical: `${SITE_URL}/products/utility-services`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/hospital-furniture': {
    title: categoryMetadata['hospital-furniture'].title,
    description: categoryMetadata['hospital-furniture'].description,
    canonical: `${SITE_URL}/products/hospital-furniture`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/laboratory': {
    title: categoryMetadata['laboratory'].title,
    description: categoryMetadata['laboratory'].description,
    canonical: `${SITE_URL}/products/laboratory`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/products/theatre-room': {
    title: categoryMetadata['theatre-room'].title,
    description: categoryMetadata['theatre-room'].description,
    canonical: `${SITE_URL}/products/theatre-room`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/services': {
    title: 'Medical Equipment Supply & Technical Support | FAB Medical Supplies',
    description:
      'FAB Medical Supplies provides medical equipment procurement, marketing and sales, delivery, servicing and repair support in Uganda.',
    canonical: `${SITE_URL}/services`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/who-we-serve': {
    title: 'Healthcare Equipment & Supplies in Uganda | FAB Medical Supplies',
    description:
      'FAB Medical Supplies supports healthcare environments across Uganda, including laboratories, operating theatres, critical care and other clinical settings.',
    canonical: `${SITE_URL}/who-we-serve`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  '/contact': {
    title: 'Contact FAB Medical Supplies Ltd. | Kampala, Uganda',
    description:
      'Contact FAB Medical Supplies Ltd. in Kampala, Uganda for medical equipment, instruments, reagents, procurement, delivery and technical support.',
    canonical: `${SITE_URL}/contact`,
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  },
};

/**
 * Resolves metadata for any pathname.
 * Gracefully defaults to fallback if route is not explicitly mapped.
 */
export function getRouteMetadata(pathname) {
  // Normalize trailing slashes (except root)
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  if (routeMetadata[normalizedPath]) {
    return {
      ...routeMetadata[normalizedPath],
      isIndexable: true,
      robots: 'index, follow',
    };
  }

  // Fallback for 404 / unknown paths: strictly noindex and no self-canonicalization
  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: `The requested page could not be found on ${SITE_NAME}. Browse our medical equipment and services catalog.`,
    canonical: null,
    isIndexable: false,
    robots: 'noindex, follow',
    ogType: 'website',
    image: DEFAULT_OG_IMAGE,
  };
}

/**
 * Generates verified Schema.org JSON-LD business entity and WebSite metadata.
 * Uses strictly verified information from company profile and codebase.
 */
export function getBusinessSchema(siteUrl = SITE_URL) {
  const normalizedUrl = siteUrl.replace(/\/+$/, '');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${normalizedUrl}/#website`,
        'url': `${normalizedUrl}/`,
        'name': SITE_NAME,
        'description':
          'Medical equipment supply, delivery, servicing and repair for healthcare facilities across Uganda.',
        'publisher': {
          '@id': `${normalizedUrl}/#organization`,
        },
        'inLanguage': 'en',
      },
      {
        '@type': 'Organization',
        '@id': `${normalizedUrl}/#organization`,
        'name': SITE_NAME,
        'url': `${normalizedUrl}/`,
        'logo': `${normalizedUrl}/fab-logo.png`,
        'image': `${normalizedUrl}/hero-medical-equipment.jpg`,
        'description':
          'FAB Medical Supplies Ltd. deals in the procurement, importation, and supply of medical equipment, instruments, and reagents used in laboratories, operating theatres, and clinical facilities across Uganda.',
        'telephone': '+256786062191',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Emka House, Bombo Road, Ground Floor, Shop G01',
          'addressLocality': 'Kampala',
          'addressCountry': 'UG',
        },
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '+256786062191',
            'contactType': 'customer service',
            'areaServed': 'UG',
            'availableLanguage': 'en',
          },
          {
            '@type': 'ContactPoint',
            'telephone': '+256704757991',
            'contactType': 'sales',
            'areaServed': 'UG',
            'availableLanguage': 'en',
          },
        ],
      },
    ],
  };
}
