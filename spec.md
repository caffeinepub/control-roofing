# Control Roofing Website

## Current State
New project. No existing pages or backend.

## Requested Changes (Diff)

### Add
- 4-page conversion-optimized website for Control Roofing, Visalia CA
- Mobile-first layout with charcoal gray + safety orange color scheme
- Page 1 (Home): Hero section, click-to-call CTA, 5-star social proof, testimonial
- Page 2 (Services): Emergency Leak Repairs, New Roof Installations, Restoration Services sections; 24/7 Open availability emphasis
- Page 3 (About Us): 3+ year history, craftsmanship, community trust narrative
- Page 4 (Contact): Lead capture form (Name, Phone, Address, Roof Issue dropdown), direct contact info, Google Maps embed for Visalia CA
- Persistent navigation header with click-to-call button on all pages
- Footer with phone, hours, address

### Modify
- None

### Remove
- None

## Implementation Plan
1. Backend: Store contact form submissions (Name, Phone, Address, RoofIssue enum)
2. Frontend:
   - Global layout: sticky nav (logo, links, call button), footer
   - Home page: hero with headline/subheadline, CTA call button, star rating badge, testimonial card
   - Services page: three service sections (Emergency, Installation, Restoration) with icons and descriptions, 24/7 badge
   - About page: company story, values, craftsmanship section
   - Contact page: lead form with validation, contact info panel, Google Maps iframe embed
3. Routing: React Router with /home, /services, /about, /contact routes
