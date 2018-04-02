const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var live = process.env.NODE_ENV == 'production';

var plugins = []
if (live) plugins.push(new ExtractTextPlugin({filename: "style.css"}))

var cssLoader;
if (live) {
    cssLoader = ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
    });
} else {
    cssLoader = [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        }
    ];
}

const config = {
    entry: './src/index.js',

    devtool: 'source-map',

    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: plugins,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: cssLoader
            }
        ]
    },
};

module.exports = config;
