# TELUS Digital Candidate Campaign Audit

Audit date: 2026-07-14  
Candidate: Russell Dudek  
Target role: Managing Director, CX AI Delivery  
Target company: TELUS Digital

## Campaign argument

**Redesign the workshare. Compound the delivery advantage.**

The campaign positions the role as a practice-building mandate: convert TELUS Digital's CX operating scale, AI and data capabilities, platform ecosystem and forward-deployed delivery model into repeatable client outcomes, attractive delivery economics and reusable practice leverage. The central operating mechanism is the candidate-created CX AI Workshare Map.

## Artifact contract

| Artifact | Contract | Result |
|---|---:|---|
| Candidate vision | Responsive website with meaningful interaction | Pass |
| Resume | Exactly 2 US Letter pages | Pass |
| Cover letter | Exactly 1 US Letter page | Pass |
| Interview thesis brief | 4 US Letter pages | Pass |
| 120-day entry plan | 2 US Letter pages | Pass |
| CX AI Portfolio Investment Memo | Exactly 1 US Letter landscape page | Pass |

All five PDFs contain selectable text, embedded fonts, working mail/LinkedIn/candidate-site links and the required candidate contact information.

## Evidence integrity

- Career chronology is current roles first, followed by completed roles in descending end-date order.
- Quantified candidate claims are limited to verified evidence: approximately 1,000 fielded robots, approximately five million second-day orders annually, 100% safety/no FAA incidents and a $200 million feasibility concept.
- No direct ownership of a global contact-center AI P&L, Partner-level consultancy tenure or specialist CCaaS platform tenure is claimed.
- The strongest plausible objection is addressed explicitly in the website, resume, cover letter and interview brief.
- Company-specific recommendations that are not publicly documented are labeled as candidate hypotheses or proposed operating mechanisms.

## Brand fidelity

- Official TELUS Digital header wordmark fetched from the current official website and committed without modification.
- Official TELUS design-system colors and Helvetica Neue typography behavior are documented in `brand-intelligence.md` and implemented through `brand-tokens.css`.
- Employer identity is used only for nominative identification and remains secondary to the candidate thesis.
- Every surface identifies the work as an independent candidate product; no endorsement is implied.

## Browser and interaction validation

The site was rendered with Playwright and system Chromium using self-contained in-memory pages because the managed browser policy blocked local HTTP and file navigation.

Validated viewport sizes:

- 1440 x 900
- 1280 x 800
- 768 x 1024
- 390 x 844

Results:

- No horizontal overflow at any tested candidate-vision viewport.
- Mobile overflow defects in the portfolio decision table and landscape memo route were found and repaired.
- All five document routes reflow without horizontal overflow at 390 x 844.
- TELUS Digital logo renders above the fold and on every document route.
- Four portfolio scenarios update the Workshare Map and executive readout.
- Workshare, delivery and economics lenses update the explanatory state.
- Scenario controls support click, Left/Right Arrow, Home and End keyboard behavior.
- Mobile navigation opens and updates `aria-expanded`.
- Reduced-motion mode resolves animation immediately.
- No console errors or uncaught page errors were observed.

## PDF validation

- Page geometry verified with `pdfinfo`.
- All 10 committed PDF pages were rasterized with the official PDF rendering script and visually inspected.
- No clipping, overlap, missing logo, accidental blank page or microscopic resume typography remained after correction.
- PDF text, metadata and URI annotations were scanned for candidate-facing confidentiality violations.

## Accessibility and source validation

- Skip link, semantic headings, visible focus states, keyboard-operable scenario controls and reduced-motion behavior are present.
- Duplicate-ID, missing-H1, missing-alt and broken local-link checks passed across every HTML route.
- Reciprocal Resume / Cover Letter navigation is present.
- Required contact values appear in both the resume and cover letter.
- Source QA passes through `tests/site_qa.py` and is enforced in the GitHub Pages workflow.

## Candidate-facing confidentiality

Public source, filenames, Markdown, JSON, SVG, HTML, CSS, JavaScript, PDF text and PDF metadata were scanned case-insensitively. No private campaign-system label appears in the candidate-facing package.

## Visual differentiation

The campaign does not reuse a constellation, control tower, delivery weave, activation membrane, signal mixer, architecture permit or generic AI dashboard. Its reserved fingerprint is:

- a 64-cell CX interaction portfolio;
- four workshare states: Human-led, Assistive, Conversational and Agentic;
- a diagonal human-authority boundary;
- Workshare / Delivery / Economics decision lenses;
- Invest / Sequence / Partner / Stop portfolio decisions.

## Publication package

The public tree is intentionally limited to the candidate-facing routes, PDFs, official logo, brand and source documentation, manifest, audit, source QA and two GitHub workflows. Local generation scripts, implementation planning notes and QA screenshots are excluded from publication.
