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
            spacing: {
                state_1: "20%",
                state_2: "5%",
            },
            height: {
                around: "12.5%",
                center: "75%",
            },
        },
    },
    plugins: [],
};
