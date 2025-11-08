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

      {/* Community Table */}
      <CommunityTable
        title={strings.community.title}
        body={strings.community.body}
      />

      {/* Roadmap Preview */}
      <RoadmapPreview
        title={strings.roadmapPreview.title}
        bullets={strings.roadmapPreview.bullets}
      />
    </div>
  );
}
