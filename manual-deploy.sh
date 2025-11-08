#!/bin/bash

# Manual deployment without .env file
echo "🚀 Manual Spaghetti Shark Deployment"
echo "====================================="
echo ""

# Get GitHub username
echo "Enter your GitHub username:"
read GITHUB_USERNAME

echo ""
echo "📝 Next steps to complete deployment:"
echo ""
echo "1. Create repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: spaghettishark"
echo "   - Set to Public"
echo "   - DON'T initialize with README"
echo "   - Click 'Create repository'"
echo ""
echo "2. Push your code (copy & paste these commands):"
echo ""
echo "git remote add origin https://github.com/$GITHUB_USERNAME/spaghettishark.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to: https://vercel.com/new"
echo "   - Import the spaghettishark repo"
echo "   - Click Deploy"
echo ""
echo "Your site will be live in 2 minutes! 🎉"
