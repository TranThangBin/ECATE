/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#0C368D",
                secondary: "#3B58CC",
                tertiary: "#2171B5",
                quanternary: "#06BEE1",
            },
            width: {
                fullX4: "400%",
            },
        },
    },
    plugins: [],
};
