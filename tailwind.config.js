/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#10A37F",
                secondary: "#0F172A",
                background: "#F7F9FB",
                surface: "#FFFFFF",
                accent: "#2563EB",
                danger: "#EF4444",
                text_primary: "#111827",
                text_secondary: "#6B7280"
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
