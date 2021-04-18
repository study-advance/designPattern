var dbUrl = 'localhost://3030'

export function getData (): any[] {
  return [
    { title: "测试标题1" },
    { title: "测试标题2" }
  ]
}



// 每个文件只能返回一次
export default {
  title: "默认导出"
}
