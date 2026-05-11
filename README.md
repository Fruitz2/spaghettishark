# spaghetti shark / pre-launch

solana memecoin landing for $SPAG. single-file, single-purpose, pre-launch.

## what's here

- `index.html` + `src/` — vite + react + ts + tailwind source
- `public/shark.png` — the chef logo
- `public/og.png` — 1200x630 social card (rendered to match the site)
- `vercel.json` — framework hint so deploys are zero-config

## run locally

    npm install
    npm run dev

## ship it (three options)

### option 1 — drag and drop, no cli needed

    npm install
    npm run build

then drag the `dist/` folder onto <https://vercel.com/new>. it auto-detects
and gives you a `.vercel.app` url in about 15 seconds. attach your domain
from the project settings.

### option 2 — vercel cli, one command

    npm install -g vercel    # if you don't have it
    vercel                   # first run will prompt to log in and link

every subsequent `vercel` deploys a preview. `vercel --prod` promotes.

### option 3 — git integration

    git init && git add . && git commit -m "shark"
    # push to a github repo, import that repo into vercel.com, done.

future pushes auto-deploy.

## attaching spaghettishark.xyz

once deployed:

1. vercel dashboard → the project → settings → domains
2. add `spaghettishark.xyz`
3. update the dns record at your registrar to the cname/a-record vercel
   prints. propagates in minutes.

## tweaking it

- copy lives in `src/components/` — each section is its own file
- locked palette and type families are in `tailwind.config.js`
- design system (paper, stamps, tablecloth, marker scribbles) is in
  `src/index.css`. nothing magical, just css.
- before shipping any changes, run a grep for em-dashes:
    `grep -rn "—\|–\|▸" src/`
  it should return nothing. those characters are how ai cadence leaks
  through.

## offline preview

there's a standalone single-file build alongside this project,
`spaghettishark-standalone.html`. open it in a browser to preview
without running the dev server. useful for showing the site to people
who don't have node installed.

mangia.
