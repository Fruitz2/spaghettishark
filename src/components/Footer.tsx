export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-16 pb-12 overflow-hidden">
      {/* small repeating awning at the very top */}
      <div className="absolute top-0 left-0 right-0 awning h-3" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10">
        {/* big closing call */}
        <div className="text-center mb-14 pt-6">
          <div className="font-body text-[12px] uppercase tracking-[0.3em] text-cream/60 mb-3">
            last call
          </div>
          <h2 className="font-display text-cream poster-shadow text-6xl md:text-9xl uppercase leading-none">
            mangia.
          </h2>
          <p className="font-marker text-marinara text-2xl md:text-3xl mt-3">
            (it means "eat", and it is not optional)
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="" className="btn-sign">get on the list</a>
            <a href="" className="btn-stamp" style={{ background: '#faf3df', color: '#1a120c' }}>
              follow on x
            </a>
            <a href="" className="btn-stamp" style={{ background: '#faf3df', color: '#1a120c' }}>
              join telegram
            </a>
          </div>
        </div>

        {/* disclaimer as menu fine print */}
        <div className="bg-cream text-ink border-2 border-cream p-6 md:p-8 mb-10">
          <div className="font-display text-marinara text-2xl uppercase mb-3 tracking-wider">
            please read before eating
          </div>
          <div className="font-body text-[13px] leading-relaxed space-y-3">
            <p>
              $SPAG is a memecoin on pump.fun. it is not a real restaurant.
              there is no real chef. the chef is a shark, the shark is a JPEG,
              the JPEG lives on the internet. consuming JPEGs is not advised by
              any medical professional we have asked.
            </p>
            <p>
              $SPAG has no intrinsic value, no claim on anything, and no use
              outside of being a keycard for whatever the family eventually
              decides to build. holding it gives you no equity, no profit share,
              no representation, and no guarantee of a table at the restaurant
              that does not exist.
            </p>
            <p>
              memecoins are high risk. low cap memecoins are higher. low cap
              memecoins endorsed by anonymous developers running a shark
              persona are the highest. please do not buy this with money you
              cannot afford to lose at the table.
            </p>
            <p className="text-ink/70">
              18% gratuity automatically added to parties of six or more.
              no checks. no amex. no questions about the special.
              nothing on this site is financial or legal advice. big tony is
              not a lawyer. big tony is a shark.
            </p>
          </div>
        </div>

        {/* footer rail */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-cream/30 pt-8">
          <div>
            <div className="font-display text-marinara text-4xl uppercase leading-none">
              spaghetti shark.
            </div>
            <div className="font-body text-[12px] text-cream/70 tracking-widest mt-1 uppercase">
              est. when the chef felt like it / bensonhurst, allegedly
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="" className="px-3 py-1 border border-cream/40 font-body text-[11px] uppercase tracking-widest hover:bg-cream hover:text-ink transition-colors">x</a>
            <a href="" className="px-3 py-1 border border-cream/40 font-body text-[11px] uppercase tracking-widest hover:bg-cream hover:text-ink transition-colors">telegram</a>
            <a href="" className="px-3 py-1 border border-cream/40 font-body text-[11px] uppercase tracking-widest hover:bg-cream hover:text-ink transition-colors">pump.fun</a>
            <a href="" className="px-3 py-1 border border-cream/40 font-body text-[11px] uppercase tracking-widest hover:bg-cream hover:text-ink transition-colors">dexscreener</a>
          </div>
        </div>

        <div className="mt-10 text-center font-marker text-cream/50 text-xl">
          first we eat. then we talk.
        </div>
      </div>
    </footer>
  )
}
