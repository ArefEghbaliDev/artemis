const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            dark: {
                500: '#100F1A',
                400: '#181724',
                300: '#23222e',
            },
            primary: {
                600: '#2F0AFF',
                500: '#401FFF',
                400: '#5233FF',
            },
            transparent: 'transparent',
            white: {
                500: '#FFFDF7',
            },
            red: {
                500: colors.red[500],
            },
        },
        borderRadius: {
            DEFAULT: '12px',
            sm: '6px',
            lg: '24px',
            full: '999px',
        },
        fontFamily: {
            display: ['Poppins', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
        },
    },
    plugins: [],
};
