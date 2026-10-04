import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMetadata, getBusinessSchema, SITE_NAME } from '../config/seo';

/**
 * Updates or creates a <meta> element in document.head
 */
function updateMetaTag(attrName, attrValue, content) {
  let tag = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Updates or creates the <link rel="canonical"> element in document.head
 */
function updateCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (link) {
      link.remove();
    }
    return;
  }
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Updates or creates the JSON-LD <script> element in document.head.
 * Using a stable DOM ID prevents duplicate structured-data tags across route navigations.
 */
function updateJsonLd(schemaData) {
  let script = document.head.querySelector('script#fab-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('id', 'fab-structured-data');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
}

/**
 * Custom React hook to dynamically synchronize document title, SEO meta tags,
 * and structured data with the current route without requiring external third-party SEO libraries.
 */
export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = getRouteMetadata(location.pathname);

    // 1. Document Title
    document.title = meta.title;

    // 2. Standard SEO Meta Description
    updateMetaTag('name', 'description', meta.description);

    // 3. Meta Robots (index, follow for valid pages; noindex, follow for 404/invalid routes)
    updateMetaTag('name', 'robots', meta.robots || 'index, follow');

    // 4. Canonical Link (only set on indexable routes; removed on 404s)
    updateCanonical(meta.canonical);

    // 5. Open Graph Tags
    updateMetaTag('property', 'og:type', meta.ogType);
    updateMetaTag('property', 'og:title', meta.title);
    updateMetaTag('property', 'og:description', meta.description);
    if (meta.canonical) {
      updateMetaTag('property', 'og:url', meta.canonical);
    }
    updateMetaTag('property', 'og:site_name', SITE_NAME);
    updateMetaTag('property', 'og:image', meta.image);

    // 5. Twitter / X Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', meta.title);
    updateMetaTag('name', 'twitter:description', meta.description);
    updateMetaTag('name', 'twitter:image', meta.image);

    // 6. Structured Data (JSON-LD)
    updateJsonLd(getBusinessSchema());
  }, [location.pathname]);
}
