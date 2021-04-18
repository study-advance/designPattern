/*
布尔类型（boolean）
数字类型（number）
字符串类型（string）
数组类型（string）
元组类型（tuple）
枚举类型（enum）
任意类型（any）
null和undefined
void类型
never类型
*/

/*
以前js中变量可以赋值多种值
var a = "string"
a = 12
*/

// 布尔类型（boolean） true false
var flag: boolean = false
flag = true




// 数字类型（number）
var num: number = 123
console.log(num)
num = 12.3
console.log(num)




// 字符串类型（string）
var str: string = 'hello word'
// str = 12 // 错误
// str = false // 错误
console.log(str);




// 数组类型（string）
// es5中 var arr = [1,'str',false]

// 1. 第一种定义数组方式
let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: string[] = ['', `ce`, "12"]

// 2. 第二种定义数组方式(泛型)
let arr3: Array<number> = [1, 2, 3, 4]
let arr4: Array<string> = ['', `ce`, "12"]

// 3. 第三种种定义数组方式
let arr5: any = [1, 2, 3, 4]
let arr6: any = ['', `ce`, "12"]





// 元组类型（tuple）属于数组的一种
let arr0: [string, number, boolean] = ['str', 12, false]




// 枚举类型（enum）
/*
   例如：性别、月份、星期几、颜色，学历、职业等都不是数值数据，在程序语言中一般使用数字表示某一状态，不直观且易读性差
   在程序中用自然语言中相应意义的单词代表某一状态，程序易于理解和阅读；
   也就是说：事先考虑到某一变量可能取得值，尽量用自然语言中含义清楚的词代表它的某个值，这种方法称为枚举方法。
   用这种方式定义的类型称为枚举类型

   enum 枚举名{
     标识符[=整型常数],
     标识符[=整型常数],
     ...
     标识符[=整型常数]
   }

  //  week  0:星期一  1：星期二   2：星期三
  //  flag  1标识true  -1标示false
*/

enum Flag {
  success = 1,
  fail = -1
}
var f: Flag = Flag.success
console.log(f); // 1

enum Color {
  red, blue, origin
}
Color.blue // 1




// 任意类型（any）有点像es5中没指定类型差不多
// var b: any = '1'
// b = 123
// 任意类型用处：window指定所有类型可使用




// null和undefined    其他（never类型）
// var num: number;
// console.log(num) // 输出：undefined

// var num: undefined;
// console.log(num) // 输出：undefined 正确

// 定义没有赋值是值为undefined
// var num: number | undefined;
// num = 123
// console.log(num) // 正确

// 一个元素可能是number类型，可能为null
// var num: number | null | undefined
// num = 21
// console.log(num)




// void类型 typescript中void表示没有任何类型，一定用于定义没有返回值的方法使用
// es5定义方法
// function run () {
//   console.log('task is start')
// }

/*
function run (): void {
  console.log('task is start')
}
*/

/*
// 错误写法
function run (): number {
  console.log('task is start')
}

// 正确写法
function run (): number {
  console.log('task is start')
  return 23
}
*/




// never类型 是其他类型（包含null和undefined）
var n: never
n = (() => {
  throw new Error('错误')
})()
