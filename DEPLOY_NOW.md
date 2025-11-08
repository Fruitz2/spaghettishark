# 🚀 DEPLOY SPAGHETTI SHARK NOW - 3 SIMPLE STEPS

## Step 1: Get GitHub Token (2 minutes)

1. Open: **https://github.com/settings/tokens/new**
2. Fill in:
   - **Note:** SpaghettiShark Deploy
   - **Expiration:** 30 days
   - **Scopes:** Check these boxes:
     - ✅ repo (Full control of private repositories)
     - ✅ workflow (Update GitHub Action workflows)
3. Click **"Generate token"** (green button at bottom)
4. **COPY THE TOKEN** (starts with `ghp_`)

## Step 2: Update .env File

Edit the .env file with your info:

```bash
nano /home/hiroshi/CascadeProjects/SpaghettiShark/.env
```

Replace these lines:
```
GITHUB_TOKEN=ghp_YOUR_ACTUAL_TOKEN_HERE
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
```

Example (with fake token):
```
GITHUB_TOKEN=ghp_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
GITHUB_USERNAME=hiroshi
```

Save: Ctrl+O, Enter, Ctrl+X

## Step 3: Deploy!

Run the automated deployment:

```bash
cd /home/hiroshi/CascadeProjects/SpaghettiShark
./deploy.sh
```

This will:
1. Create GitHub repository
2. Push all code
3. Show you the GitHub URL

## Step 4: Deploy to Vercel (2 minutes)

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select **spaghettishark** from your repos
4. Click **"Deploy"** (don't change ANY settings)
5. Wait 2 minutes...
6. **YOUR SITE IS LIVE!** 🎉

## What You Get:

✅ Live URL: `https://spaghettishark-xxxx.vercel.app`
✅ Auto-deploys on every git push
✅ SSL certificate included
✅ Global CDN
✅ Analytics dashboard

## Add Custom Domain (Optional):

In Vercel Dashboard:
1. Settings → Domains
2. Add `spaghettishark.xyz`
3. Follow DNS instructions for Namecheap

---

## Test Your Live Site:

Once deployed, test these:
- Home: Glass morphism cards, ambient effects
- `/lore` - Full narrative
- `/token` - Tokenomics
- `/roadmap` - Roadmap
- `/press` - Press kit
- Add `?variant=a` to URL for A/B testing

## Update Content:

Edit any file in `/content/spaghettishark/`:
```bash
# Edit content
nano content/spaghettishark/strings.json

# Push changes
git add .
git commit -m "Update content"
git push

# Auto-deploys in 2 minutes!
```

---

**READY TO LAUNCH!** Just add your GitHub token to .env and run ./deploy.sh 🚀
