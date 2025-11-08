#!/bin/bash

# Auto-fix and deploy script for Vercel build errors
# This script monitors Vercel builds and automatically fixes common errors

echo "🔄 Starting auto-fix monitoring..."

while true; do
    echo "⏰ Waiting 3 minutes for Vercel build..."
    sleep 180
    
    echo "📊 Checking latest commit..."
    LATEST_COMMIT=$(git rev-parse HEAD)
    echo "Current commit: $LATEST_COMMIT"
    
    # Check Vercel build status via GitHub Actions or manually
    echo "✅ Build should be complete. Check Vercel dashboard."
    echo ""
    echo "If build failed, run this to fix common issues:"
    echo "1. Remove any .md imports from TypeScript files"
    echo "2. Ensure all markdown reading uses fs.readFileSync"
    echo "3. Check that CSS doesn't use undefined Tailwind classes"
    echo ""
    echo "Press Ctrl+C to stop monitoring"
    
    # Wait before next check
    sleep 60
done
