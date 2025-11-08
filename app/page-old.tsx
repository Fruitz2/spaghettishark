"use client";

import { Button } from "@/components/ui/button";
import { getLinks } from "@/lib/content-loader";

const links = getLinks();

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Simple Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4">
        {/* Big Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/transparentlogo.png" 
            alt="Spaghetti Shark" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
          />
        </div>
        
        {/* Big Meme Text */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-4 text-yellow-400">
          SPAGHETTI
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-8 text-blue-400">
          SHARK
        </h1>
        
        <p className="text-xl md:text-2xl text-center mb-12 text-gray-300 max-w-lg">
          The only shark that carb-loads before eating you 🍝🦈
        </p>

        {/* Simple CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl px-12 py-8 rounded-full font-black transform hover:scale-110 transition-transform"
          >
            <a href={links.pump} target="_blank" rel="noopener noreferrer">
              BUY $SHARK 🚀
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-4 border-white text-white hover:bg-white hover:text-black text-xl px-12 py-8 rounded-full font-black transform hover:scale-110 transition-transform"
          >
            <a href={links.tg} target="_blank" rel="noopener noreferrer">
              TELEGRAM 💬
            </a>
          </Button>
        </div>

        {/* Contract Address */}
        <div className="bg-gray-900 p-4 rounded-lg mb-8">
          <p className="text-sm text-gray-400 mb-2">CONTRACT ADDRESS:</p>
          <p className="font-mono text-xs md:text-sm break-all text-yellow-400">
            {links.contract || "COMING SOON..."}
          </p>
        </div>

        {/* Simple Ticker */}
        <div className="text-center text-gray-400">
          <p className="text-lg">MC: $420.69M | HOLDERS: 6,969 | VOLUME: $1.337M</p>
        </div>
      </section>

      {/* Simple Marquee */}
      <div className="bg-yellow-400 text-black py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl font-black mx-8">🍝 SLURP THE DIP 🍝</span>
          <span className="text-2xl font-black mx-8">🦈 SHARK WEEK EVERY WEEK 🦈</span>
          <span className="text-2xl font-black mx-8">🚀 TO THE MARINARA TRENCH 🚀</span>
        </div>
      </div>

      {/* The Story */}
      <section className="bg-gray-900 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-yellow-400">THE LEGEND</h2>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Deep in the blockchain ocean, a shark discovered an infinite pasta buffet.
          </p>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Now it swims the DeFi seas, leaving a trail of marinara sauce and liquidated shorts.
          </p>
          <p className="text-xl md:text-2xl text-gray-300">
            Join the carb revolution. Become ungovernable. Eat pasta.
          </p>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-blue-400">TOKENOMICS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <p className="text-3xl font-black text-yellow-400 mb-2">100%</p>
              <p className="text-xl text-gray-300">LIQUIDITY BURNED</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <p className="text-3xl font-black text-yellow-400 mb-2">0%</p>
              <p className="text-xl text-gray-300">TEAM TOKENS</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <p className="text-3xl font-black text-yellow-400 mb-2">420.69B</p>
              <p className="text-xl text-gray-300">TOTAL SUPPLY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-yellow-400">JOIN THE SCHOOL</h2>
          <div className="flex justify-center gap-8">
            <a 
              href={links.x} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href={links.tg} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
