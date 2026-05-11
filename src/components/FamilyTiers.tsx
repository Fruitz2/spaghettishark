type Member = {
  name: string
  italian: string
  min: string
  tagline: string
  perks: string[]
  accent: 'cream' | 'shark' | 'olive' | 'marinara'
  tilt: 'tilt-l' | 'tilt-r' | 'tilt-ll' | 'tilt-rr'
  star?: boolean
}

const MEMBERS: Member[] = [
  {
    name: 'COUSIN',
    italian: 'il cugino',
    min: '< 10k $SPAG',
    tagline: "you sit at the kids' table.",
    perks: [
      'sprite, not wine',
      'allowed in the kitchen for ten seconds',
      'nobody learns your name until next christmas',
    ],
    accent: 'cream',
    tilt: 'tilt-l',
  },
  {
    name: 'UNCLE',
    italian: 'lo zio',
    min: '10k+ $SPAG',
    tagline: 'you sit with the men now.',
    perks: [
      'one glass of red, refill on you',
      'you can complain about politics at the table',
      'the chef nods at you once when you leave',
    ],
    accent: 'olive',
    tilt: 'tilt-r',
  },
  {
    name: 'NONNO',
    italian: 'il nonno',
    min: '100k+ $SPAG',
    tagline: 'you sit at the head.',
    perks: [
      'second helping comes without asking',
      'you tell stories nobody believes, everyone listens anyway',
      'the chef brings out the limoncello himself',
    ],
    accent: 'shark',
    tilt: 'tilt-rr',
    star: true,
  },
  {
    name: 'CAPO',
    italian: 'il capo',
    min: '1M+ $SPAG',
    tagline: 'the chef knows your name.',
    perks: [
      'you do not pay for pasta anymore',
      'the chef knows your enemies',
      'one favor, payable in lasagna',
    ],
    accent: 'marinara',
    tilt: 'tilt-ll',
  },
]

const ACCENT_BG: Record<Member['accent'], string> = {
  cream: 'bg-cream',
  shark: 'bg-shark-light/40',
  olive: 'bg-olive/25',
  marinara: 'bg-marinara/20',
}
const ACCENT_TEXT: Record<Member['accent'], string> = {
  cream: 'text-ink',
  shark: 'text-shark',
  olive: 'text-olive',
  marinara: 'text-marinara',
}

export default function FamilyTiers() {
  return (
    <section className="relative tablecloth-sm py-16 md:py-24 border-t-[3px] border-b-[3px] border-ink overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-napkin border-2 border-ink px-4 py-2 tilt-l">
            <span className="font-body text-[12px] uppercase tracking-[0.3em] text-ink/70">
              the family / $SPAG holder hierarchy
            </span>
          </div>
          <h2 className="mt-4 font-display text-cream poster-shadow text-6xl md:text-8xl uppercase leading-none">
            la famiglia
          </h2>
          <div className="inline-block bg-napkin border-2 border-ink px-4 py-1.5 mt-4 tilt-r">
            <span className="font-marker text-ink text-2xl md:text-3xl leading-none">
              you climb the table or you eat at it.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {MEMBERS.map((m) => (
            <article
              key={m.name}
              className={`${m.tilt} relative bg-napkin border-2 border-ink p-5 pt-7`}
            >
              <span className="tape tape-top" />

              <div className="flex items-center justify-between mb-3">
                <div className={`inline-block ${ACCENT_BG[m.accent]} px-2 py-0.5 border border-ink/30`}>
                  <span className="font-body text-[11px] uppercase tracking-widest text-ink/80">
                    {m.italian}
                  </span>
                </div>
                {m.star && (
                  <div className="stamp stamp-red text-[9px] tilt-rr">
                    recommended
                  </div>
                )}
              </div>

              <h3 className={`font-display ${ACCENT_TEXT[m.accent]} text-5xl md:text-6xl leading-[0.85] uppercase`}>
                {m.name}
              </h3>

              <div className="font-mono text-[11px] text-ink/70 mt-2 tracking-widest">
                {m.min}
              </div>

              <p className="font-marker text-2xl text-ink mt-3 leading-tight">
                {m.tagline}
              </p>

              <ul className="mt-4 space-y-2 font-body text-[13px] text-ink/85">
                {m.perks.map((p, i) => (
                  <li key={i} className="flex gap-2 leading-snug">
                    <span className={ACCENT_TEXT[m.accent] + ' shrink-0 font-bold'}>+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block bg-napkin border-2 border-ink px-4 py-1.5 tilt-l">
            <span className="font-marker text-ink text-2xl md:text-3xl leading-none">
              numbers may change. the family will not.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
