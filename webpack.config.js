var fs = require("fs")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require("path");

//当前环境 daily  dist
//cross-env NODE_ENV=dist webpack
var environment = process.env.NODE_ENV || "dev" // daily dev dist
//源文件目录
var rootPath = "./src";
//发布文件目录
var distPath = "./build";

//cdn
var daily_publicPath = "http://spa.yuantutech.com/mock-mold";
var dist_publicPath = "http://spa.yuantutech.com/mock-mold";
//本地开发环境通常不需要配置
var dev_publicPath = "/";

var dev_environment = environment.indexOf("dev"); // 本地开发环境 webpack dev
var daily_environment = environment.indexOf("daily"); // daily环境 webpack daily
var dist_environment = environment.indexOf("dist"); // 生产环境 webpack dist

var publicPath = daily_environment != -1 ? daily_publicPath : (dist_environment != -1 ? dist_publicPath : dev_publicPath);

var extractLESS = new ExtractTextPlugin('[name].css');

//读取.js文件作为入口
var entry = {};
fs.readdirSync(rootPath).map(function (item) {
  if (/\.js$/.test(item) && item != "route.js") {
    entry[item.replace(".js", "")] = [rootPath + "/" + item]
  }
});

var config = {

  name: "browser",
  entry: entry,
  output: {
    path: path.resolve(__dirname, distPath),
    publicPath: publicPath,
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx)/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
          plugins: ["transform-decorators-legacy", 'transform-runtime']
        }
      },
      {
        test: /(\.less$)|(\.css$)/,
        /**
         css-loader less-loader autoprefixer
         extractLESS.extract 独立打包 css文件
         ['css','less','autoprefixer'] ==> ['css-loader','less-loader','autoprefixer-loader'] 的简写
         */
        loader: extractLESS.extract(['css', 'less', 'autoprefixer'])
      },
      { test: /\.json$/, loader: "json-loader" },

    ]
  },
  plugins: [
    extractLESS
  ]
}


/**
 多入口的的配置
 js文件名和html文件名一一对应

 比如

 index.js
 index.html

 main.js
 main.html

 */
Object.keys(config.entry).map(function (key) {

  if (fs.existsSync(path.resolve(rootPath, `${key}.html`))) {
    config.plugins.push(
      new HtmlWebpackPlugin({
        chunks: [key],
        filename: path.resolve(distPath, `${key}.html`),
        template: path.resolve(rootPath, `${key}.html`),
        inject: 'body',
        hash: true,
        minify: {
          removeComments: false,
          collapseWhitespace: false
        }
      })
    )
  }
})

// console.log(route)

//线上打包需要压缩代码
if (dist_environment != -1) {
  config.plugins.unshift(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

/**
 热加载需要的两个插件
 */
if (dev_environment != -1) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoErrorsPlugin({"process.env.NODE_ENV": "development"}))

  var WebpackDevServer = require("webpack-dev-server")
  var port = "8080";
  var hosts = "127.0.0.1";

  Object.keys(config.entry).map(function(item){
    config.entry[item].unshift(`webpack-dev-server/client?http://${hosts}:${port}/`,"webpack/hot/dev-server")
  })

  var compiler = webpack(config);

  var server = new WebpackDevServer(compiler, {
    //热加载
    hot:true,
    //热加载必须的 inline
    inline:true,
    quiet: false,
    compress: false,
    historyApiFallback: true,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    }

  });
  server.listen(port);
  console.log(`Open http://${hosts}:${port}/index.html`)
}


module.exports = [config, {
  name: "server-side rendering",
  entry: "./singleCI/renderRoute.js",
  target: "node",
  output: {
    path: "./singleCI",
    filename: "renderRoute.bundle.js",
    libraryTarget: "commonjs2"
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /(\.less$)|(\.css$)/, loader: path.join(__dirname, "singleCI", "style-collector") +"!css!less" },
    ]
  }
}];