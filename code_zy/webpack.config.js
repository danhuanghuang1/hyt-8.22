// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 按需引入
const { VueLoaderPlugin } = require('vue-loader')
// 配置包的入口和出口
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'bundle'), //
    filename: 'bundle.js',
    clean: true, // 先清除path目录, 再冲新打包
  },
  //   自动生成html
  plugins: [
    new HtmlWebpackPlugin({
      // 指定模板
      template: './lib/index.html',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 30000, // 端口号
    open: true,
  },
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(gif|jpg|png|svg|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
}
