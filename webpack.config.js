const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'liblab-lotr.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'eTrack',
        libraryTarget: 'umd'
    },
};