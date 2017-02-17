var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var glob = require('glob');

process.env.NODE_ENV = 'production';

var config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.min.js'
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
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};

glob.sync("src/template/**/*.html").forEach(function (file) {
    var conf = {
        filename: file.replace(new RegExp('^src/template/'), '../build/'), //生成的html存放路径，相对于path
        template: file, //html模板路径
        inject: true,   //js插入的位置，true/'head'/'body'/false
        showErrors:false,
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
        }
    }

    config.plugins.push(new HtmlWebpackPlugin(conf));
});


// console.log(JSON.stringify(config, null, 4))
module.exports = config;
