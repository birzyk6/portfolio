import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                consolas: ["Consolas", "Courier New", "monospace"],
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-gutter": {
                    "scrollbar-gutter": "auto",
                },
                ".scrollbar-gutter-none": {
                    "scrollbar-gutter": "none",
                },
                ".scrollbar-gutter-standalone": {
                    "scrollbar-gutter": "stable",
                },
            });
        },
    ],
} satisfies Config;
