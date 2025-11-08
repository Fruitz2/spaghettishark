# 🍝🦈 Spaghetti Shark

**Carb up. Bite harder.**

An award-winning, production-grade website for Spaghetti Shark — the carb-loaded apex predator of crypto. Built with Next.js 15, featuring cinematic typography, buttery-smooth animations, and zero images (except the logo). 

## ✨ Features

- **🎨 Award-Caliber Design**: Logo-only visual system with kinetic typography, smooth scroll, and tasteful micro-interactions
- **📝 Content-First Architecture**: All text lives in editable JSON/MD files — no React knowledge required to update content
- **⚡ Performance Optimized**: <180KB JS bundle, LCP <2s, CLS <0.05, optimized for mobile-first experience
- **♿ Accessibility First**: Keyboard navigation, ARIA labels, focus-visible states, and full `prefers-reduced-motion` support
- **🔍 SEO Ready**: Dynamic OG images, semantic HTML, proper meta tags, sitemap-ready
- **🎯 A/B Testing Built-In**: Hero variants with query param locking (`?variant=a|b|c`)
- **🚀 Deploy-Ready**: Optimized for Vercel with GitHub integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript + React 19 RC
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Components**: shadcn/ui (Button, Card, Tabs, Tooltip, Separator)
- **Motion**: Framer Motion + Lenis Smooth Scroll + GSAP
- **Content**: Gray Matter + React Markdown
- **Quality**: ESLint + Prettier + Husky + lint-staged
- **Fonts**: Space Grotesk (display) + Inter (body)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Install Dependencies

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Other Commands

```bash
pnpm build       # Build for production
pnpm start       # Start production server
pnpm typecheck   # Run TypeScript checks
pnpm lint        # Lint code
pnpm format      # Format code with Prettier
```

## 📝 Content Editing

All content is stored in `/content/spaghettishark/` and can be edited without touching code:

### `strings.json`
- All UI text, hero variants, CTAs, section content
- **Feature flag**: `buyEnabled` (true/false) — instantly shows/hides Buy CTAs
- Menu labels, footer text, tooltips

### `links.json`
- External URLs (Pump.fun, X/Twitter, Telegram, contract address)

### `tokenomics.md`
- Token supply, taxes, treasury info
- Rendered verbatim on `/token` page

### `roadmap.md`
- Phased roadmap with bullish menu items
- Rendered on `/roadmap` page

### `press-kit.md`
- One-liners, taglines, logo usage guidelines
- Rendered on `/press` page

### `lore.md`
- Extended narrative and backstory
- Rendered on `/lore` page

## 🎨 Theme Customization

Colors and design tokens are defined in `/theme/spaghettishark.ts`:

```typescript
export const theme = {
  colors: {
    bg: "#0A2334",      // deep sea
    fg: "#F4E7D2",      // pasta cream
    accent: "#E0342C",  // marinara
    accent2: "#2FA66A", // basil
    // ... more colors
  },
  // ... fonts, radius, shadows
};
```

Update this file to change the entire color scheme.

## 🧪 A/B Testing

Hero headlines have 3 variants that randomly display. Lock a specific variant using:

- `?variant=a` → First variant
- `?variant=b` → Second variant  
- `?variant=c` → Third variant

Edit variants in `content/spaghettishark/strings.json` under `hero.h1Variants`.

## 🌐 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Spaghetti Shark"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/spaghettishark.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **Framework Preset**: Next.js (auto-detected)
5. **Build Command**: `next build` (default)
6. **Output Directory**: `.next` (default)
7. Click "Deploy"

### 3. Domain Setup (Namecheap)

#### Option A: Use Vercel DNS (Recommended)

1. In Vercel, go to your project → Settings → Domains
2. Add `spaghettishark.xyz`
3. Vercel will show you 4 nameservers (e.g., `ns1.vercel-dns.com`)
4. In Namecheap:
   - Go to Domain List → Manage
   - Select "Custom DNS" under Nameservers
   - Enter the 4 Vercel nameservers
5. Wait 24-48 hours for DNS propagation

#### Option B: Keep Namecheap DNS

1. In Namecheap, go to Advanced DNS
2. Add these records:
   - **Type**: CNAME, **Host**: `@`, **Value**: `cname.vercel-dns.com`
   - **Type**: CNAME, **Host**: `www`, **Value**: `cname.vercel-dns.com`
3. In Vercel, add both `spaghettishark.xyz` and `www.spaghettishark.xyz`
4. Verify in Vercel dashboard

## 📱 Mobile Optimization

- Mobile-first design with responsive breakpoints
- Sticky bottom "Buy" dock on mobile (auto-hides when scrolled to top)
- Touch-friendly tap targets (minimum 44x44px)
- Optimized animations for lower-powered devices

## ♿ Accessibility Features

- Semantic HTML5 landmarks
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus-visible indicators
- 4.5:1 text contrast ratio
- Full `prefers-reduced-motion` support (disables animations)
- Skip-to-content link

## ⚡ Performance Features

- Optimized font loading with `font-display: swap`
- Code splitting and lazy loading
- Optimized package imports (Framer Motion, Lucide)
- Minimal JavaScript bundle (<180KB)
- Static generation for markdown pages
- Image optimization (AVIF/WebP)
- Lenis smooth scroll (optional, disabled on reduced motion)

## 🎭 Motion & Animation

All animations respect `prefers-reduced-motion`:

- **KineticType**: Hero headline with spring animation + parallax
- **RollingStrip**: Marquee with pause-on-hover
- **MaskWipe**: Section reveals with radial gradient mask
- **TextTrail**: Gradient underline on link hover
- **Background Pulse**: Giant wordmark outline with opacity animation

## 🔧 Customization

### Add New Pages

1. Create a markdown file in `/content/spaghettishark/`
2. Create a page route in `/app/your-page/page.tsx`
3. Use the markdown rendering pattern from existing pages

### Add New Components

1. Create component in `/components/`
2. Import and use in pages
3. Follow existing patterns for motion and accessibility

### Modify Colors

Edit `/theme/spaghettishark.ts` and update CSS variables in `/app/globals.css`

## 📄 License

This is a custom project. Use the code as you wish. The Spaghetti Shark brand and content are property of the project owner.

## 🦈 Support

For issues or questions:
- X/Twitter: [@spaghettishark](https://x.com/spaghettishark)
- Telegram: [t.me/spaghettishark](https://t.me/spaghettishark)

---

**Built with 🍝 and 🦈 by pasta-loving degens**

*Zero promises. 100% pasta.*
