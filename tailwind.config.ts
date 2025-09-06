import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens:{
                'sx': '475px',
            },
            colors:{
                primary:{
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                secondary: "#FBE843",
                black:{
                    "100" : "#333333",
                    "200" : "#141413",
                    "300" : "#7D8087",
                    DEFAULT: "#000000"
                },
                white:{
                    "100" : "#F7F7F7",
                    DEFAULT: "#FFFFFF"
                }
            },
            fontFamily: {
                "work-sans": ["var(--font-geist-sans)"],
                "work-mono": ["var(--font-geist-mono)"]
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            },
        },
    },
    plugins: [animate, typography],
}
