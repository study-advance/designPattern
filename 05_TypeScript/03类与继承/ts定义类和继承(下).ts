// es5静态方法
// function Person () {
//   this.run1 = function () { // 实例方法，必须实例化后才能使用
//   }
// }
// Person.run2 = function () { // 静态方法
// }
// var p = new Person()
// p.run1() // 实例方法
// Person.run2() // 静态方法

// 【在jquery中应用】
// $('#id').css('size', 20)// css是实例方法
// function $ (el) {
//   return new Base(el)
// }

// function Base (el) {
//   this.element = ''/* 通过el获取DOM */
//   this.css = function (attr, value) {
//     this.element.style[attr] = value
//   }
// }

// $.get('url') //get静态方法

// $.get = function (url) {
// }



// ts的继承
class Person {
  public name: string;
  static staticName: string;
  constructor(name: string) {
    this.name = name
  }

  run (): string {
    return `${this.name}运动`
  }

  work (): any {
    return `${this.name}工作`
  }

  static getName (): void {
    // 无法使用类属性 this.name，可以访问静态属性staticName
    alert('静态方法')
  }
}

var p = new Person('张三')
p.run()  // "张三运动" 实例方法
p.work() // "张三工作"实例方法



// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每个子类具有不同的实现方法
// 多态属于继承

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name
//   }
//   eat () {
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat () {
//     return '肉'
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat () {
//     return '老鼠'
//   }
// }



// 抽象方法和抽象类
// ts中的抽象类，它是提供其他类的继承的基类，不能直接实例化
// 使用 abstract 关键字进行定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现且必须在派生类中实现

// 抽象方法只能放在抽象类中

// 抽象类和抽象方法一般是某种标准，如：Animal类中必须要有eat方法
abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  abstract eat (): any // 用于定义标准
}

// var a = new Animal() //错误使用

class Dog1 extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat () {
    alert('吃食物')
  }
}
