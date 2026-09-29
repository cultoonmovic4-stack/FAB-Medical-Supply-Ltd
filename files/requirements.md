# FAB Medical Supplies Ltd. --- Website Requirements

## 1. Purpose

This document records the agreed business and website requirements for
the frontend-only FAB Medical Supplies Ltd. website. It separates
established project information from details that still require
confirmation by the owner.

## 2. Business and Audience

FAB Medical Supplies Ltd. operates in Uganda and is involved in
procurement, importation, and supply of medical equipment. FAB does not
manufacture the equipment.

The website is intended to serve the following audiences identified
during project planning:

-   Patients
-   Hospitals
-   Clinics
-   Government health facilities
-   NGOs
-   Laboratories
-   Theatres
-   Pharmacies
-   Individual customers

The site should make the company's offering understandable to both
institutional buyers and individual visitors, without assuming that
every product is suitable for every audience.

## 3. Core Website Requirements

### 3.1 Company information

-   Present the company as a medical equipment procurement, importation,
    and supply business.
-   Use company information provided by the owner and the supplied
    company document as source material.
-   Do not add unsupported claims about company history, market
    position, certifications, partnerships, guarantees, or service
    coverage.

### 3.2 Product catalogue

-   Display actual products individually, not only as category
    summaries.
-   Use genuine, high-quality product photographs supplied by the
    company when they become available.
-   Organize products into clear categories based on the owner's
    approved product list and the categories in the supplied company
    material.
-   Provide an individual product view or detail page for each published
    product.
-   Show only product information confirmed by the owner, such as the
    product name, image, description, and specifications.
-   Provide a clear way for visitors to contact FAB about a product.
-   Do not invent product names, technical specifications, availability,
    pricing, or manufacturer details.

### 3.3 Services

The known core business activities are procurement, importation, and
supply of medical equipment.

Installation, maintenance, and servicing were mentioned as possible
additional offerings, but remain **unconfirmed**. Do not publish them as
established services until the owner confirms exactly what FAB provides.

### 3.4 Contact

-   Include a dedicated Contact page.
-   Do not include a contact form on that page.
-   Provide direct contact methods using details approved by the owner,
    such as telephone, email, WhatsApp, and business location where
    available.
-   Use functional links for supported contact methods (for example,
    click-to-call, email, or WhatsApp) once the actual contact
    information is supplied.
-   Do not invent contact details or a map location.

### 3.5 Navigation and usability

-   Provide clear navigation between the main website areas.
-   Make the product catalogue easy to browse by category and individual
    product.
-   Keep important contact options easy to find.
-   Ensure that content and controls remain usable on mobile, tablet,
    and desktop screens.

## 4. Functional Requirements

  -----------------------------------------------------------------------
  ID                                  Requirement
  ----------------------------------- -----------------------------------
  FR-01                               Visitors can navigate to the main
                                      website pages from a clear site
                                      navigation.

  FR-02                               Visitors can browse the product
                                      catalogue by approved categories.

  FR-03                               Visitors can view individual
                                      products with their approved images
                                      and available details.

  FR-04                               Visitors can use direct contact
                                      links to reach FAB, where the owner
                                      has supplied the required contact
                                      details.

  FR-05                               The layout adapts to mobile,
                                      tablet, and desktop screen sizes.

  FR-06                               Product content is stored in a
                                      maintainable frontend data
                                      structure for straightforward
                                      updates.

  FR-07                               The website does not depend on a
                                      backend, database, user account, or
                                      admin dashboard in this version.

  FR-08                               The Contact page has no contact
                                      form.
  -----------------------------------------------------------------------

## 5. Non-Functional Requirements

-   **Professional presentation:** The website should communicate a
    credible, organized medical equipment supplier.
-   **Responsive design:** Pages and product displays should work across
    common screen sizes.
-   **Accessibility:** Use semantic structure, readable contrast,
    descriptive image alternatives, keyboard-accessible controls, and
    visible focus states.
-   **Performance:** Optimize image sizes and avoid unnecessary scripts
    or heavy visual effects.
-   **Maintainability:** Keep components and catalogue data organized so
    content can be updated without rewriting page layouts.
-   **Accuracy:** All public-facing company and product claims must be
    supported by owner-approved information.
-   **Brand consistency:** Use the colors from the official FAB logo as
    the brand source; record exact color values in the design guidelines
    after sampling the approved logo asset.

## 6. Technical Constraints

-   Frontend framework: React
-   Build tool: Vite
-   Styling: Tailwind CSS
-   Backend: none
-   Database: none
-   Contact form: excluded
-   Online ordering and payment: excluded unless separately agreed as a
    future scope

## 7. Owner Confirmation Checklist

The following items need confirmation or source material before the
related content is published:

-   [ ] Official company name styling and approved company description
-   [ ] Final list of products and categories
-   [ ] Product-to-image matching for the supplied photographs
-   [ ] Approved product descriptions and technical specifications
-   [ ] Current telephone and WhatsApp contact details
-   [ ] Official email address
-   [ ] Business address and whether a map should be shown
-   [ ] Exact scope of installation, maintenance, and servicing, if
    offered
-   [ ] Delivery areas and any relevant delivery conditions
-   [ ] Approved manufacturers/brands, if they may be named or displayed
-   [ ] Any certificates, licenses, testimonials, or client/project
    references intended for publication

## 8. Acceptance Criteria

The website requirements will be considered met when:

1.  The site accurately presents FAB as a Uganda-based medical equipment
    procurement, importation, and supply business, without describing it
    as a manufacturer.
2.  Visitors can browse approved product categories and open individual
    product details.
3.  Published product images and information correspond to the owner's
    approved materials.
4.  The Contact page provides direct contact options and contains no
    form.
5.  The website works across mobile, tablet, and desktop layouts.
6.  The implementation remains frontend-only and uses the agreed React,
    Vite, and Tailwind CSS stack.
7.  Unconfirmed service or company claims are omitted until approved by
    the owner.
