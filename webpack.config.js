const path = require('path');
const nodeExternals = require('webpack-node-externals');

const commonModule = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'env'],
            },
        },
    ],
};

module.exports = [
    {
        // client bundle config
        entry: path.resolve(__dirname, 'public', 'client.js'),
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'client-bundle.js',
        },
        module: commonModule,
    },
    {
        // server bundle config
        entry: path.resolve(__dirname, 'server', 'server.js'),
        output: {
            path: path.resolve(__dirname, 'server'),
            filename: 'server-build.js',
        },
        module: commonModule,
        target: 'node',
        externals: [nodeExternals()],
        node: {
            __filename: false,
            __dirname: false,
        },
    },
];
