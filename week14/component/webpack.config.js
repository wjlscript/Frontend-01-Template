const path = require('path');

module.exports = {
    entry: './main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                "@babel/plugin-transform-react-jsx",
                                {
                                    pragma: "createElement",
                                    pragmaFrag: "Fragment"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false
    }
}
