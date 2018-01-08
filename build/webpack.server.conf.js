const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
module.exports = webpackMerge(baseConfig, {
    target: 'node',
    entry: {
        app: path.join(__dirname,'../src/server-entry.js'),
    }
})