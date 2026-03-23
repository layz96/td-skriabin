---
name: td-skriabin QA findings
description: Known bugs and patterns in the Скрябин Керамикс Next.js static site prototype
type: project
---

# td-skriabin Prototype — QA Findings

**Why:** Tested 2026-03-23. Static Next.js site deployed to GitHub Pages at https://layz96.github.io/td-skriabin/

## Critical Bugs

1. **Product images missing on catalog/category/product pages** — All img tags on /catalog, /catalog/[slug], /product/[slug] render as placeholder SVGs. Only the homepage product cards have real images. Root cause: ProductCard component used on inner pages doesn't receive image src prop.

2. **Contacts form bug** — Submitting the "Написать нам" form on /contacts opens a generic consultation modal ("Оставить заявку") instead of showing a success state. The page-level form handler is incorrectly triggering the global modal.

## Known Issues (Minor/Warning)

- **Page titles**: /calculator, /about, /contacts, /catalog/[slug] all use generic homepage title "ТД Скрябин — Премиальные фасадные материалы | Кирпич, брусчатка, плитка" instead of page-specific titles. Only /catalog and /delivery have correct titles.
- **RSC 404**: `/td-skriabin.txt?_rsc=*` returns 404 on every navigation — Next.js RSC prefetch for root route missing trailing slash. Cosmetic console error, no user impact.
- **favicon.ico 404** — Missing favicon at root.
- **Brand logos** — Brands page shows text abbreviations (NE, SU, RE) as placeholders instead of actual brand logos.
- **Breadcrumbs on mobile product page** — Long breadcrumb wraps awkwardly: "/ Кирпич Nelissen Caso" drops to a new line with orphaned slash.
- **Social links** — Telegram (https://t.me/), WhatsApp (https://wa.me/), VK (https://vk.com/) are stub URLs with no actual account paths.

## What Works Well

- Homepage: all images load, hero, categories, product cards correct
- Consultation modal: opens from all buttons, validates required fields, shows success state
- Product page: "Оставить заявку" button opens correct modal with product name pre-filled
- Calculator: both tabs work, calculation is correct, reset works
- Mobile: burger menu opens with full navigation including category subcategories, no horizontal scroll
- Navigation: all internal links use correct /td-skriabin/ prefix
- Breadcrumbs: correct on all pages except mobile wrapping issue
- Footer: consistent across all pages

**How to apply:** When testing future versions, focus first on product images (recurring pattern) and form handlers (global modal conflict).
