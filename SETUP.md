# 🚀 Quick Setup Guide

## Installation Steps

Since npm install was getting stuck, here's the manual approach:

### 1. Install Dependencies

```bash
# Try with npm (might take a while, be patient)
npm install

# OR use yarn if you have it
yarn install

# OR install pnpm first, then use it
npm install -g pnpm
pnpm install
```

**If it's stuck**: Cancel (Ctrl+C) and try again. Sometimes npm has network issues.

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Quick Start

### Edit Content (No Code Required!)

All content is in `/content/spaghettishark/`:

- **strings.json** - All text, hero variants, feature flags
  - Set `"buyEnabled": false` to hide Buy buttons
  - Edit hero headlines in `h1Variants`
  - Change all labels and copy

- **links.json** - External URLs
  - Update Pump.fun, X, Telegram, contract address

- **tokenomics.md** - Token details (shows on /token)
- **roadmap.md** - Roadmap phases (shows on /roadmap)
- **press-kit.md** - Press materials (shows on /press)
- **lore.md** - Extended story (shows on /lore)

### Your Logo

Your `transparentlogo.png` is already integrated! It appears in:
- Header (top left)
- Would show in OG image (if you convert to base64)

To update the logo:
1. Replace `/transparentlogo.png` with new image
2. Keep it square (512x512 or similar) for best results

### Change Colors

Edit `/theme/spaghettishark.ts`:

```typescript
colors: {
  bg: "#0A2334",      // Change background
  fg: "#F4E7D2",      // Change text color
  accent: "#E0342C",  // Change accent (marinara)
  accent2: "#2FA66A", // Change secondary (basil)
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Quick Deploy (3 Steps):

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - New Project → Import your repo
   - Framework: Next.js (auto-detected)
   - Click Deploy

3. **Add Domain** (spaghettishark.xyz):
   - Vercel Dashboard → Domains → Add
   - Follow Vercel's nameserver instructions
   - Update Namecheap with Vercel's nameservers

## 🎯 Testing Features

### A/B Test Hero Variants
- `http://localhost:3000/?variant=a` - First variant
- `http://localhost:3000/?variant=b` - Second variant
- `http://localhost:3000/?variant=c` - Third variant

### Test Buy Button Toggle
In `content/spaghettishark/strings.json`:
```json
"buyEnabled": false  // Hides all Buy CTAs
```

## 🔧 Troubleshooting

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### TypeScript Errors?
Run type check:
```bash
npm run typecheck
```

### Styling Issues?
Rebuild Tailwind:
```bash
npm run build
```

## 📱 Testing on Mobile

```bash
# Find your local IP
ifconfig  # or ipconfig on Windows

# Access from phone on same network
http://YOUR_IP:3000
```

## 🎨 Component Overview

- `KineticType` - Animated hero headlines with parallax
- `RollingStrip` - Scrolling marquee (pauses on hover)
- `MaskWipe` - Section reveal animations
- `BullishMenu` - Menu items with glowing bullets
- `Header` - Sticky nav with scroll effects
- `Footer` - Links and legal text
- `MobileBuyDock` - Mobile bottom CTA

All respect `prefers-reduced-motion` automatically!

## 🚨 Need Help?

Check the main `README.md` for detailed docs.

---

**Ready to launch? Just run `npm install && npm run dev`**
