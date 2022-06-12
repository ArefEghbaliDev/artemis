const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {},
        colors: {
            dark: {
                500: 'var(--dark-500)',
                400: 'var(--dark-400)',
                300: 'var(--dark-300)',
            },
            primary: {
                600: 'var(--primary-600)',
                500: 'var(--primary-500)',
                400: 'var(--primary-400)',
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
