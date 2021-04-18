/* 
功能：定义一个操作数据库的库 支持Mysql MongoDB Mssql
要求： Mysql Mssql MongoDB的方法一样，都有add update delete get方法
注意：约束统一的规范和代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用使用泛型
  1. 接口:在面向对象的编程中，接口是一种规范的定义、定义行为和动作规范
  2. 泛型：泛型解决类、接口和方法的复用
*/

interface DBI<T> {
  add (info: T): boolean;
  update (info: T, id: number): boolean;
  delete (id: number): boolean;
  get (id: number): any[];
}

// 定义一个Mysql类：要实现泛型接口，类也必须是泛型类
class Mysql<T> implements DBI<T>{
  add (info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update (info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete (id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get (id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class Mssql<T> implements DBI<T>{
  add (info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update (info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete (id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get (id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class Mongodb<T> implements DBI<T>{
  add (info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update (info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete (id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get (id: number): any[] {
    throw new Error("Method not implemented.");
  }

}


// 操作用户表.定义用户表
class SqlUser {
  username: string | undefined;
  password: string | undefined;
}
var u = new SqlUser()
u.username = '张三'
u.password = '123123'

// mysql数据
var oMysql = new Mysql<SqlUser>()
oMysql.add(u)

// mssql数据操作
var oMssql = new Mysql<SqlUser>()
oMssql.add(u)
oMssql.add({ username: 's', password: '' })

