#!/usr/bin/env node

module.exports = (fileName: string, fileDescription: string, fileAuthor: string) => {
    return `{
    "name": "${fileName}",
    "version": "0.0.1",
    "description": "${fileDescription}",
    "scripts": {
        "local": "webpack-dev-server --open --watch --display-error-details --config ./config/webpack.dev --env=./.env --mode development --entryPoint=main",
        "build": "rimraf dist && webpack --config ./config/webpack.prod --mode production --env=./.env --entryPoint=main",
        "docs": "./node_modules/.bin/jsdoc -c jsdoc.json"
    },
    "author": "${fileAuthor}",
    "license": "ISC",
    "devDependencies": {
        "@babel/core": "^7.1.2",
        "@babel/polyfill": "^7.0.0",
        "@babel/preset-env": "^7.1.0",
        "babel-istanbul": "^0.12.2",
        "babel-loader": "^8.0.4",
        "babel-plugin-add-module-exports": "^0.2.1",
        "brotli-webpack-plugin": "^1.1.0",
        "clean-webpack-plugin": "^0.1.19",
        "css-loader": "^0.28.11",
        "core-js": "^2.0.0",
        "docdash": "^1.1.0",
        "dotenv-webpack": "^1.5.7",
        "eslint": "^5.5.0",
        "extract-text-webpack-plugin": "^4.0.0-beta.0",
        "file-loader": "^1.1.11",
        "html-webpack-plugin": "^3.2.0",
        "istanbul-instrumenter-loader": "^3.0.1",
        "jsdoc": "^3.6.1",
        "mini-css-extract-plugin": "^0.4.4",
        "node-sass": "^4.12.0",
        "optimize-css-assets-webpack-plugin": "^5.0.3",
        "resolve-url-loader": "^3.0.0",
        "rimraf": "^2.6.2",
        "sass-loader": "^7.1.0",
        "string-replace-loader": "^2.1.1",
        "style-loader": "^0.21.0",
        "terser-webpack-plugin": "^1.1.0",
        "text-replace-html-webpack-plugin": "^1.0.3",
        "uglifyjs-webpack-plugin": "^1.2.5",
        "webpack": "^4.26.1",
        "webpack-cli": "^3.0.8",
        "webpack-dev-server": "^3.1.10",
        "webpack-merge": "^4.1.3"
    },
    "dependencies": {}
}`
}