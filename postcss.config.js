let autoprefixer = require('autoprefixer') // 自动加浏览器前缀
let postcssCssnext = require('postcss-cssnext') // 自动把高版本css转换成低版本css 
let cssnano = require('cssnano') // 压缩css
let postcssImport = require('postcss-import') // 合并导入的css文件内容到一个文件中
let stylelint = require('stylelint') // css检查
let postcssModules = require('postcss-modules') // css模块化 类名id名保证不唯一 会生成一个json文件 key是原类目，id名 value是生成后的名

module.exports = {
    plugins: [
        // autoprefixer(),
        postcssCssnext(),
        // cssnano(),
        postcssImport(),    
        postcssModules()
    ]
}