/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            fontfamily: {
                pacifico: ['pacifico', 'cursive'],
                quicksand: ['Quicksand', 'Quicksand'],
            },
        },
    },
    plugins: [],
};