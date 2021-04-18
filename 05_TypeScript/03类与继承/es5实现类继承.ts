// es5中类

// 1. 最简单的类

// function Person () {
//   this.name = '张三'
//   this.age = 20
// }
// var p = new Person() // 实例化
// p.name // '张三'


// 2. 构造函数增加方法

// function Person () {
//   this.name = '张三'
//   this.age = 20
//   this.run = function () { // 增加方法
//     console.log(this.name + '在游泳');
//   }
// }
// var p = new Person() // 实例化
// p.run() // '张三'


// 3. 原型链增加属性和方法
// Person.prototype.sex = "男"
// Person.prototype.work = function () {
//   console.log(this.name + '在工作');
// }
/*
  原型链上的属性会被多个实例共享构造函数的不会
*/


// 4. 静态方法
// Person.getInfo = function () {// 上面的run()和work()都是实例方法
//   alert('静态方法')
// }



// 5. es5中的继承
// function Person () {
//   this.name = '张三'
//   this.age = 20
//   this.run = function () { // 增加方法
//     console.log(this.name + '在游泳');
//   }
// }
// Person.prototype.sex = "男"
// Person.prototype.work = function () {
//   console.log(this.name + '在工作');
// }
// web类继承Person类， 原型链和冒充的组合继承
// 5.1  对象冒充实现继承【只能构造函数的方法和属性, 不可继承原型链的方法和属性】
// function Web () {
//   Person.call(this)
// }
// var w = new Web()
// w.run() // 正确：冒充可以构造函数的方法和属性
// w.work() // 报错：无法继承原型链上的属性和方法

// 5.2  原型链继承【可以构造函数和原型链的方法和属性，实例化子类时，无法给父类传参】
// function Web () {
// }
// Web.prototype = new Person() // 原型链实现继承
// var w = new Web()
// w.run() // 正确
// w.work() // 
/*
function Person (name, age) {
  this.name = name
  this.age = age
  this.run = function () { // 增加方法
    console.log(this.name + '在游泳');
  }
}

Person.prototype.sex = "男"
Person.prototype.work = function () {
  console.log(this.name + '在工作');
}

function Web (name, age) {
}
Web.prototype = new Person()
var w = new Web('赵四'，22)
w.run() // undefined在游泳

*/



// 5.3 原型链继承和冒充结合
// function Person (name, age) {
//   this.name = name
//   this.age = age
//   this.run = function () { // 增加方法
//     console.log(this.name + '在游泳');
//   }
// }

// Person.prototype.sex = "男"
// Person.prototype.work = function () {
//   console.log(this.name + '在工作');
// }

// function Web (name, age) {
//   Person.call(this, name, age) //【与原型继承的区别】
// }
// Web.prototype = new Person()
// var w = new Web('赵四'，22)
// w.run() // 赵四在游泳
// w.work() // 赵四在工作



/*
另外的写法
function Person (name, age) {
  this.name = name
  this.age = age
  this.run = function () { // 增加方法
    console.log(this.name + '在游泳');
  }
}

Person.prototype.sex = "男"
Person.prototype.work = function () {
  console.log(this.name + '在工作');
}

function Web (name, age) {
  Person.call(this, name, age) //【与原型继承的区别】
}
Web.prototype = Person.prototype
var w = new Web('赵四'，22)
w.run() // 赵四在游泳
w.work() // 赵四在工作

*/


