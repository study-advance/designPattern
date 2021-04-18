/*
1. 泛型：组件不仅需要支持当前的数据类型，还要能支持未来的数据类型，在创建大型项目时
提供十分灵活的功能

在java和C#一个组件可以支持多种数据类型。
通俗理解：泛型可以解决类、接口、方法的复用和对不特定数据类型的支持
*/

// 只能返回string类型
// function getData (value: string): string {
//   return value
// }
// function getData1 (value: number): number {// 只能返回string类型
//   return value
// }



// 同时可以返回string和number类型,可以使用泛型接口
// function getData (value: any): any {
//   // 使用any表示放弃类型检查
//   return 'sss'
// }
// getData(1212)
// getData("发发发")




// 2. 泛型函数：如果现在要去传入什么数据类型和返回数据类型一致，就不能使用any进行处理，需要使用泛型进行解决

// T表示泛型，具体什么类型在调用的时候确定，T可以是任何变量如：TD,TData
function getData<T> (value: T): T {
  return value
}

// getData<number>('12') // 错误写法
getData('a')
getData(1213)




// 3.泛型类：最新数算法，需要指定但会数字和字符串两种类型，通过类
class MinClass {

  constructor() {

  }
  public list: number[] = []

  add (num: number) {
    this.list.push(num)
  }

  min () {
    var min = this.list[0]
    min = this.list.reduce((result, item) => {
      return result > item ? item : result
    }, min)
    return min
  }
}

class minClass<T>{

  constructor() {

  }
  public list: T[] = []

  add (num: T): void {
    this.list.push(num)
  }

  min (): T {
    var min = this.list[0]
    min = this.list.reduce((result, item) => {
      return result > item ? item : result
    }, min)
    return min
  }

}



//4. 泛型接口：
// 4.1函数类型接口
interface ConfigFn {
  (value1: string, value2: string): string
}
var setData: ConfigFn = function (value1: string, value2: string): string {
  return value1 + value2
}

// 4.2 泛型接口
interface ConfigFn1 {
  <T> (value: T): T
}
var getDataInfo: ConfigFn1 = function <T> (value: T): T {
  return value
}



interface ConfigFn2<T> {
  (value: T): T
}
function GetData<T> (value: T): T {
  return value
}
var mGetData: ConfigFn2<string> = GetData
mGetData('s')
// mGetData(1) // 错误



// 1. 把类作为参数进行约束
/*
  定义User类：映射数据库字段
  MysqlDB类:操作数据库
  把User类作为参数传递给MysqlDB类进行参数约束
*/
class User {
  username: string | undefined;
  password: string | undefined;
}

class MysqlDB {
  add (user: User): boolean {
    console.log(user);
    return true
  }
}

var user = new User()
user.username = '张三'
user.password = '123456'

var db = new MysqlDB()
db.add(user)


// 文章类
class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
}
class MysqlDB1 {
  add (info: ArticleCate): boolean {
    console.log(info);
    return true
  }
}
var info = new ArticleCate()
info.title = '国内'
info.desc = '国内新闻'
info.status = 0
var db1 = new MysqlDB1()
db1.add(info)



// 操作数据库类型的泛型类
class MysqlDb<T> {
  add (info: T): boolean {
    console.log(info);
    return true
  }
}
var info = new ArticleCate()
info.title = '国内'
info.desc = '国内新闻'
info.status = 1
var db0 = new MysqlDb()
db0.add(info)
db0.add(user)

var d1 = new MysqlDb<ArticleCate>()
d1.add(info)
// d1.add(user) // 错误


interface Article {
  title: string | undefined;
  desc: string | undefined;
  status?: number;
}
class ArticleCateInfo {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;

  constructor(param: Article) {
    this.title = param.title
    this.desc = param.desc
    this.status = param.status
  }
}
