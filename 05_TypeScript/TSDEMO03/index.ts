// 函数的定义

// 1. es5
// 1.1 函数申明
function run () {
  return 'run'
}

// 2.2 匿名函数
var run0 = function () {
  return 'run'
}




//2. ts
// 2.1函数申明
function run1 (): string {
  return 'run'
}
// 2.2匿名函数申明
var run2 = function (): string {
  return 'run'
}
var getInfo = function (name: string, age: number): string {
  return `${name}---${age}`
}

getInfo('Bob', 12) // "Bob---12"




// 3 方法可选参数，可选参数在最后
var getInfo1 = function (name: string, age?: number) {
  if (age) {
    return `${name}---${age}`
  } else {
    return `${name}---保密}`
  }
}
getInfo1('张三', 30) // "张三---30"
getInfo1('张三') // "张三---保密"




// 4. 默认参数 es5不能设置默认参数，es6和ts都可以设置默认参数
var getInfo2 = function (name: string, age: number = 20) {
  if (age) {
    return `${name}---${age}`
  } else {
    return `${name}---保密}`
  }
}
getInfo2('张三') // "张三---20"




// 5、三点运算符，剩余参数
function sum (a: number, b: number, c: number, d: number): number {
  return a + b + c + d
}
// 优化后
function sum1 (...rest: number[]) {
  // 获取求和
  return rest.reduce((result, num) => {
    return result + num
  }, 0)
}




// 6、函数重载
// Java中，重载是指多个同名函数，根据传递的参数个数或者类型不同调用不同的方法
// typescript中通过同一个函数提供多个函数定义来实现多种功能的目的
/* 
  function css (config) {
  }
  function css (config, value) {
  }
  // 在es5中出现多个同名方法时，后面的方法会覆盖前面的方法
*/

// ts
function css (config: string): string;
function css (config: number): string;
function css (params: any): any {
  if (typeof params === 'string') {
    return params
  } else {
    return `number-${params}`
  }
}
css(12)
css('string')
// css(false) // 错误使用




// 7、箭头函数, 需要注意其中的this指向上下文

/* 
// es5
setTimeout(function () {
  alert('run')
}, 3000)
*/

setTimeout(() => {
  alert('run')
}, 3000)


