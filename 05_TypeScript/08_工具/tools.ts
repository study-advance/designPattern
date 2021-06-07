// 1. typeof 获取一个变量或对象的类型
const Demo = {
   age: 20,
   name: '张三'
}
const Demo1 = '字符串'
type TypeDemo = typeof Demo; // type TypeDemo = {  age: number;  name: string;}
type TypeDemo1 = typeof Demo1 // '字符串'

// 获取对象的类型
interface Prop {
   id: number;
   name: string;
   age: number
}

const UserInfo: Prop = { id: 1, age: 12, name: '李四' }
type newProp = typeof UserInfo // type newProp =  Prop = {id: number; name: string; age: number}

// 获取函数的类型
function toArray (x: number): Array<number> {
   return [x]
}
type Func = typeof toArray // type Func = (x: number) => Array<number>





// 2. extends 用于泛型约束, 前者必须满足后者的约束
interface LengthWise {
   length: number
}
// 对泛型进行约束，必须含有length属性
function logIdentity<T extends LengthWise> (args: T): T {
   console.log(args.length);
   return args
}
logIdentity<string>('1212')
logIdentity('1212')
logIdentity({ length: 12, value: '王五' })





{
   // 3. keyof  索引类型查询操作符，Type上已知的公共属性名的联合
   interface Person {
      age: number;
      name: string;
   }
   type KeyPerson = keyof Person // 'age' | 'name'
   let t1: KeyPerson = 'age' || 'name'
   // 搭配 in  遍历

   type Par<T> = {
      [P in keyof T]?: T[P]
   }

   type ParPerson = Par<Person>
   /* 
   type ParPerson = {
      age?: number | undefined;
      name?: string | undefined;
   }
   */

}
