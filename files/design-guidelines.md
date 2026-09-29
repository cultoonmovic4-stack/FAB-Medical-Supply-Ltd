# FAB Medical Supplies Ltd. --- Design Guidelines

## 1. Purpose and Design Philosophy

These guidelines define the visual and interaction standards for the FAB
Medical Supplies Ltd. website. The design must feel human-made:
intentional, clear, professional, and appropriate for a medical
equipment procurement, importation, and supply company.

The goal is not to imitate generic "modern" website trends. The design
should rely on strong fundamentals---layout, hierarchy, typography,
genuine photography, spacing, and usability---rather than decorative
effects.

**Core principle:** Every visual element must have a clear purpose and
support the brand, content, or visitor task.

## 2. Non-Negotiable Restrictions

The following are not permitted in the project:

-   AI-generated images, illustrations, icons, logos, or other visual
    assets.
-   Gradients of any kind, including gradient backgrounds, text,
    borders, and buttons.
-   Glassmorphism, frosted-glass panels, blurred translucent cards, or
    similar treatments.
-   AI-style visual effects such as artificial glow, excessive blur,
    neon lighting, floating decorative shapes, or synthetic-looking
    overlays.
-   Random or trend-driven colors that are not part of the approved
    brand palette or necessary accessible neutrals.
-   Generic, repetitive template layouts that make sections feel
    automatically generated.
-   Decorative animation or motion that does not improve usability or
    communicate meaningful state.

Do not add these elements simply because a template, component library,
or design reference includes them.

## 3. Brand Identity and Color

### 3.1 Source of truth

Use the official FAB logo supplied by the company as the source for the
brand palette. The logo and company document indicate a blue, red, and
white identity.

Exact HEX/RGB values must be sampled from the original approved logo
file before being finalized in code. Do not rely on guessed color values
or colors sampled from a screenshot, compressed preview, or unrelated
asset if the original logo is available.

### 3.2 Palette use

-   **Brand blue:** Main brand color for key structural elements and
    selected emphasis, as appropriate to the sampled logo shade.
-   **Brand red:** Restrained accent for important actions or
    highlights; avoid using it as a large, overwhelming surface color.
-   **White:** Main clean surface and breathing space.
-   **Neutrals:** Use a small, consistent set of accessible neutral
    colors for text, borders, and subtle surface separation. Neutrals
    should support the logo palette rather than introduce a competing
    identity.

Create named color tokens in the Tailwind theme/configuration once the
exact values are approved. Do not scatter one-off color values
throughout components.

## 4. Typography

-   Choose a readable, professional typeface suitable for a corporate
    medical-supply website.
-   Use a clear type hierarchy for page titles, section headings,
    product names, body copy, labels, and supporting details.
-   Keep paragraph measure comfortable for reading; avoid overly wide
    text blocks.
-   Use consistent font weights and sizes rather than styling each
    section independently.
-   Avoid excessive all-caps text, decorative display fonts, and
    unnecessarily tight letter spacing.
-   Ensure body text remains legible on mobile screens and maintains
    sufficient contrast.

The final font family and type scale will be selected during visual
design and recorded as shared tokens.

## 5. Layout and Composition

-   Use a consistent spacing system and align content to a deliberate
    grid.
-   Give content enough white space to remain easy to scan, especially
    around product photography and technical details.
-   Vary section composition intentionally; do not repeat the same
    left-text/right-image pattern throughout the page.
-   Use visual hierarchy to distinguish company information, category
    browsing, individual products, and contact actions.
-   Keep layouts practical and content-led. Do not add empty sections or
    decorative blocks just to fill space.
-   Use solid-color surfaces and simple borders where separation is
    needed; no gradients or glass effects.
-   Keep navigation and key actions predictable and easy to locate.

## 6. Photography and Product Imagery

-   Use genuine, high-quality product and company photographs supplied
    or approved by FAB.
-   Match each image to the correct product and use the approved product
    name.
-   Do not generate, fabricate, or materially alter product images in
    ways that could misrepresent the equipment.
-   Avoid stock imagery when authentic company/product photography is
    available; any additional image must be approved and accurately
    represent its subject.
-   Use consistent image ratios and considered cropping, while
    preserving the equipment and important visible details.
-   Provide meaningful alt text for informative images and empty alt
    text for purely decorative images.
-   Do not add fake device screens, labels, branding, or specifications
    to product photography.

## 7. Icons and UI Elements

-   Prefer clear text labels over unnecessary icons.
-   If an icon is genuinely useful, use a consistent, established,
    appropriately licensed icon set or an approved human-designed asset.
    Do not use AI-generated icons.
-   Do not use emoji as interface icons.
-   Keep buttons clearly labeled, with consistent shape, spacing, and
    interaction states.
-   Product cards should prioritize the actual product image, accurate
    name, useful short information, and an obvious detail action.
-   Avoid decorative badges such as "Best Seller," "In Stock,"
    "Certified," or "New" unless accurate and explicitly approved by the
    owner.
-   Use familiar interface patterns when they improve usability;
    originality should come from thoughtful composition, not confusing
    controls.

## 8. Motion and Interaction

-   Motion must be functional, subtle, and purposeful.
-   Use simple hover, focus, pressed, and selected states to communicate
    interaction.
-   Respect reduced-motion preferences.
-   Do not use bouncing, floating, pulsing, glowing, parallax-heavy, or
    continuously moving decorative elements.
-   Avoid scroll-triggered animation that delays access to content or
    makes the site feel theatrical.
-   Ensure interactive elements work with keyboard and touch input, not
    only mouse hover.

## 9. Responsive Design

-   Design for mobile, tablet, laptop, and large desktop layouts.
-   Reflow navigation, product grids, and page sections cleanly at
    smaller widths.
-   Keep tap targets comfortably usable and avoid tightly packed
    controls.
-   Prevent horizontal overflow, clipped product details, and unreadably
    small text.
-   Check real content lengths and actual product images at each
    responsive breakpoint.
-   Do not treat mobile as a shrunken desktop layout; prioritize the
    most important content and actions for smaller screens.

## 10. Accessibility and Usability

-   Use semantic HTML structure and a logical heading order.
-   Provide sufficient color contrast for text and controls.
-   Ensure visible keyboard focus and keyboard-accessible navigation and
    actions.
-   Label links and buttons clearly; do not rely on icon shape or color
    alone to communicate meaning.
-   Provide appropriate alt text for meaningful images.
-   Make error, active, and selected states understandable without
    relying only on color.
-   Keep text readable and interactions straightforward for visitors
    with different levels of technical familiarity.

## 11. Consistency and Implementation

-   Define shared design tokens for brand colors, typography, spacing,
    borders, radii, and responsive breakpoints.
-   Build reusable components for shared patterns such as navigation,
    footer, buttons, and product cards.
-   Reuse components to preserve consistency, but allow purposeful
    layout variation where the content calls for it.
-   Keep content and product data separate from presentation where
    practical.
-   Avoid adding a UI library or visual effects package solely for
    decoration.
-   Review every page against these guidelines before considering it
    complete.

## 12. Design Review Checklist

Before approving a page or section, check:

-   [ ] Does the design use the actual approved FAB logo palette?
-   [ ] Are exact brand color values sampled from the approved logo
    asset?
-   [ ] Are all images genuine and approved, and do they accurately
    represent the product?
-   [ ] Are there no AI-generated visual assets?
-   [ ] Are there no gradients, glassmorphism, glows, or artificial
    visual effects?
-   [ ] Is each layout choice purposeful rather than repetitive or
    template-driven?
-   [ ] Is typography clear, consistent, and readable?
-   [ ] Are spacing and alignment deliberate?
-   [ ] Are buttons, links, and navigation clearly labeled and usable?
-   [ ] Does the page work at mobile, tablet, and desktop sizes?
-   [ ] Are accessibility basics, including contrast, alt text, and
    keyboard focus, covered?
-   [ ] Does the page communicate accurate, owner-approved information
    only?
