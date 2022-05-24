module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    500: '#100F1A',
                    400: '#181627',
                    300: '#201D34',
                },
                primary: {
                    600: '#2F0AFF',
                    500: '#401FFF',
                    400: '#5233FF',
                },
            },
        },
        colors: {
            white: {
                500: '#FFFDF7',
            },
        },
    },
    plugins: [],
};
