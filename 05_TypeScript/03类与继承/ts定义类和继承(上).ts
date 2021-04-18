// 1.ts中定义类

// class Person {
//   name: string; //前面public,( 还可使用private和protected、readonly、static和abstract进行修饰)
//   constructor(name: string) { //构造函数
//     this.name = name
//   }

//   run (): void { // 方法
//     alert(this.name)
//   }
// }

// // 使用
// var p = new Person('张三')
// p.run() // 张三




// class Person {
//   name: string; //前面public,( 还可使用private和protected、readonly、static和abstract进行修饰)
//   constructor(name: string) { //构造函数
//     this.name = name
//   }
//   // 获取名称
//   getName (): string {
//     return this.name
//   }

//   // 设置名称
//   setName (name: string): void {
//     this.name = name
//   }
// }

// // 使用
// var p = new Person('张三')
// alert(p.getName()) // 张三
// p.setName('李四')
// alert(p.getName()) // 李四


// 2. ts实现继承
// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name
//   }

//   run (): string {
//     return `${this.name}在运动`
//   }
// }

// var p = new Person('王五')
// alert(p.run()) // 王五在运行


// class Web extends Person {
//   constructor(name: string) {
//     super(name) // 初始化父类的构造函数
//   }
// }

// var w = new Web('李四')
// alert(w.run()) // 李四在运行




// 总结：父类的方法和子类方法一致，可以在子类新增独有的方法，有3中类别的修饰符public，protected、private
/*
public：公用【默认】      // 类内部，外部和子类内部都可方法
protected：保护   // 类内部，子类内部可方法,外部不可事宜
private：私有     // 类内部可使用，其他不可使用
*/

// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name
//   }

//   run (): string {
//     return `${this.name}在运动`
//   }
// }

// class Web extends Person {
//   constructor(name: string) {
//     super(name) // 初始化父类的构造函数
//   }

//   run (): string {
//     return `子类${this.name}在运动`
//   }

//   work (): string {
//     return `${this.name}在工作`
//   }
// }
// var w = new Web('李四')
// alert(w.work()) // 李四在工作
// alert(w.run()) // 子类李四在运行
