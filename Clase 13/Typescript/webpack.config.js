const path = require ("path");
// const webpackNodeExternals = require("webpack-node-externals");


module.exports = {
    mode:"production",
    entry:"./src/server.ts",
    // plugins:[webpackNodeExternals()],
    target:"node",
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js",
    },
    resolve:{
        extensions: [".ts",".js"],
    },
    module:{
        rules:[{
            test:/\.tsx?/,
            use:"ts-loader",
            exclude: /node_modules/,
        }],
    },

};