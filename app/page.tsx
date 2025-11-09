"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getLinks } from "@/lib/content-loader";
import { siteConfig } from "@/config/site-config";

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
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center items-center relative">
            {/* Centered Menu */}
            <div className="flex items-center gap-8">
              <a href="#story" className="hover:text-[#F4E7D2] transition-colors font-medium text-lg">Story</a>
              <a href="#tokenomics" className="hover:text-[#E0342C] transition-colors font-medium text-lg">Tokenomics</a>
              <a href="#roadmap" className="hover:text-[#FFA500] transition-colors font-medium text-lg">Roadmap</a>
              <a href="#community" className="hover:text-[#F4E7D2] transition-colors font-medium text-lg">Community</a>
            </div>
            
            <a 
              href={links.pump} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute right-0 px-6 py-2 bg-gradient-to-r from-[#E0342C] to-[#FFA500] rounded-full text-white font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Buy Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Floating Gradient Orbs Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orb 1 - Cream */}
          <div 
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(244, 231, 210, 0.25) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              animation: 'float-orb-1 20s ease-in-out infinite, pulse-glow-orb 8s ease-in-out infinite',
              filter: 'blur(40px)'
            }}
          />
          {/* Orb 2 - Red */}
          <div 
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(224, 52, 44, 0.2) 0%, transparent 70%)',
              top: '40%',
              right: '10%',
              animation: 'float-orb-2 25s ease-in-out infinite, pulse-glow-orb 10s ease-in-out infinite',
              filter: 'blur(50px)'
            }}
          />
          {/* Orb 3 - Orange */}
          <div 
            className="absolute w-[450px] h-[450px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 165, 0, 0.15) 0%, transparent 70%)',
              bottom: '10%',
              left: '30%',
              animation: 'float-orb-3 30s ease-in-out infinite, pulse-glow-orb 12s ease-in-out infinite',
              filter: 'blur(45px)'
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Main Hero Image - TRANSPARENT LOGO (NO PARALLAX) */}
          <div className="mb-12">
            <Image
              src="/transparentlogo.png"
              alt="Spaghetti Shark - A shark tangled in pasta"
              width={600}
              height={600}
              className="mx-auto drop-shadow-2xl"
              priority
              quality={90}
            />
          </div>

          {/* Tagline */}
          <p className="text-4xl md:text-5xl mb-20 font-light max-w-4xl mx-auto tracking-wide" style={{ color: '#F4E7D2' }}>
            {siteConfig.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-7 bg-[#0088cc] hover:bg-[#006699] rounded-full font-black text-3xl text-white hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/20"
            >
              JOIN TELEGRAM 📱
            </a>
            
            <a
              href={links.pump}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-14 py-7 bg-gradient-to-br from-[#E0342C] via-[#E0342C] to-[#FFA500] rounded-full overflow-hidden font-black text-3xl text-white hover:scale-110 hover:shadow-[0_0_50px_rgba(224,52,44,0.6)] transition-all duration-500 shadow-2xl border-2 border-white/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                BUY NOW
                <span className="group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300">🚀</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group text-center backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border-2 border-white/20 hover:border-[#F4E7D2] hover:bg-white/10 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-[#F4E7D2]/20">
              <p className="text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-500" style={{ color: '#F4E7D2' }}>{siteConfig.stats.marketCap}</p>
              <p className="text-base text-gray-300 font-medium">Market Cap</p>
            </div>
            <div className="group text-center backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border-2 border-white/20 hover:border-[#E0342C] hover:bg-white/10 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-[#E0342C]/20">
              <p className="text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-500" style={{ color: '#E0342C' }}>SOON</p>
              <p className="text-base text-gray-300 font-medium">Holders</p>
            </div>
            <div className="group text-center backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border-2 border-white/20 hover:border-[#FFA500] hover:bg-white/10 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-[#FFA500]/20">
              <p className="text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-500" style={{ color: '#FFA500' }}>{siteConfig.stats.liquidityBurned}</p>
              <p className="text-base text-gray-300 font-medium">LP Burned</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 20L10 15L11.4 13.6L15 17.2L18.6 13.6L20 15L15 20Z" fill="#F4E7D2" fillOpacity="0.7"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-[#F4E7D2] to-[#E0342C] bg-clip-text text-transparent">
            THE LEGEND BEGINS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.story.map((card, i) => (
              <div 
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:scale-105 transition-all duration-700"
                style={{ borderColor: `${card.color}20` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${card.color}80`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = `${card.color}20`}
              >
                <div className="text-7xl mb-6">{card.emoji}</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: card.color }}>{card.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section - REDESIGNED */}
      <section id="tokenomics" className="relative py-32 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#E0342C]/5 to-black" />
        
        {/* Floating orbs in background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#E0342C]/30 to-transparent blur-3xl" style={{ top: '20%', left: '10%', animation: 'float-orb-1 25s ease-in-out infinite' }} />
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#FFA500]/30 to-transparent blur-3xl" style={{ top: '60%', right: '10%', animation: 'float-orb-2 30s ease-in-out infinite' }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Title with animated underline */}
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-[#E0342C] via-[#FFA500] to-[#F4E7D2] bg-clip-text text-transparent animate-gradient">
              TOKENOMICS
            </h2>
            <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[#E0342C] to-[#FFA500] rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Card 1 - Total Supply */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F4E7D2] to-[#E0342C] rounded-3xl blur-xl opacity-25 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-black/90 to-black/70 border-2 border-[#F4E7D2]/30 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 overflow-hidden">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">💰</div>
                
                {/* Value */}
                <p className="text-5xl font-black mb-2 bg-gradient-to-br from-[#F4E7D2] to-[#FFA500] bg-clip-text text-transparent">
                  {siteConfig.tokenomics.totalSupply}
                </p>
                
                {/* Label */}
                <p className="text-[#F4E7D2]/80 text-sm font-bold uppercase tracking-wider">Total Supply</p>
                
                {/* Decorative corner */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#F4E7D2]/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Card 2 - LP Burned */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E0342C] to-[#FFA500] rounded-3xl blur-xl opacity-25 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-black/90 to-black/70 border-2 border-[#E0342C]/30 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🔥</div>
                <p className="text-5xl font-black mb-2 bg-gradient-to-br from-[#E0342C] to-[#FFA500] bg-clip-text text-transparent">
                  {siteConfig.tokenomics.lpBurned}
                </p>
                <p className="text-[#E0342C]/80 text-sm font-bold uppercase tracking-wider">LP Burned</p>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#E0342C]/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Card 3 - Team Tokens */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFA500] to-[#F4E7D2] rounded-3xl blur-xl opacity-25 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-black/90 to-black/70 border-2 border-[#FFA500]/30 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">🚫</div>
                <p className="text-5xl font-black mb-2 bg-gradient-to-br from-[#FFA500] to-[#F4E7D2] bg-clip-text text-transparent">
                  {siteConfig.tokenomics.teamTokens}
                </p>
                <p className="text-[#FFA500]/80 text-sm font-bold uppercase tracking-wider">Team Tokens</p>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FFA500]/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Card 4 - Pasta Power */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4169E1] to-[#F4E7D2] rounded-3xl blur-xl opacity-25 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-black/90 to-black/70 border-2 border-[#4169E1]/30 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">🍝</div>
                <p className="text-5xl font-black mb-2 bg-gradient-to-br from-[#4169E1] to-[#F4E7D2] bg-clip-text text-transparent">
                  {siteConfig.tokenomics.pastaPower}
                </p>
                <p className="text-[#4169E1]/80 text-sm font-bold uppercase tracking-wider">Pasta Power</p>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#4169E1]/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Contract Address - Enhanced */}
          <div className="relative group max-w-4xl mx-auto">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E0342C] via-[#FFA500] to-[#F4E7D2] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
            
            <div className="relative bg-gradient-to-br from-black/95 to-black/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-[#F4E7D2]/20 group-hover:border-[#F4E7D2]/40 transition-all duration-500">
              {/* Icon and label */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-4xl group-hover:rotate-12 transition-transform duration-500">📜</span>
                <p className="text-[#F4E7D2]/60 font-bold uppercase tracking-widest text-lg">Contract Address</p>
              </div>
              
              {/* Address */}
              <p className="font-mono text-2xl md:text-3xl text-center break-all bg-gradient-to-r from-[#F4E7D2] via-[#FFA500] to-[#E0342C] bg-clip-text text-transparent font-bold">
                {siteConfig.contract.address}
              </p>
              
              {/* Network badge */}
              <div className="mt-6 flex justify-center">
                <span className="px-6 py-2 bg-gradient-to-r from-[#E0342C]/20 to-[#FFA500]/20 border border-[#FFA500]/30 rounded-full text-[#FFA500] font-bold text-sm uppercase tracking-wider">
                  ⚡ {siteConfig.contract.network}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-[#FFA500] to-[#F4E7D2] bg-clip-text text-transparent">
            THE FEAST PLAN
          </h2>

          <div className="space-y-12">
            {siteConfig.roadmap.map((phase, i) => (
              <div 
                key={i}
                className="relative pl-10 border-l-4 hover:border-l-8 transition-all duration-500"
                style={{ borderColor: `${phase.color}50` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = phase.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = `${phase.color}50`}
              >
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full transition-all duration-500" style={{ backgroundColor: phase.color }} />
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                  <p className="text-sm font-bold mb-2 opacity-70">{phase.phase}</p>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: phase.color }}>{phase.title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 bg-gradient-to-b from-black via-[#FFA500]/10 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-[#F4E7D2] via-[#FFA500] to-[#E0342C] bg-clip-text text-transparent">
            {siteConfig.community.title}
          </h2>
          
          <p className="text-3xl mb-20 max-w-3xl mx-auto" style={{ color: '#F4E7D2' }}>
            {siteConfig.community.description}
          </p>

          <div className="flex justify-center gap-8">
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-[#F4E7D2]/30 hover:border-[#F4E7D2] hover:scale-110 transition-all duration-500"
            >
              <svg className="w-16 h-16 transition-colors duration-500" fill="#F4E7D2" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a
              href={links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border-2 border-[#E0342C]/30 hover:border-[#E0342C] hover:scale-110 transition-all duration-500"
            >
              <svg className="w-16 h-16 transition-colors duration-500" fill="#E0342C" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 text-lg">{siteConfig.footer.copyright}</p>
          <p className="text-sm text-gray-500 mt-2">{siteConfig.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
