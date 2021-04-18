// 1. 可索引接口：数组、对象的约束[不常用]

var arr: number[] = [1212, 122]
var arr1: Array<string> = ['测试', '1212']





// 1.1可索引接口，对数组的约束
interface UserArr {
  [index: number]: string
}
var Arr: UserArr = ['111', '2222']




// 1.2可索引接口，对象的约束
interface UserArr {
  [index: string]: string
}
// var json: UserArr = { name: "张三", age: 12 }// 错误, 只能是string
var json: UserArr = { name: "张三" }




// 1.3对类的约束，和抽象类有点相似
interface Animal {
  name: string;
  eat (str: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }

  eat () {
    console.log(this.name + '吃饭');
  }
}

var d = new Dog('小黄')
d.eat() // '小黄吃饭'
