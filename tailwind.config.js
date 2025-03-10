/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          card: "var(--card)",
          cardForeground: "var(--card-foreground)",
          border: "var(--border)",
          muted: "var(--muted)",
          accent: "var(--accent)",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };