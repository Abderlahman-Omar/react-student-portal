/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            borderRadius: {
                "4xl": "4rem", // or your desired radius value
            },
            minHeight: {
                "custom-height": "500px", // Replace '400px' with your desired height
            },
            minWidth: {
                "custom-width": "700px", // Replace '400px' with your desired height
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
