var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
module.exports = {
    entry: {
        app: [
            './components/index.js'
        ]
    },
    watch: true,
    output: {
        path: ROOT_PATH,
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }],
    },
    node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}
