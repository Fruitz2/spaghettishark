# 🚀 Complete Deployment Guide

## Part 1: Local Hosting Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
cd /home/hiroshi/CascadeProjects/SpaghettiShark

# Try npm first
npm install
```

**If npm hangs or fails:**
```bash
# Press Ctrl+C to cancel
# Wait 5 seconds
# Try again
npm install

# OR use yarn if you have it
yarn install
```

**Expected time:** 2-5 minutes depending on your internet connection.

### Step 2: Start Development Server

Once installation completes:

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.0.3
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Step 3: View Your Site

Open your browser and go to:
**http://localhost:3000**

You should see:
✅ Your logo in the header
✅ Animated hero with kinetic typography
✅ Smooth scrolling effects
✅ Premium glass morphism cards
✅ Ambient glow effects
✅ All the buttery animations

### Troubleshooting Local Issues

**Problem: Port 3000 is already in use**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

**Problem: Build errors**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

---

## Part 2: Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free) - sign up at [vercel.com](https://vercel.com)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "✨ Spaghetti Shark - Premium carb-loaded website"

# Create main branch
git branch -M main

# Add your GitHub repository
# First, create a new repo on GitHub.com called "spaghettishark"
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/spaghettishark.git

# Push to GitHub
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy to Vercel (Method 1: Dashboard)

1. **Go to [vercel.com/new](https://vercel.com/new)**

2. **Import Git Repository:**
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find "spaghettishark" repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected) ✅
   - **Root Directory:** ./ (default)
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)
   
   Leave all defaults as-is!

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - 🎉 Your site is live!

5. **Get Your URL:**
   - Vercel will give you: `spaghettishark-xxxx.vercel.app`
   - Visit it to see your live site!

### Step 2: Deploy to Vercel (Method 2: CLI)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? spaghettishark
# - In which directory is your code located? ./
# - Want to modify settings? N

# Deploy to production
vercel --prod
```

### Step 3: Add Custom Domain (spaghettishark.xyz)

#### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**

2. Click **Add Domain**

3. Enter: `spaghettishark.xyz`

4. Vercel will show you nameserver instructions

#### In Namecheap:

**Option A: Use Vercel Nameservers (Recommended)**

1. Log in to [namecheap.com](https://namecheap.com)
2. Go to **Domain List** → **Manage** (for spaghettishark.xyz)
3. Find **Nameservers** section
4. Select **Custom DNS**
5. Add these 4 Vercel nameservers (from Vercel dashboard):
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```
6. Click **Save**
7. Wait 24-48 hours for DNS propagation

**Option B: Keep Namecheap DNS (Faster)**

1. In Namecheap → **Advanced DNS**
2. Add these records:
   
   **A Record:**
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: Automatic
   
   **CNAME Record:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: Automatic

3. In Vercel, verify both:
   - `spaghettishark.xyz`
   - `www.spaghettishark.xyz`

4. Wait 1-2 hours for DNS propagation

### Step 4: Verify Deployment

Check these URLs:
- ✅ `https://spaghettishark.xyz` (your custom domain)
- ✅ `https://www.spaghettishark.xyz` (www version)
- ✅ `https://spaghettishark-xxxx.vercel.app` (Vercel URL)

All should show your beautiful site!

---

## Part 3: Update Content

### Edit Text Without Coding

All content lives in `/content/spaghettishark/`:

**To change hero headlines:**
```json
// strings.json
"h1Variants": [
  ["NEW LINE 1", "NEW LINE 2"],
  ["VARIANT B LINE 1", "VARIANT B LINE 2"],
  ["VARIANT C LINE 1", "VARIANT C LINE 2"]
]
```

**To hide Buy buttons:**
```json
"buyEnabled": false
```

**To update links:**
```json
// links.json
{
  "pump": "https://pump.fun/coin/YOUR_CONTRACT",
  "contract": "YOUR_ACTUAL_CONTRACT_ADDRESS"
}
```

### Deploy Updates

```bash
# Make your changes
# Save files

# Commit and push
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys! 🚀
# Check your site in ~2 minutes
```

---

## Part 4: Monitor and Optimize

### Check Performance

1. **Vercel Analytics** (Free)
   - Go to your project → Analytics
   - See real-time visitors, page views

2. **Lighthouse Score**
   - Open site in Chrome
   - F12 → Lighthouse tab
   - Run audit
   - Aim for 90+ in all categories

3. **Web Vitals**
   - Vercel automatically tracks:
     - LCP (Largest Contentful Paint) - Target: <2.5s
     - FID (First Input Delay) - Target: <100ms
     - CLS (Cumulative Layout Shift) - Target: <0.1

### Common Optimizations

**If images load slowly:**
- Use WebP format
- Compress images with [tinypng.com](https://tinypng.com)

**If fonts flash:**
- Already optimized with `font-display: swap`

**If JS bundle is large:**
- Already optimized with code splitting

---

## Quick Reference Commands

```bash
# Local development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Deployment
git add .                # Stage changes
git commit -m "message"  # Commit changes
git push                 # Deploy to Vercel (auto)

# Vercel CLI
vercel                   # Deploy preview
vercel --prod            # Deploy to production
vercel logs              # View deployment logs
```

---

## Need Help?

**Common Issues:**

1. **Site not updating after push?**
   - Check Vercel dashboard → Deployments
   - See if build succeeded
   - Check build logs for errors

2. **Domain not working?**
   - DNS takes 1-48 hours to propagate
   - Check: [whatsmydns.net](https://whatsmydns.net)
   - Verify nameservers match Vercel's

3. **Build failing?**
   - Check Vercel logs
   - Ensure `package.json` is committed
   - Test locally with `npm run build`

---

## Success Checklist

- ✅ Site runs locally on http://localhost:3000
- ✅ Code pushed to GitHub
- ✅ Deployed to Vercel successfully
- ✅ Custom domain connected
- ✅ HTTPS enabled (automatic)
- ✅ Content editable via JSON/MD files
- ✅ Analytics tracking

**You're live! 🍝🦈**
