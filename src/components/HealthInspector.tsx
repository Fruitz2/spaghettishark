// FAQ but it is a health-inspector interview transcript.
// addresses real questions (is this a rug, who runs it, what is $SPAG)
// without sounding like a corporate FAQ.

type QA = { q: string; a: React.ReactNode }

const TRANSCRIPT: QA[] = [
  {
    q: 'is the chef actually a shark.',
    a: (
      <>
        yes. there is footage. we are not commenting further on the footage,
        the footage is sealed by court order, the court order is also sealed.
      </>
    ),
  },
  {
    q: 'is $SPAG a real token.',
    a: (
      <>
        it is a memecoin on solana. it does what memecoins do, which is move
        up and down for reasons. the chef does not endorse buying it. the chef
        endorses eating.
      </>
    ),
  },
  {
    q: 'is there a presale, an allow list, a private round.',
    a: (
      <>
        no. no. and no. the recipe drops once, in public, and everyone runs
        for it like nonna just put out the lasagna. if someone tells you they
        have early access, they are lying, and the chef will find them.
      </>
    ),
  },
  {
    q: 'who is behind this.',
    a: (
      <>
        big tony runs the kitchen. there are some humans behind big tony who
        prefer to remain anonymous, for reasons related to the previous
        question about court orders. they have been on solana since the
        bonk era and have eaten enough bad pasta to be motivated.
      </>
    ),
  },
  {
    q: 'will you do a rug.',
    a: (
      <>
        no liquidity removal, no team allocations, no dev wallets that buy back
        at launch. if you see one of those things happen on chain, screenshot
        it and send it. we will fix it or close the kitchen.
      </>
    ),
  },
  {
    q: 'why pasta.',
    a: (
      <>
        because the chef likes pasta. you got a better idea?
      </>
    ),
  },
  {
    q: "what's the special.",
    a: (
      <>
        we are not at liberty to discuss the special at this time.
      </>
    ),
  },
]

export default function HealthInspector() {
  return (
    <section className="relative paper py-16 md:py-24 overflow-hidden">
      <div className="oil-stain" style={{ top: 100, left: '40%', width: 220, height: 220 }} />

      <div className="relative max-w-3xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="font-body text-[12px] uppercase tracking-[0.3em] text-ink/60 mb-2">
            transcript / case file 24-1101 / nyc dept of health
          </div>
          <h2 className="font-display text-ink text-5xl md:text-7xl uppercase leading-none">
            an interview
          </h2>
          <p className="font-marker text-marinara text-2xl md:text-3xl mt-1">
            with the health inspector.
          </p>
          <p className="font-body text-[13px] text-ink/70 mt-3 max-w-xl mx-auto">
            the following exchange was recorded during a routine inspection on
            the wednesday before the soft opening. the chef is identified as
            'subject t.' in the original document. answers have not been edited
            for length, tone, or biting.
          </p>
        </div>

        <div className="bg-cream border-2 border-ink p-6 md:p-10 relative tilt-r">
          <span className="tape tape-tl" />
          <span className="tape tape-tr" />

          <div className="absolute -top-3 right-6 stamp stamp-red text-[10px] tilt-l">
            confidential
          </div>

          <ol className="space-y-7 font-body text-[15px] text-ink">
            {TRANSCRIPT.map((qa, i) => (
              <li key={i} className="border-b border-dashed border-ink/25 pb-6 last:border-0 last:pb-0">
                <div className="flex gap-3 mb-2">
                  <span className="font-display text-marinara text-xl shrink-0 w-12">Q{String(i + 1).padStart(2, '0')}.</span>
                  <span className="font-display uppercase tracking-wide text-ink text-lg leading-tight">{qa.q}</span>
                </div>
                <div className="flex gap-3 pl-1">
                  <span className="font-display text-shark text-xl shrink-0 w-12">A.</span>
                  <span className="leading-relaxed">{qa.a}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-ink/30 flex justify-between items-end font-body text-[11px] uppercase tracking-widest text-ink/70">
            <span>end of transcript</span>
            <span className="font-marker text-marinara text-2xl">/ inspector closed file /</span>
          </div>
        </div>
      </div>
    </section>
  )
}
