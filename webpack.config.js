var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
        }],
        postLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['es3ify-loader']
            }
        ]
    },
    plugins: [
        commonsPlugin,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../build/index.html', //生成的html存放路径，相对于path
            template: 'src/template/index.html', //html模板路径
            inject: false,	//js插入的位置，true/'head'/'body'/false
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        })

    ]
};


module.exports = config;