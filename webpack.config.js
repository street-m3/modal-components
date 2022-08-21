const dev = 'development';
const pro = 'production';

const main = {
    mode: pro,
    entry: `./assets/src/js/index.js`,

    output: {
        path: `${__dirname}/assets/dist/js`,
        filename: "main.js"
    },

    resolve: {
        extensions: ['.js', '.json', '.wasm'],
    },
}

module.exports = [ main ]