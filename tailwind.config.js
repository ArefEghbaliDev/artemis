module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    500: '#100F1A',
                    400: '#181724',
                    300: '#23222e',
                },
                primary: {
                    600: '#2F0AFF',
                    500: '#060029',
                    400: '#5233FF',
                },
            },
        },
        colors: {
            white: {
                500: '#FFFDF7',
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
