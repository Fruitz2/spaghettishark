"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { KineticType } from "@/components/KineticType";
import { RollingStrip } from "@/components/RollingStrip";
import { NarrativeBurst } from "@/components/NarrativeBurst";
import { BullishMenu } from "@/components/BullishMenu";
import { CommunityTable } from "@/components/CommunityTable";
import { RoadmapPreview } from "@/components/RoadmapPreview";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { getStrings, getLinks } from "@/lib/content-loader";

const strings = getStrings();
const links = getLinks();

export default function HomePage() {
  const searchParams = useSearchParams();
  const [heroVariant, setHeroVariant] = useState<[string, string]>([
    "PASTA POWER.",
    "SHARK BITE.",
  ]);

  useEffect(() => {
    // Check for variant query param (a, b, c)
    const variantParam = searchParams.get("variant");
    const variants = strings.hero.h1Variants;

    if (variantParam) {
      const variantIndex = ["a", "b", "c"].indexOf(variantParam.toLowerCase());
      if (variantIndex >= 0 && variantIndex < variants.length) {
        setHeroVariant(variants[variantIndex]);
        return;
      }
    }

    // Random variant selection
    const randomIndex = Math.floor(Math.random() * variants.length);
    setHeroVariant(variants[randomIndex]);
  }, [searchParams]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Premium Effects */}
      <section className="relative min-h-[90vh] px-4 py-32 md:py-40">
        {/* Ambient glow effects */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent2/10 blur-[128px]" />
        
        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="inline-block animate-pulse rounded-full border border-accent2/30 bg-accent2/10 px-6 py-2 backdrop-blur-sm">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent2 md:text-sm">
                {strings.hero.eyebrow}
              </p>
            </div>
          </div>

          <div className="mb-10 text-center">
            <KineticType lines={heroVariant} />
          </div>

          <div className="mb-14 text-center">
            <p className="mx-auto max-w-3xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text font-body text-2xl font-medium leading-relaxed text-transparent md:text-3xl">
              {strings.hero.sub}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {strings.buyEnabled && links.pump && (
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent via-accent to-accent/90 px-10 py-7 text-lg font-bold shadow-[0_0_40px_rgba(224,52,44,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(224,52,44,0.5)]"
              >
                <a href={links.pump} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">{strings.hero.buyCta}</span>
                  <ExternalLink className="relative z-10 ml-2 h-5 w-5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </Button>
            )}

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-foreground/20 bg-background/50 px-10 py-7 text-lg font-semibold backdrop-blur-sm transition-all hover:border-accent2/50 hover:bg-accent2/10 hover:shadow-[0_0_30px_rgba(47,166,106,0.2)]"
            >
              <a href={links.tg} target="_blank" rel="noopener noreferrer">
                {strings.hero.secondaryCtas[0]}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-foreground/20 bg-background/50 px-10 py-7 text-lg font-semibold backdrop-blur-sm transition-all hover:border-accent2/50 hover:bg-accent2/10 hover:shadow-[0_0_30px_rgba(47,166,106,0.2)]"
            >
              <a href={links.x} target="_blank" rel="noopener noreferrer">
                {strings.hero.secondaryCtas[1]}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Rolling Strip */}
      <RollingStrip items={strings.strip} className="my-12" />

      {/* Narrative Burst */}
      <NarrativeBurst
        title={strings.narrativeBurst.title}
        body={strings.narrativeBurst.body}
      />

      {/* Bullish Menu with Enhanced Background */}
      <section className="relative py-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-subtle/30 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent2/5 blur-[100px]" />
        <BullishMenu
          title={strings.bullishMenu.title}
          items={strings.bullishMenu.items}
          disclaimer={strings.bullishMenu.disclaimer}
        />
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
