const path = require('path');
const autoprefixer=require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',

    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader" // babel-loader is the webpack loader responsible for talking to Babel. 
            }
        },

        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader' ,
                     options:{
                        importLoaders :1,
                        modules:{
                            localIdenName: '[name]__[local]__[hash:base64:5]',
                        }
                    }} ,

                    {loader: 'postcss-loader' ,
                     options:{
                        ident:'postcss',
                        plugins :()=> []
                    }} ,
                ]
        },
    ]

};