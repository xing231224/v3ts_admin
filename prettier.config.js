/*
 * @Author: your name
 * @Date: 2022-02-12 15:53:45
 * @LastEditTime: 2022-04-13 10:16:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\prettier.config.js
 */
// https://prettier.io/docs/en/configuration.html
module.exports = {
    // 每一行的宽度(显示的字符数)
    printWidth: 120,

    // tab健的空格数
    tabWidth: 4,

    // 是否在对象中的括号之间打印空格，{a:5}格式化为{ a: 5 }
    bracketSpacing: true,

    // 箭头函数的参数无论有几个，都要括号包裹
    arrowParens: 'always',

    // 换行符的使用
    endOfLine: 'lf',

    // 是否用单引号， 项目中全部使用单引号
    singleQuote: true,

    // 对象或者数组的最后一个元素后面是否要加逗号
    trailingComma: 'all',

    // 是否加分号，项目中统一加分号
    semi: true,

    // 是否使用tab格式化： 不使用
    useTabs: false,

    wrapAttributes: false,
};
