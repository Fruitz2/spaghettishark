// the recipe card. handwritten on a stained index card.
// title has marker corrections crossing out earlier attempts.

export default function RecipeCard() {
  return (
    <section className="relative paper py-16 md:py-24 overflow-hidden">
      {/* stains */}
      <div className="oil-stain" style={{ top: 80, left: 80, width: 200, height: 200 }} />
      <div className="coffee-ring" style={{ bottom: 60, right: 100, width: 90, height: 90 }} />

      <div className="relative max-w-3xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <div className="font-body text-[12px] uppercase tracking-[0.3em] text-ink/60 mb-2">
            family recipe / do not share / he will know
          </div>
          <h2 className="font-display text-shark text-5xl md:text-7xl uppercase leading-none">
            how to cook pasta
          </h2>
          <div className="font-marker text-marinara text-2xl mt-1">(by a shark)</div>
        </div>

        <div className="relative index-card p-8 md:p-12 pl-16 md:pl-20 tilt-l">
          <span className="tape tape-top" />

          {/* corrected title block */}
          <div className="mb-8 font-marker">
            <div className="text-2xl md:text-3xl leading-tight">
              <span className="strikethrough text-ink/70">nonna's recipe</span>
            </div>
            <div className="text-2xl md:text-3xl leading-tight -mt-1">
              <span className="strikethrough text-ink/70">marco's recipe</span>
            </div>
            <div className="text-3xl md:text-4xl leading-tight -mt-1 text-marinara">
              BIG TONY's recipe.
            </div>
            <div className="text-base text-ink/60 mt-1">(do not put your name on it. he will see.)</div>
          </div>

          <ol className="space-y-6 font-body text-[15px] md:text-[16px] text-ink leading-relaxed">
            <Step n="1">
              you take the spaghetti. you do not break it. you break it and
              i see you in the parking lot.
            </Step>
            <Step n="2">
              boil the water until it is{' '}
              <span className="font-marker text-marinara text-xl">angry</span>.
              not warm. angry.
            </Step>
            <Step n="3">
              salt the water like it owes you money. handful. not a teaspoon.
              you are not a child.
            </Step>
            <Step n="4">
              pasta in. eight minutes.{' '}
              <span className="font-marker text-shark text-xl">do not look at it</span>.
              it knows.
            </Step>
            <Step n="5">
              while it cooks you make the sauce. tomato, garlic, olive oil.
              that is it. no sugar. who taught you sugar. who.
            </Step>
            <Step n="6">
              drain. but you save a cup of the pasta water. yes you need it.
              i do not make the rules i only enforce them.
            </Step>
            <Step n="7">
              pasta goes IN the sauce, not the other way. you finish in the
              pan. that water you saved? in there. now you have a sauce.
            </Step>
            <Step n="8">
              eat it standing up at the stove. it is better that way. nobody
              knows why. it just is.
            </Step>
          </ol>

          <div className="mt-10 pt-6 border-t border-dashed border-ink/30 font-marker text-marinara text-2xl">
            if your pasta is bad it is your fault.<br />
            <span className="text-shark text-xl">not the chef. the chef is perfect.</span>
          </div>

          <div className="mt-6 flex justify-end">
            <div className="stamp stamp-red tilt-rr text-sm">approved by chef</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="font-display text-marinara text-3xl leading-none shrink-0 w-8 -mt-1">
        {n}.
      </span>
      <span className="flex-1">{children}</span>
    </li>
  )
}
