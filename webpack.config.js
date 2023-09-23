// webpack.config.js
const path = require('path')

module.exports = {
  // 시작점을 src/index를 바라보게 한다.
  entry: path.resolve(__dirname, './src'),
  output: {
    // 번들 결과물을 저장할 위치와 이름 설정
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // 어떤 파일들을 어떤 loader 를 이용하여 해석 할 것 인가
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'], // import 할 때 확장자 생략 가능
  },
}
