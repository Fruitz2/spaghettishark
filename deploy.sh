#!/bin/bash

# Automated deployment script
set -e

echo "🚀 Spaghetti Shark Automated Deployment"
echo "========================================"

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Check required variables
if [ -z "$GITHUB_TOKEN" ] || [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Missing required environment variables!"
    echo "Please copy .env.example to .env and fill in:"
    echo "  - GITHUB_TOKEN"
    echo "  - GITHUB_USERNAME"
    exit 1
fi

# Step 1: Setup Git
echo "📝 Setting up Git..."
git config user.name "$GITHUB_USERNAME"
git config user.email "${GITHUB_USERNAME}@users.noreply.github.com"

# Step 2: Create GitHub repo via API
echo "🐙 Creating GitHub repository..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user/repos \
     -d '{"name":"spaghettishark","description":"Carb up. Bite harder. Premium Spaghetti Shark website.","private":false}' \
     2>/dev/null || echo "Repository might already exist, continuing..."

# Step 3: Add remote
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/spaghettishark.git"

# Step 4: Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main --force

echo "✅ GitHub deployment complete!"
echo "Repository: https://github.com/${GITHUB_USERNAME}/spaghettishark"

# Step 5: Deploy to Vercel
if [ ! -z "$VERCEL_TOKEN" ]; then
    echo "🔺 Deploying to Vercel..."
    npx vercel --token=$VERCEL_TOKEN --prod --yes
else
    echo "ℹ️  Vercel token not found. Please deploy manually at:"
    echo "   https://vercel.com/new"
fi

echo ""
echo "🎉 Deployment Complete!"
echo "========================"
echo "Next steps:"
echo "1. Visit https://vercel.com/new"
echo "2. Import your GitHub repo: ${GITHUB_USERNAME}/spaghettishark"
echo "3. Deploy with default settings"
echo "4. Add custom domain in Vercel dashboard"
