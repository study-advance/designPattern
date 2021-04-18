// 1. 函数类型接口，对方法传递的参数，返回值和披露函数进行约束
interface encrypt {
  (key: string, value: string): string
}
var md5: encrypt = function (key: string, value: string): string {
  return key + value
}
// console.log(md5('张三'，20)); // 错误
console.log(md5('张三', '在运动'));

var sha1: encrypt = function (key: string, value: string): string {
  return key + value
}
