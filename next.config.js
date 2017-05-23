module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          'raw-loader',
          'val-loader',
          {
            loader: 'skeleton-loader',
            options: {
              procedure: (content) => (
                `${content} \n` + ['module.exports = {',
                  'stylesheet: module.exports.toString(),',
                  'classNames: exports.locals',
                  '}'
                ].join('')
              )
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    )

    return config
  }
}
