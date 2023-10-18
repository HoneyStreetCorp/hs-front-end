/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                'geori-primary': '#F8C8CA',
                'geori-pink': '#F3A3B2',
                'geori-pink2': '#F4CAD7',
                'geori-blue': '#CED7E9',
                'geori-yellow': '#FFFCE6',
                'geori-warn': 'red',
                'geori-success': 'green',
            },
            borderColor: {
                'geori-primary': '#F8C8CA',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                KBIZ: ['KBIZHanmaumGothic', 'sans-serif'],
            },
            colors: {
                'font-main': '#757070',
            },
        },
    },
    plugins: [],
};
