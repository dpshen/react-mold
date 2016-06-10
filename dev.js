var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var config = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/index.js')
        ]
    }
    ,
    output: {
        path: path.join(__dirname, 'dev'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'react-hot!babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            include: [path.join(__dirname, 'src')]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径，相对于path
            template: 'src/template/index.html', //html模板路径
            inject: true,	//js插入的位置，true/'head'/'body'/false
            minify: { //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false//删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

new WebpackDevServer(webpack(config), {
    quiet: false,
    compress: false,
    hot: true,
    historyApiFallback: true,
    stats: {
        // Config for minimal console.log mess.
        assets: true,
        colors: true,
        version: false,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: true
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost:3000');
});



