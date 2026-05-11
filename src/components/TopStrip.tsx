// fake restaurant awning marquee. announcements scroll past.
// pre-launch state. no live data.

export default function TopStrip() {
  const items = [
    "tonight's special: $SPAG",
    'the chef is in (he is also a shark)',
    'no reservations. no exceptions. no parmesan on the seafood.',
    'pre-launch / launch when the chef says so',
    'cash only. or $SPAG. nothing in between.',
    'parties of six or more, 18% gratuity automatic',
  ]
  const loop = [...items, ...items, ...items]

  return (
    <div className="sticky top-0 z-40 awning border-b-[3px] border-ink">
      <div className="flex items-stretch h-10 overflow-hidden">
        <div className="hidden sm:flex items-center gap-2 px-4 bg-ink text-cream font-display tracking-[0.2em] text-sm">
          <span className="h-2 w-2 rounded-full bg-marinara animate-blink" />
          OPEN
        </div>
        <div className="flex-1 overflow-hidden relative bg-napkin">
          <div className="flex items-center gap-8 whitespace-nowrap pl-6 animate-marquee h-full font-body text-ink text-[14px]">
            {loop.map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-marinara font-bold">★</span>
                <span className="uppercase tracking-wider">{t}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center px-4 bg-marinara text-cream font-display tracking-[0.2em] text-sm border-l-[3px] border-ink">
          <span>est. when the chef felt like it</span>
        </div>
      </div>
    </div>
  )
}
