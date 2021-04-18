/*
接口的作用：在面向对象的编程中，接口是一直规范的定义，定义了行为和动作的规范，在程序设计中，接口起到限制和规范的作用
接口定义了某一批类所遵守的规范，接口不关心类方法的实现，ts的接口类似java，增加了更加灵活的接口类型，包含属性，函数，可索引和类
*/


// 1.属性接口,对json的约束
function printLabel (labelObj: { label: string }) {
  console.log(labelObj.label);
}

// printLabel('测试') 
printLabel({ label: '测试' }) // 测试





// 2. 批量方法进行参数约束
interface FullName {
  firstName: string; // 使用;结束
  lastName?: string;
}

function printName (param: FullName): void {
  //对象传入 firstName 和 lastName
  console.log(`${param.firstName}------${param.lastName}`);
}

// printName({ age: 20, firstName: "yang" }) // 错误
const obj: any = { age: 12, firstName: "yang" }
printName(obj) // 正确，只需要满足接口中定义的参数就行，可以有多余的参数
printName({ firstName: "yang" }) // 错误
function printNameInfo (param: FullName): void {
  console.log(`${param.firstName}`);
}



// 3. 可选属性
interface UserInfo {
  firstName: string; // 使用;结束
  age?: number; // 可选参数
  lastName?: string;
}

function printInfo (info: UserInfo): void {
  console.log(`${info.firstName}------${info.age}`);
  info.age?.toString() // 属性值有才执行后面的方法
}



// 4. ajax实例
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

function ajax (config: Config): void {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)

  xhr.send(config.data)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('调用成功');
      if (config.dataType === 'JSON') {
        console.log(JSON.parse(xhr.response.text));
      } else {
        console.log(xhr.response.text);
      }
    }
  }
}

ajax({
  type: 'get',
  url: "www.baidu.com",
  dataType: "JSON"
})

