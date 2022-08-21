module.exports = {
    "files": [
        "./assets/dist/**/*",
    ],
    "server": {
        baseDir: "./assets/dist/",
        index: "index.html",
    },
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "open": false
};