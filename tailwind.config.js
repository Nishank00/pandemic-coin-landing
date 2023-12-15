/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "pdc-red": "#BB1A37",
                "pdc-blue": "#342CB2",
                "pdc-l-gray": "#7B7E98",
                "pdc-d-gray": "#1C1D26",
            },
        },
    },
    plugins: [],
};
