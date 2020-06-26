const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/rc-blueprint/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    externals: [
        {
            'react': 'react',
            'react-dom': 'reactDOM'
        }
    ]
};