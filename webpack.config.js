var path = require('path');
var ImageminPlugin = require ('imagemin-webpack');
/*var imageminPngquant = require ('imagemin-pngquant');*/
var HtmlWebpackPlugin=require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var devMode = process.env.NODE_ENV !== 'production';
/*var webpack = require('webpack');*/

module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                   'css-loader',
                   'sass-loader',
                ],
                exclude:/node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    'file-loader',
                    'img-loader',
                    {
                        loader: 'image-webpack-loader',
                        options:{ 
                            bypassOnDebug: true,
                            disable:true,
                        }
                    }
                ]
            }
        ]
    },
    devtool:'source-map',
    plugins:[
        /*new ImageminPlugin({
            bail:false,
            cache:true,
            imageminOptions:{
                plugins:[imageminPngquant()]
            },
            loader:false
        }),*/
        new HtmlWebpackPlugin({
            title:'..',
            template:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
        /*new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            waypoints:"waypoints"
        })*/
    ],
    stats:{
        children:false
    },
    devServer: {
        port:8080,
        inline:true
    }
};