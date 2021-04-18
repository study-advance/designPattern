/*
模块是在其自身的作用域里执行，并不是在全局作用域，这意味着定义在模块里面的变量、函数和类等在模块外部是不可见的，除非明确地使用 export 导出它们。类似地，我们必须通过 import 导入其他模块导出的变量、函数、类等。

两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。

此外还有有 SystemJs 和 Webpack。

个人理解：
    将公用的功能抽离成一个文件或者是一个模块，模块内部的变量和方法等都是私有的，如果我们需要在外部使用
    模块内部的（函数，变量、类...）我们需要使用export暴露模块内部的数据（函数，变量、类...）
    在使用的地方我们使用import 进行引入模块，就可以使用（函数，变量、类...）

*/

import { getData } from './modules/Db'


// 导出
const name = "name"
function test1 (): void {
  console.log('测试');
}

export {
  name,
  test1
}

// 导入重命名
import { getData as get } from './modules/Db'
import title from './modules/Db'



