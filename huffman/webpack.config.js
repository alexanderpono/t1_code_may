const path = require('path');

module.exports = {
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
        alias: {
            '@src': path.resolve(__dirname, './src')
        }
    },
    entry: {
        back: './src/back.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'temp/back-dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    target: 'node',
    optimization: {}
};
