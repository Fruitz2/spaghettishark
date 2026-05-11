/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // locked palette
        napkin: '#faf3df',       // paper background
        ink: '#1a120c',          // almost-black brown print
        marinara: '#c02a2a',     // logo red
        sauce: '#861818',        // shadow red
        shark: '#2d5f6d',        // logo teal
        'shark-light': '#4a8a99',
        cream: '#f5e9c8',        // chef hat / parchment highlight
        olive: '#5a7a2a',        // Italian flag green / herbs
        mustard: '#d4a017',      // vintage menu accent
      },
      fontFamily: {
        // locked type
        display: ['Anton', 'Impact', 'sans-serif'],          // B-movie poster bold condensed
        italian: ['"Bowlby One SC"', 'Anton', 'serif'],      // chunky retro italian
        script: ['Allura', '"Brush Script MT"', 'cursive'],  // fancy ristorante
        body: ['"Special Elite"', 'Courier', 'monospace'],   // typewriter menu
        marker: ['Caveat', 'cursive'],                       // marker corrections
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        wobble: 'wobble 0.6s ease-in-out infinite',
        blink: 'blink 1.4s steps(1) infinite',
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        wobble: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
