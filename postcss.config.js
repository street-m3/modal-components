module.exports = {
    plugins: [
        require('postcss-import-ext-glob'),
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-preset-env')({
            stage: 1,
            autoprefixer: {
                grid: true
            },
        }),
        require('postcss-simple-vars')({
            silent: true,
        }),
        require('postcss-extend-rule'),
        require('postcss-calc'),
        require('postcss-pxtorem')({
            rootValue: 16,
            replace: true,
            exclude: /node_modules/i,
        }),
        require('postcss-sorting')({
            'order': [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'at-rules',
                'rules'
            ],
            'properties-order': 'alphabetical',
            'unspecified-properties-position': 'bottom'
        }),
        require('postcss-sort-media-queries'),
        require('cssnano')({
            "autoprefixer": false,
            preset: [
                'default', {
                    discardComments: {
                        removeAll: false,
                    },
                }
            ],
        }),
    ]
}