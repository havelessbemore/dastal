const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ["@babel/preset-typescript"]
                        ]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({/* options */})
        ],
    },
    output: {
        library: {
            name: 'Dastal',
            type: 'umd',
            umdNamedDefine: true,
        },
        filename: 'dastal.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
};