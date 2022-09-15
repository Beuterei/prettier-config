module.exports = {
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    arrowParens: 'avoid',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.{yaml,yml}',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
