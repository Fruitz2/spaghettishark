type Dish = {
  name: string
  italian?: string
  desc: string
  price: number | string
  marker?: 'sold-out' | 'chef-special' | 'new' | 'do-not-order' | null
}

const PRIMI: Dish[] = [
  {
    name: 'Spaghetti al Pomodoro',
    italian: 'tomato, basil, salt, prayer',
    desc: 'four ingredients. boring. for cousins.',
    price: 4,
  },
  {
    name: 'Linguine alle Vongole',
    italian: 'clams, white wine, garlic',
    desc: 'clams sourced personally by the chef. no other questions.',
    price: 8,
    marker: 'chef-special',
  },
  {
    name: 'Cacio e Pepe',
    italian: 'pecorino, black pepper, pasta water',
    desc: 'three ingredients you cannot mess this up. you will.',
    price: 5,
  },
  {
    name: 'Carbonara',
    italian: 'guanciale, egg, pecorino',
    desc: 'NO CREAM you stronzo. ask for cream and you eat outside.',
    price: 6,
  },
  {
    name: 'Penne all\u2019Arrabbiata',
    italian: 'chili, garlic, tomato',
    desc: 'chef arrabbiato. you arrabbiato. everyone arrabbiato. good.',
    price: 6,
  },
  {
    name: 'Puttanesca',
    italian: 'olives, capers, anchovy',
    desc: 'named after your last girlfriend. she was salty too.',
    price: 7,
  },
]

const SECONDI: Dish[] = [
  {
    name: 'Tagliatelle al Tonno',
    italian: 'tuna ragu, lemon',
    desc: 'the tuna had it coming.',
    price: 12,
  },
  {
    name: 'Ravioli',
    italian: 'stuffed with whatever',
    desc: "chef's choice. do not ask what is inside. do not look.",
    price: 9,
  },
  {
    name: 'Fettuccine Alfredo',
    desc: 'this is not real. americans invented it. shame on your family.',
    price: 'DO NOT ORDER',
    marker: 'do-not-order',
  },
  {
    name: 'Spaghetti and Meatballs',
    desc: 'also american. but the chef is in a good mood today. fine.',
    price: 11,
  },
  {
    name: "The Special",
    italian: 'caught this morning',
    desc: 'chef catches it himself. you will not be told what it is.',
    price: 25,
    marker: 'chef-special',
  },
  {
    name: 'Tiramisu',
    italian: 'coffee, mascarpone, regret',
    desc: 'eat the whole thing. cry into the cup. it is the way.',
    price: 6,
  },
]

const DRINKS = [
  { name: 'Acqua frizzante', price: 2, desc: 'with bubbles. like life.' },
  { name: 'Acqua naturale', price: 2, desc: 'without bubbles. like marriage.' },
  { name: 'House red', price: 5, desc: 'served in a juice glass. as god intended.' },
  { name: 'Espresso', price: 3, desc: 'one shot. you do not need two. trust me.' },
  { name: 'Limoncello', price: 4, desc: 'after dinner. nonna made it. do not refuse.' },
]

export default function TheMenu() {
  return (
    <section className="relative paper-dark border-t-[3px] border-b-[3px] border-ink overflow-hidden">
      {/* hand-placed stains */}
      <div className="oil-stain" style={{ top: 120, right: '15%', width: 220, height: 220 }} />
      <div className="coffee-ring" style={{ bottom: 220, right: 60, width: 96, height: 96 }} />
      <div className="coffee-ring" style={{ top: 60, left: 90, width: 70, height: 70 }} />

      <div className="relative max-w-5xl mx-auto px-5 md:px-10 py-16 md:py-20">
        {/* menu header, fake printed-by-marco header */}
        <div className="text-center mb-12">
          <div className="font-body text-[12px] uppercase tracking-[0.3em] text-ink/60 mb-2">
            the menu / printed yesterday / changes when the chef wants
          </div>
          <h2 className="font-italian text-marinara text-6xl md:text-8xl leading-none uppercase tilt-l inline-block">
            il menu
          </h2>
          <div className="font-script text-shark text-3xl md:text-5xl -mt-3 tilt-r">
            di Big Tony
          </div>
          <div className="mt-4 flex justify-center items-center gap-3 font-body text-[12px] uppercase tracking-widest text-ink/70">
            <span>antipasti</span><span className="text-marinara">·</span>
            <span>primi</span><span className="text-marinara">·</span>
            <span>secondi</span><span className="text-marinara">·</span>
            <span>dolci</span>
          </div>
          <div className="mt-4 stamp stamp-red text-[11px] tilt-r">
            prices in <span className="font-mono">$SPAG</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <Column heading="PRIMI" subhead="the pasta. the point." dishes={PRIMI} />
          <Column heading="SECONDI" subhead="and everything else." dishes={SECONDI} />
        </div>

        {/* drinks card, smaller */}
        <div className="mt-14 relative max-w-2xl mx-auto bg-napkin border-2 border-ink p-6 md:p-8 tilt-r">
          <span className="tape tape-tl" />
          <span className="tape tape-tr" />
          <div className="text-center mb-4">
            <div className="font-italian text-shark text-3xl uppercase leading-none">le bevande</div>
            <div className="font-script text-ink/70 text-xl -mt-1">what to drink</div>
          </div>
          <ul className="space-y-3">
            {DRINKS.map((d, i) => (
              <li key={i} className="font-body">
                <div className="leaders">
                  <span className="font-bold text-ink uppercase tracking-wide">{d.name}</span>
                  <span className="dots" />
                  <span className="font-display text-marinara text-lg">{d.price}</span>
                </div>
                <div className="text-[12px] text-ink/70 italic mt-0.5 pl-1">{d.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* angry marker note at the bottom */}
        <div className="mt-14 text-center">
          <div className="inline-block tilt-l">
            <p className="font-marker text-marinara text-3xl md:text-4xl leading-tight">
              no substitutions.<br />
              no parmesan on the seafood.<br />
              <span className="text-shark">if you ask for ketchup you leave.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Column({ heading, subhead, dishes }: { heading: string; subhead: string; dishes: Dish[] }) {
  return (
    <div>
      <div className="mb-4 border-b-2 border-ink pb-1">
        <h3 className="font-italian text-ink text-3xl md:text-4xl uppercase leading-none">{heading}</h3>
        <div className="font-marker text-marinara text-xl -mt-0.5">{subhead}</div>
      </div>
      <ul className="space-y-5">
        {dishes.map((d, i) => (
          <li key={i} className="font-body relative">
            <div className="leaders">
              <div className="flex items-baseline gap-2 flex-1">
                <span
                  className={
                    'text-ink text-[17px] uppercase tracking-wide ' +
                    (d.marker === 'do-not-order' ? 'strikethrough' : 'font-bold')
                  }
                >
                  {d.name}
                </span>
                {d.marker === 'chef-special' && (
                  <span className="stamp stamp-green text-[9px] ml-1">chef</span>
                )}
              </div>
              <span className="dots" />
              <span
                className={
                  d.marker === 'do-not-order'
                    ? 'font-marker text-marinara text-2xl'
                    : 'font-display text-marinara text-xl'
                }
              >
                {d.price}
                {typeof d.price === 'number' && (
                  <span className="text-[10px] text-ink/60 ml-1 font-mono tracking-tight">$SPAG</span>
                )}
              </span>
            </div>
            {d.italian && (
              <div className="font-script text-shark text-lg -mt-1 pl-1">{d.italian}</div>
            )}
            <div className="text-[13px] text-ink/75 italic mt-0.5 pl-1">{d.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
