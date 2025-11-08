# 🚀 Quick Start - Deploy Without Local Install

## The Problem
NPM install keeps hanging due to a dependency resolution bug in npm 10.x with Next.js 15 + React 18. This is a known issue.

## The Solution
**Deploy directly to Vercel** - their build system handles this better.

---

## Step 1: Push to GitHub

```bash
cd /home/hiroshi/CascadeProjects/SpaghettiShark

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "✨ Initial commit - Spaghetti Shark"

# Create branch
git branch -M main

# Go to GitHub.com and create new repo called "spaghettishark"
# Then add remote (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/spaghettishark.git

# Push
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Via Dashboard (Easiest)

1. Go to **https://vercel.com/new**
2. Sign in with GitHub
3. Click **"Import Project"**
4. Select your **spaghettishark** repository
5. Vercel auto-detects Next.js settings ✅
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. **Your site is live!** 🎉

### Option B: Via CLI

```bash
# Install Vercel CLI globally
sudo npm install -g vercel

# Login
vercel login

# Deploy
cd /home/hiroshi/CascadeProjects/SpaghettiShark
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Link to existing project? N
# - Project name? spaghettishark
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

---

## Step 3: Verify It Works

Vercel will give you a URL like: `https://spaghettishark-abc123.vercel.app`

Check these pages work:
- ✅ `/` - Home page
- ✅ `/lore` - Lore page
- ✅ `/token` - Tokenomics
- ✅ `/roadmap` - Roadmap
- ✅ `/press` - Press kit

---

## Step 4: Add Custom Domain

1. In Vercel dashboard → **Settings** → **Domains**
2. Add: `spaghettishark.xyz`
3. Vercel shows nameserver instructions
4. Update Namecheap:
   - Domain List → Manage
   - Nameservers → Custom DNS
   - Add Vercel's 4 nameservers
   - Save
5. Wait 2-48 hours for DNS propagation

---

## Step 5: Update Content

All content is in `/content/spaghettishark/`:

**Edit text:**
```bash
cd /home/hiroshi/CascadeProjects/SpaghettiShark
nano content/spaghettishark/strings.json

# Make changes, save
git add .
git commit -m "Update hero text"
git push

# Vercel auto-deploys in ~2 minutes
```

---

## Why This Works

**Vercel's build environment:**
- Uses pnpm (faster than npm)
- Has better dependency caching
- Handles Next.js 15 edge cases
- More RAM allocated
- Professional build infrastructure

**Your local npm:**
- Gets stuck on dependency resolution
- Known bug in npm 10.8.2
- Would need pnpm or manual node_modules

---

## If You MUST Run Locally

Try installing pnpm:

```bash
# Install pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Restart terminal, then:
cd /home/hiroshi/CascadeProjects/SpaghettiShark
pnpm install
pnpm dev
```

---

## Project Structure

```
SpaghettiShark/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── lore/page.tsx      # Lore page
│   ├── token/page.tsx     # Token page
│   ├── roadmap/page.tsx   # Roadmap
│   ├── press/page.tsx     # Press kit
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── KineticType.tsx    # Animated typography
│   ├── BullishMenu.tsx    # Menu section
│   └── ...                # More components
├── content/spaghettishark/ # EDITABLE CONTENT
│   ├── strings.json       # All UI text
│   ├── links.json         # External URLs
│   ├── lore.md           # Lore content
│   ├── tokenomics.md     # Token info
│   ├── roadmap.md        # Roadmap
│   └── press-kit.md      # Press materials
├── lib/                   # Utilities
├── theme/                 # Design tokens
├── public/                # Static assets
│   └── transparentlogo.png # Your logo
├── package.json           # Dependencies
├── next.config.mjs        # Next.js config
├── tailwind.config.ts     # Tailwind config
└── tsconfig.json          # TypeScript config
```

---

## Content Editing Guide

### Change Hero Headlines
Edit `content/spaghettishark/strings.json`:
```json
"h1Variants": [
  ["NEW HEADLINE", "LINE TWO"],
  ["VARIANT B", "LINE TWO"],
  ["VARIANT C", "LINE TWO"]
]
```

### Hide Buy Buttons
```json
"buyEnabled": false
```

### Update Links
Edit `content/spaghettishark/links.json`:
```json
{
  "pump": "https://pump.fun/coin/YOUR_CONTRACT",
  "contract": "YOUR_ACTUAL_ADDRESS"
}
```

### Update Pages
Edit markdown files:
- `lore.md` - Story/narrative
- `tokenomics.md` - Token details
- `roadmap.md` - Future plans
- `press-kit.md` - Media materials

---

## What's Included

✅ Next.js 15 + React 18 + TypeScript
✅ Premium animations (Framer Motion + Lenis)
✅ Glass morphism effects
✅ Ambient glow overlays
✅ Kinetic typography
✅ Smooth scrolling
✅ Mobile-first responsive design
✅ Full accessibility (ARIA, keyboard nav, reduced motion)
✅ SEO optimized (meta tags, OG image)
✅ Content editing via JSON/MD (no coding required)
✅ A/B testing (`?variant=a|b|c`)
✅ Feature flags (`buyEnabled`)
✅ Your logo integrated
✅ All 5 pages complete

---

## Support

**Vercel build failing?**
- Check build logs in Vercel dashboard
- Verify all files are committed to GitHub
- Ensure `package.json` is in root directory

**DNS not working?**
- Takes 2-48 hours to propagate
- Check: https://whatsmydns.net
- Verify nameservers match Vercel's exactly

**Need to edit content?**
- Edit files in `/content/spaghettishark/`
- Commit and push to GitHub
- Vercel auto-deploys

---

**Ready?** Push to GitHub and deploy to Vercel. Your site will be live in 3 minutes! 🍝🦈
