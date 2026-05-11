import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative paper overflow-hidden">
      {/* coffee rings and oil stains, hand-placed */}
      <div className="coffee-ring" style={{ top: 60, right: 80, width: 110, height: 110 }} />
      <div className="coffee-ring" style={{ bottom: 80, left: 40, width: 80, height: 80 }} />
      <div className="oil-stain" style={{ top: 200, left: '40%', width: 180, height: 180 }} />

      {/* faint checker tile decoration top-right */}
      <div
        className="hidden md:block absolute top-0 right-0 w-40 h-20 tablecloth-sm opacity-70"
        style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10 pt-10 pb-16">
        {/* date / status row, fake newspaper folio */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 font-body text-[12px] uppercase tracking-widest text-ink/70 border-b-2 border-dashed border-ink/40 pb-3">
          <span>marco's menu / vol. 1 / pre-launch edition</span>
          <span className="flex items-center gap-2">
            <span className="neon-open text-2xl leading-none">Open</span>
            <span className="text-marinara">●</span>
            <span>est. brooklyn (allegedly)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          {/* left: wordmark */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-marinara poster-shadow leading-[0.82] tracking-[-0.01em] uppercase"
              style={{ fontSize: 'clamp(64px, 14vw, 200px)' }}
            >
              SPAGHETTI
              <br />
              <span className="text-shark">SHARK</span>
              <span className="text-ink">.</span>
            </motion.h1>

            <p className="mt-7 max-w-xl font-body text-ink text-lg md:text-xl leading-snug">
              the only shark on solana who knows what{' '}
              <span className="marker-circle font-bold">al dente</span> means.
            </p>

            <p className="mt-4 max-w-xl font-body text-ink/80 text-[15px] leading-relaxed">
              this is the kitchen of big tony, a great white from bensonhurst who
              was bitten by a chef and decided to take over the family
              restaurant. he serves italian. you eat what he cooks. you don't
              ask why.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="" className="btn-sign">order the special</a>
              <a href="" className="btn-stamp">join the family</a>
            </div>

            {/* pre-launch status card, looks like a stamped chit */}
            <div className="mt-8 tilt-l inline-block bg-cream border-2 border-ink px-4 py-3 font-body text-[13px] max-w-xl">
              <span className="stamp stamp-red mr-3 text-[13px]">pre-launch</span>
              the chef is still sharpening his knives. socials and contract
              address publish the same minute he is ready. no allow list, no
              presale. you find out when everyone finds out.
            </div>
          </div>

          {/* right: the logo on a "framed photo" frame */}
          <div className="relative">
            <div className="relative inline-block tilt-r mx-auto">
              {/* tape strips */}
              <span className="tape tape-tl" />
              <span className="tape tape-tr" />
              <div className="bg-ink p-3 shadow-[8px_10px_0_rgba(0,0,0,0.18)]">
                <div className="bg-marinara p-2">
                  <img
                    src="/shark.png"
                    alt="Big Tony, head chef and great white"
                    className="block w-full max-w-[420px] mx-auto"
                  />
                </div>
                <div className="bg-ink text-cream font-display tracking-widest text-center pt-3 pb-1 text-sm uppercase">
                  big tony / head chef
                </div>
              </div>
            </div>

            {/* speech bubble pointing to the logo */}
            <div className="absolute -bottom-2 right-4 md:right-12 tilt-rr">
              <div className="bg-cream border-2 border-ink px-4 py-2 font-marker text-xl text-ink relative">
                "you break the spaghetti i break <span className="text-marinara">you</span>"
                <div className="absolute -top-3 left-8 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-ink" />
                <div className="absolute -top-[10px] left-[34px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-cream" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom checkered band */}
      <div className="tablecloth h-3" />
    </section>
  )
}
