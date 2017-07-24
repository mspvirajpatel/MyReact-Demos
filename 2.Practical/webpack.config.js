var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js', //starting Compile at postistion
    output: {
        path: path.resolve(__dirname, 'build'), //Folder Create
        filename: 'bundle.js' // File Create
    },
    module: { // Which Compiler use this is apply in Module
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-2']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map' // reserch
};
