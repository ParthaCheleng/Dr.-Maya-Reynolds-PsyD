import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "lilac-cream": "#F6F4EF", // Background color
                "lilac-green": "#2B2B2B", // Text and dark elements
                "lilac-beige": "#E3E1DC", // Card backgrounds
                "lilac-lavender": "#7A8CA3", // Lavender background (approx from image)
                "lilac-olive": "#9AA0A6", // Office section background
            },
            fontFamily: {
                serif: ["'Source Serif 4'", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
