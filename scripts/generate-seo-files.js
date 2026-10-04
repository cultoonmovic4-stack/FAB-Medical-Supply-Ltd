import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, sitemapRoutes } from '../src/config/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const distDir = path.resolve(rootDir, 'dist');

console.log(`[SEO-GEN] Generating robots.txt and sitemap.xml with base URL: ${SITE_URL}`);

// 1. Generate robots.txt
const robotsContent = `# robots.txt for FAB Medical Supplies Ltd.
User-agent: *
Allow: /

# XML Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

// 2. Generate sitemap.xml
const sitemapUrlEntries = sitemapRoutes
  .map((route) => {
    const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  })
  .join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrlEntries}
</urlset>
`;

// Write to public/ directory
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');
console.log(`[SEO-GEN] Wrote public/robots.txt and public/sitemap.xml`);

// If dist/ directory exists (after build), also write to dist/
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf-8');
  console.log(`[SEO-GEN] Wrote dist/robots.txt and dist/sitemap.xml`);
}
