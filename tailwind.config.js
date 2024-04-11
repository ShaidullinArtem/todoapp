/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                "light-gray": "#F6F9FB",
                "dark-gray": "#C3C3C3",
                "primary": "#1890FF",
            }
        }
    },
}
