const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, 'src', 'app.tsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin([
            { from: './src/assets/index.html', to: './' },
            { from: './src/assets/favicon/', to: './favicon/' },
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        compress: true,
        port: 9000,
        stats: {
            cached: false,
            cachedAssets: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            modules: false,
        }
    }
};
