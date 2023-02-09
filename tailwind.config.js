/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        extend: {},
        fontFamily: {
            yekan: ["IRANYekan"],
        },
        fontSize: {
            xxs: ".6rem",
            xs: ".7rem",
        },
    },
    plugins: [],
};
