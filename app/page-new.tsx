"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getLinks } from "@/lib/content-loader";

const links = getLinks();

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/transparentlogo.png" 
                alt="Spaghetti Shark" 
                width={45} 
                height={45}
                className="drop-shadow-glow"
              />
              <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                $SHARK
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#story" className="hover:text-yellow-400 transition-colors font-medium">Story</a>
              <a href="#tokenomics" className="hover:text-yellow-400 transition-colors font-medium">Tokenomics</a>
              <a href="#roadmap" className="hover:text-yellow-400 transition-colors font-medium">Roadmap</a>
              <a href="#community" className="hover:text-yellow-400 transition-colors font-medium">Community</a>
              <a 
                href={links.pump} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black font-bold hover:scale-105 transition-transform"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Logo with Parallax */}
          <div 
            className="mb-12 transform transition-transform duration-700"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <Image
              src="/transparentlogo.png"
              alt="Spaghetti Shark"
              width={350}
              height={350}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Title with Animation */}
          <h1 className="text-7xl md:text-9xl font-black mb-6">
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-300">
              SPAGHETTI
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300">
              SHARK
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl mb-12 text-gray-200 font-light max-w-3xl mx-auto">
            One shark. Infinite pasta. Zero survivors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={links.pump}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full overflow-hidden font-black text-xl text-black hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="relative z-10">GET $SHARK NOW</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
            </a>
            
            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-white/30 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              JOIN TELEGRAM
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-black text-yellow-400">$420M</p>
              <p className="text-sm text-gray-400 mt-1">Market Cap</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-blue-400">10K+</p>
              <p className="text-sm text-gray-400 mt-1">Holders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-green-400">100%</p>
              <p className="text-sm text-gray-400 mt-1">LP Burned</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 20L10 15L11.4 13.6L15 17.2L18.6 13.6L20 15L15 20Z" fill="white" fillOpacity="0.5"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            THE LEGEND BEGINS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6">🌊</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">The Encounter</h3>
              <p className="text-gray-300 leading-relaxed">
                It started with a single noodle. A great white shark, apex predator of the seas, 
                stumbled upon an underwater Italian restaurant. The rest? History.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6">🍝</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">The Addiction</h3>
              <p className="text-gray-300 leading-relaxed">
                One bite wasn't enough. This shark developed an insatiable hunger for carbs. 
                Scientists are baffled. Italians are proud.
              </p>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">The Moon Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Fueled by endless pasta power, this shark isn't just swimming—it's flying. 
                Destination: The moon. Vehicle: Pure carbohydrate energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TOKENOMICS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-black/80 border border-yellow-400/50 rounded-2xl p-8 text-center">
                <p className="text-5xl font-black text-yellow-400 mb-2">420.69B</p>
                <p className="text-gray-300">Total Supply</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-black/80 border border-blue-400/50 rounded-2xl p-8 text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">100%</p>
                <p className="text-gray-300">LP Burned</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-black/80 border border-green-400/50 rounded-2xl p-8 text-center">
                <p className="text-5xl font-black text-green-400 mb-2">0%</p>
                <p className="text-gray-300">Team Tokens</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-black/80 border border-purple-400/50 rounded-2xl p-8 text-center">
                <p className="text-5xl font-black text-purple-400 mb-2">∞</p>
                <p className="text-gray-300">Pasta Power</p>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-center text-gray-400 mb-4">CONTRACT ADDRESS</p>
            <p className="font-mono text-xl text-yellow-400 text-center break-all">
              {links.contract || "COMING SOON TO AN OCEAN NEAR YOU"}
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            THE FEAST PLAN
          </h2>

          <div className="space-y-12">
            <div className="relative pl-8 border-l-4 border-yellow-400/50 hover:border-yellow-400 transition-colors">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-400 rounded-full" />
              <h3 className="text-3xl font-bold mb-3 text-yellow-400">Phase 1: First Bite</h3>
              <p className="text-xl text-gray-300">Launch on Pump.fun. Build the school. Start the feeding frenzy.</p>
            </div>

            <div className="relative pl-8 border-l-4 border-blue-400/50 hover:border-blue-400 transition-colors">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-400 rounded-full" />
              <h3 className="text-3xl font-bold mb-3 text-blue-400">Phase 2: Full Stomach</h3>
              <p className="text-xl text-gray-300">Major CEX listings. Partnership with Italian restaurants worldwide.</p>
            </div>

            <div className="relative pl-8 border-l-4 border-green-400/50 hover:border-green-400 transition-colors">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-400 rounded-full" />
              <h3 className="text-3xl font-bold mb-3 text-green-400">Phase 3: Food Coma</h3>
              <p className="text-xl text-gray-300">$1B market cap. Shark takes a nap. Holders get rich.</p>
            </div>

            <div className="relative pl-8 border-l-4 border-purple-400/50 hover:border-purple-400 transition-colors">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-400 rounded-full" />
              <h3 className="text-3xl font-bold mb-3 text-purple-400">Phase 4: Second Dinner</h3>
              <p className="text-xl text-gray-300">The shark awakens. Time for dessert. Moon mission initiated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 bg-gradient-to-b from-black via-yellow-950/20 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            JOIN THE SCHOOL
          </h2>
          
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Swimming alone is dangerous. Join thousands of pasta-powered sharks in our community.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">© 2024 Spaghetti Shark. All pasta reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Not financial advice. Just pasta advice.</p>
        </div>
      </footer>
    </div>
  );
}
