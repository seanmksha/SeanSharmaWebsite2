var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    
    entry: {
        'app': './assets/app/main.ts'
    },
    plugins: [
        new ExtractTextPlugin('./public/stylesheets/[name].css'),
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Sass to CSS 
                }]
               // loader: ExtractTextPlugin.extract(
                 //   'style-loader', // backup loader when not building .css file
                   // 'css-loader!sass-loader' // loaders to preprocess CSS
            //    )
            }
        ],
        exprContextCritical: false

    }
};