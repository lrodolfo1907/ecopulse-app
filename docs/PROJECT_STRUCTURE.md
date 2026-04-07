# EcoPulse Project Structure & Architecture

## Overview
This document explains the folder layout and reasoning behind architectural decisions for the EcoPulse prototype.

## Directory Layout

```
ec Pulse-application/
├── public/                          # Static web assets (GitHub Pages root)
│   ├── index.html                   # Main prototype UI
│   ├── styles.css                   # Custom styling layer
│   └── js/
│       └── app.js                   # JavaScript for interactivity
├── docs/                            # Documentation & context
│   ├── PROJECT_STRUCTURE.md         # This file
│   └── PRODUCT_VISION.md            # Product strategy
├── README.md                        # Project overview & quick start
├── CONTRIBUTING.md                  # Contributor guidelines
└── .gitignore                       # Git exclusions
```

## Key Architectural Decisions

### 1. Static HTML + Tailwind CDN (vs. React/Vue)

**Decision**: Keep prototype as vanilla HTML + TailwindCSS CDN.

**Why**:
- Zero build step = instant feedback
- Lower barrier to entry
- Perfect for rapid UI iteration
- GitHub Pages works out-of-the-box

**When to reconsider**:
- If we need state management (Redux, Pinia)
- If we add API integration and want data reactivity
- If UI becomes too complex for vanilla JS

**Migration path**: Convert to React in Phase 2-3 when backend is planned.

### 2. `public/` Folder for GitHub Pages

**Decision**: Web-servable files live in `public/`.

**Why**:
- GitHub Pages defaults to `docs/` or root → we chose convention
- Keeps separation: non-web files live at root
- Follows Next.js, Remix conventions

**Setup**:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / Folder: `public/`

### 3. Separate `styles.css`

**Decision**: Keep custom styles separate from Tailwind.

**Why**:
- TailwindCSS handles 95% via utility classes
- Remaining 5% (animations, brand tweaks) go here
- Cleaner than inline styles
- Scales better as design grows

### 4. Modularized JavaScript

**Decision**: Extract inline scripts → `public/js/app.js`

**Why**:
- Easier for Copilot to suggest improvements
- Cleaner HTML
- Testable (can add Jest later)
- Scales better as interactivity grows

## Assumptions

- ✅ No authentication yet (data is frontend-only)
- ✅ Single-page prototype (tabs, not multi-page routing)
- ✅ Mobile-first, responsive design
- ✅ English-only for now (i18n in Phase 3)

## Future Evolution

### Phase 2: Interactivity
- Build out Portfolio, Profile pages
- Add modal/sheet components
- Implement form logic

### Phase 3: Backend
- API endpoints for opportunities
- User profiles & authentication
- Impact hour tracking

### Phase 4+: Scale
- GenAI recommendations
- Career integrations
- Mobile app (React Native/Flutter)

## Questions?
See CONTRIBUTING.md for guidelines on extending this structure.