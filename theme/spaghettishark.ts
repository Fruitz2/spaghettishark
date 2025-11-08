export const theme = {
  name: "Spaghetti Shark",
  colors: {
    bg: "#0A2334", // deep sea
    fg: "#F4E7D2", // pasta cream
    accent: "#E0342C", // marinara
    accent2: "#2FA66A", // basil
    subtle: "#0F3146",
    gradient: ["#E0342C", "#2FA66A", "#F4E7D2"],
  },
  fonts: { display: "var(--font-display)", body: "var(--font-body)" },
  radius: { xl: "1.5rem" },
  shadows: {
    glow: "0 0 60px color-mix(in srgb, var(--accent) 30%, transparent)",
  },
};
