# FAB Medical Supplies Ltd. --- Implementation Plan

## 1. Purpose

This document sets out a staged plan for designing and building the FAB
Medical Supplies Ltd. website as a frontend-only project. It is intended
to guide implementation after the project requirements, website
structure, and design guidelines have been reviewed and approved.

## 2. Project Scope

### Included

-   A responsive company website built with React, Vite, and Tailwind
    CSS.
-   Company information and approved service descriptions.
-   A browsable product catalogue with individual product displays.
-   Direct contact information and approved contact links.
-   Reusable interface components and consistent brand styling.
-   Responsive, accessibility, and production-build checks.

### Not included

-   Backend services, database, or user accounts.
-   Admin dashboard or content-management system.
-   Contact form.
-   Online checkout, cart, or payment processing.
-   Manufacturing claims or unconfirmed service claims.

The business imports and supplies medical equipment; the website must
not describe FAB as a manufacturer. Installation, maintenance, and
servicing must remain out of published content unless the owner confirms
that these services are offered.

## 3. Implementation Principles

-   Follow the approved requirements, sitemap, and design guidelines.
-   Use the existing company logo as the source for brand colors; sample
    exact color values from the approved original asset rather than
    guessing.
-   Do not use AI-generated assets, gradients, glassmorphism, decorative
    AI effects, or arbitrary colors.
-   Use actual product photographs supplied and approved by the company.
    Until they are available, use clearly marked temporary placeholders
    during development and replace them before launch.
-   Keep the codebase understandable, maintainable, and appropriately
    componentized.
-   Do not add features or business claims that have not been approved.

## 4. Phased Work Plan

### Phase 1 --- Project and Asset Review

**Tasks** - Inspect the existing repository and confirm its current
state before changing files. - Confirm the React + Vite + Tailwind setup
and identify any existing conventions. - Gather the official logo file,
approved product photos, company profile, and verified contact
details. - Confirm the final page list and whether product categories
and product detail pages are required as outlined in the structure
document. - Ask the owner to verify all service descriptions, especially
installation, maintenance, and servicing.

**Deliverables** - Confirmed project baseline. - Asset and content
inventory. - List of unresolved owner decisions.

**Gate:** Do not begin detailed implementation until the available brand
assets and essential business content are identified.

### Phase 2 --- Design System Setup

**Tasks** - Inspect the official logo and derive the approved palette
from it. - Define Tailwind theme tokens for colors, typography, spacing,
borders, and responsive breakpoints as needed. - Establish heading
hierarchy, body text styles, button treatments, and image presentation
rules. - Define reusable layout patterns while avoiding repetitive,
alternating section templates. - Review the proposed visual system
against the design guidelines.

**Deliverables** - Documented design tokens and base styles. - Approved
typography and component styling direction.

**Gate:** Confirm the visual foundation before building all page
layouts.

### Phase 3 --- Application Shell and Shared Components

**Tasks** - Set up the application entry structure and routing approach
appropriate to the final page count. - Build the shared
header/navigation and footer. - Create reusable components for page
containers, section headings, buttons, cards, breadcrumbs (if needed),
and product tiles. - Ensure shared components use the approved logo
palette and responsive behavior.

**Deliverables** - Working site shell. - Reusable component set. -
Navigation between the agreed pages.

### Phase 4 --- Company Information Pages

**Tasks** - Build the Home page using the approved content and section
order. - Build the About Us page using verified company information. -
Build the Services page using only owner-confirmed services. - Build the
Who We Serve page using the approved audience groups and relevant
content. - Build the Contact page with direct contact methods only; do
not add a contact form. - Add approved phone, email, WhatsApp, and
location details only after the owner supplies and verifies them.

**Deliverables** - Complete first pass of the company information
pages. - Approved copy and contact details integrated.

### Phase 5 --- Product Catalogue

**Tasks** - Agree on the product categories and the minimum information
shown for each product. - Organize product content in a maintainable
frontend data structure suitable for a static site. - Build the
catalogue and category browsing experience. - Build individual product
detail views/pages if retained in the approved sitemap. - Use authentic,
high-quality product photographs provided by FAB; keep image proportions
and cropping consistent without altering product identity. - Add search
or filtering only if it is included in the approved requirements.

**Deliverables** - Product catalogue populated with approved product
information. - Individual product displays using approved imagery.

**Gate:** Do not publish placeholder product names, specifications, or
photos as real inventory.

### Phase 6 --- Responsive and Accessibility Pass

**Tasks** - Check layouts at common mobile, tablet, laptop, and
wide-screen widths. - Verify keyboard navigation, visible focus states,
semantic headings, meaningful link text, and accessible image
descriptions. - Check text contrast against the approved palette. -
Ensure navigation and product browsing remain usable on touch devices. -
Review motion and interaction behavior for clarity and restraint.

**Deliverables** - Responsive refinements. - Accessibility issue list
and fixes.

### Phase 7 --- Quality Assurance and Launch Preparation

**Tasks** - Test every page and navigation path. - Check product links,
direct contact links, image loading, and external links. - Review
content for accuracy, spelling, and consistency with owner-approved
information. - Check for console errors and run the production build. -
Optimize image sizes and formats while preserving visual quality. -
Confirm page titles, metadata, favicon, and social preview information
where required. - Review the completed site with the owner and resolve
launch-blocking feedback.

**Deliverables** - QA checklist and resolved defects. - Successful
production build. - Owner-approved launch candidate.

### Phase 8 --- Handover

**Tasks** - Document how to install dependencies, run the development
server, and build the site. - Explain where product data, images, and
company content are maintained. - Record any known limitations,
outstanding content needs, and future enhancements. - Provide the owner
with the final source code and deployment instructions.

**Deliverables** - Handover notes. - Final source and deployment
guidance.

## 5. Suggested Repository Organization

The exact structure should follow the repository's existing conventions.
A possible organization is:

``` text
src/
  assets/
    images/
    logo/
  components/
  data/
    products/
  pages/
  routes/
  styles/
  App.jsx
  main.jsx
```

Use this as a guide, not a mandate; inspect the existing project before
creating or moving files.

## 6. Content and Asset Checklist

-   [ ] Official logo file in a suitable web format.
-   [ ] Confirmed brand color values sampled from the logo.
-   [ ] Approved company overview and history.
-   [ ] Owner-approved descriptions of products and services.
-   [ ] Confirmation of whether installation, maintenance, and servicing
    are offered.
-   [ ] Product category list.
-   [ ] Product names, descriptions, and verified specifications.
-   [ ] High-quality product photographs with permission to publish.
-   [ ] Verified phone number(s), email address, WhatsApp contact, and
    location details.
-   [ ] Approved business hours, if they will be displayed.
-   [ ] Any required legal or regulatory wording supplied or approved by
    the company.

## 7. Completion Criteria

The implementation is ready for owner review when: - All agreed pages
are present and navigable. - The site uses the approved logo-derived
palette and follows the design guidelines. - Product displays use
verified information and approved images, or clearly remain marked as
development placeholders. - The Contact page contains direct contact
methods and no form. - No unconfirmed manufacturing or service claims
appear. - Core layouts work across mobile, tablet, and desktop sizes. -
Basic accessibility and link checks have been completed. - The
production build completes successfully.

## 8. Open Decisions

Resolve these with the owner or project lead before the related work
begins: 1. Final confirmation of page list and product-detail page
behavior. 2. Product categories and which product fields should be
displayed. 3. Whether catalogue search/filtering is required. 4.
Confirmed services, including installation, maintenance, and servicing.
5. Approved contact details and the exact location wording. 6.
Availability and approval status of product photographs and company
copy. 7. Hosting/deployment destination and domain details.
