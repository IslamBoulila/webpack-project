const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
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
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            }
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [autoprefixer()]
                            }
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: "url-loader?limit=8000&name=images/[name].[ext]" // These are options : ?limit=8000&name=images/[name].[ext] (8000kb, name :where to store the image after transformation)
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
    ,
    plugins: [
        new HtmlWebPackPlugin({
            template: __dirname + "/src/index.html",//points to the file that we will use as a base; the starting point
            filename: "index.html",//file name that will be generzted 
            inject: 'body' //were all of this bundled code will be inject (body|head)
        })
    ]
};