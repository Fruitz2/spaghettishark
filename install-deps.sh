#!/bin/bash

# Installation script with better error handling
set -e

echo "🧹 Cleaning up..."
rm -rf node_modules package-lock.json .next

echo "📦 Installing core Next.js dependencies..."
npm install next@15.0.3 react@18.3.1 react-dom@18.3.1 --save --legacy-peer-deps --no-audit

echo "🎨 Installing UI dependencies..."
npm install tailwindcss@3.4.14 postcss@8.4.47 autoprefixer@10.4.20 --save-dev --legacy-peer-deps --no-audit

echo "✨ Installing Framer Motion..."
npm install framer-motion@11.5.4 --save --legacy-peer-deps --no-audit

echo "🔧 Installing utilities..."
npm install clsx@2.1.1 tailwind-merge@2.5.2 class-variance-authority@0.7.0 --save --legacy-peer-deps --no-audit

echo "📝 Installing content parsers..."
npm install gray-matter@4.0.3 react-markdown@9.0.1 remark-gfm@4.0.0 --save --legacy-peer-deps --no-audit

echo "🎯 Installing Radix UI..."
npm install @radix-ui/react-slot@1.1.0 @radix-ui/react-separator@1.1.0 @radix-ui/react-tabs@1.1.0 @radix-ui/react-tooltip@1.1.2 --save --legacy-peer-deps --no-audit

echo "🦷 Installing icons..."
npm install lucide-react@0.446.0 --save --legacy-peer-deps --no-audit

echo "🌊 Installing smooth scroll..."
npm install @studio-freight/lenis@1.0.42 --save --legacy-peer-deps --no-audit

echo "📘 Installing TypeScript types..."
npm install --save-dev typescript@5.6.3 @types/node@22.7.7 @types/react@18.3.11 @types/react-dom@18.3.1 --legacy-peer-deps --no-audit

echo "✅ Installation complete!"
echo "🚀 Run: npm run dev"
