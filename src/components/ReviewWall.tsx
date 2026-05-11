type Review = {
  stars: number
  title: string
  body: string
  author: string
  location: string
  date: string
  helpful: number
  tilt: 'tilt-l' | 'tilt-r' | 'tilt-ll' | 'tilt-rr'
}

const REVIEWS: Review[] = [
  {
    stars: 1,
    title: 'the chef was an actual SHARK',
    body: "i ordered the puttanesca and the chef stared at me the entire time i ate it. i could see him through the window. he was making eye contact. food was incredible to be fair. but i couldn't tell if he wanted to be friends or if i was next. one star.",
    author: 'brian k.',
    location: 'brooklyn, ny',
    date: '3 days ago',
    helpful: 412,
    tilt: 'tilt-l',
  },
  {
    stars: 1,
    title: 'asked for parmesan. left without my menu.',
    body: 'i ordered the linguine vongole and asked politely for some parmesan cheese and the chef bit my menu in half. literally bit it. food was 5 stars, service was. i don\u2019t know what that was. i am still shaking. one star.',
    author: 'kayla m.',
    location: 'hoboken, nj',
    date: '1 week ago',
    helpful: 287,
    tilt: 'tilt-r',
  },
  {
    stars: 5,
    title: 'the chef called me bambino. i wept.',
    body: "i don't even remember what i ate. the chef came out, looked at me, said 'eat more, bambino, you look like a stick.' my own father has never said this. five stars. i'm changing my will.",
    author: 'frankie d.',
    location: 'bensonhurst',
    date: '2 days ago',
    helpful: 1029,
    tilt: 'tilt-rr',
  },
  {
    stars: 1,
    title: 'they charged me in something called $SPAG',
    body: 'card got declined. i tried to pay in dollars and was informed dollars are not accepted on tuesdays. i washed dishes for two hours. the chef supervised. would actually return.',
    author: 'anonymous',
    location: '???',
    date: 'last tuesday',
    helpful: 891,
    tilt: 'tilt-ll',
  },
  {
    stars: 1,
    title: 'i am vegan',
    body: "i did not realize this was a seafood establishment, although in retrospect the name is fairly clear. they actually had a vegan option, the arrabbiata, and it was honestly the best pasta of my life. still one star because the chef is a shark and that felt unsafe.",
    author: 'olivia p.',
    location: 'manhattan',
    date: '5 days ago',
    helpful: 134,
    tilt: 'tilt-l',
  },
  {
    stars: 1,
    title: 'i ordered the special',
    body: "i don't want to talk about it.",
    author: 'health inspector',
    location: 'nyc dept of health',
    date: 'undated',
    helpful: 2_847,
    tilt: 'tilt-r',
  },
]

export default function ReviewWall() {
  return (
    <section className="relative paper-dark py-16 md:py-24 overflow-hidden border-t-[3px] border-ink">
      {/* stains */}
      <div className="coffee-ring" style={{ top: 130, left: 60, width: 110, height: 110 }} />
      <div className="oil-stain" style={{ bottom: 100, right: 80, width: 200, height: 200 }} />

      <div className="relative max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <div className="font-body text-[12px] uppercase tracking-[0.3em] text-ink/70 mb-2">
            yelp dot com / the public has spoken
          </div>
          <h2 className="font-display text-ink text-5xl md:text-7xl uppercase leading-none">
            one star reviews.
          </h2>
          <p className="font-marker text-marinara text-2xl md:text-3xl mt-2">
            we kept them all. they are framed in the bathroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-napkin border-2 border-ink px-5 py-3 tilt-l font-marker text-2xl text-ink">
            average rating: <span className="text-marinara">1.7 stars</span>
            <span className="block text-base text-ink/70 mt-1">
              chef refuses to acknowledge a star system exists.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className={`${r.tilt} relative bg-napkin border-2 border-ink p-5`}>
      <span className="tape tape-top" />

      <div className="flex items-center gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={
              n <= r.stars ? 'star text-2xl leading-none' : 'star-off text-2xl leading-none'
            }
          >
            ★
          </span>
        ))}
      </div>

      <h3 className="font-display text-ink text-2xl leading-tight mb-2 uppercase">
        {r.title}
      </h3>

      <p className="font-body text-[13px] text-ink/85 leading-relaxed">
        {r.body}
      </p>

      <div className="mt-4 pt-3 border-t border-dashed border-ink/30 flex items-center justify-between text-[11px] font-body text-ink/70 uppercase tracking-wide">
        <span>
          {r.author} <span className="text-ink/40">/</span> {r.location}
        </span>
        <span>{r.date}</span>
      </div>
      <div className="mt-1 text-[11px] font-body text-ink/60">
        {r.helpful.toLocaleString()} people found this helpful
      </div>
    </div>
  )
}
