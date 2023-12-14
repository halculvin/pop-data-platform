/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        wwblue: "#2D428B",
        wwgreen: "#3EAE76",
        wwlblue: "#E8F3FF",
        wwlgreen: "#CBE9D9",
        wwmblue: "#116ABF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        neuropol: ['Neuropol X', 'sans-serif'],
        neuropoln: ['Neuropol Nova', 'sans-serif'],
        merriweatherb: ['Merriweather Bold', 'sans-serif'],
      },
      backgroundImage: {
        'banner-bg':"url('../public/banner.jpg')",
        'darkearth-bg':"url('../public/darkearth.jpg')",
        'desklaptop-bg':"url('../public/desklaptop.jpg')",
        'outlineboxes-bg':"url('../public/outlineboxes.jpg')",
        'laptopscollab-bg':"url('../public/laptopscollab.jpg')",
        'lightnetwork-bg':"url('../public/lightnetwork.jpg')",
        'campfiroutlineboxese-bg':"url('../public/campfire.jpg')",
        'darkusa-bg':"url('../public/darkusa.jpg')",
        'handstogether-bg':"url('../public/handstogether.jpg')",
        'crowd-bg':"url('../public/crowd.jpg')",
        'kojo-bg':"url('../public/kojo.svg')",
        'POPDataGraph-bg':"url('../public/POPDataGraph.jpg')",
        'pdpcuration-bg':"url('../public/pdpcuration.png')",
        'pdpvisual-bg':"url('../public/pdpvisual.png')",
        'login-bg':"url('../public/login.png')",
        'safe-bg':"url('../public/safe.jpg')",
        'campfire-bg':"url('../public/campfire.jpg')",
        'map-bg':"url('../public/map.svg')",

      }
    },
  },
  plugins: [require("tailwindcss-animate")],
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
        },
      },
    ],
  },
}