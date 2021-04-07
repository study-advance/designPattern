## dynamicTable组件是基于van-pull-refresh与van-list

#### 1. 配置项

- pageSize：每次加载多少条数据，默认5条数据
- data：每次加载的具体数据
- @load：用于下拉刷新以及滚动加载的函数pageSize为当前第几页，pageSize【同pageSize配置项】为每次加载多少页
- van-pull-refresh与van-list组件的所有静态配置都支持，暂不支持slot

#### 2. 实例

```vue
<template>
    <DynamicTable :data="dataList" :page-size="pageSize" @load="handleLoadData">
        <!-- content为插槽名称， slotProps.data为插槽字段data的值-->
        <template v-slot:content="slotProps">
          <h2 v-for="(item,index) in slotProps.data" :key="index">{{ item }}</h2>
        </template>
    </DynamicTable>
</template>


<script lang="ts">
  private pageSize = 10 // 每次加载数据量
  private dataList: any = [] // 每次获取的数据列表
  // 加载数据函数
  private handleLoadData(pageNum: number, pageSize: number) {
    const mockList: any = []
    if (pageNum > 10){
      this.dataList = ['结束']
    } else {
      const start = pageSize * (pageNum -1)
      const end = pageSize * pageNum
      for (let i = start; i< end; i++){ 
        mockList.push(i)
      }
      setTimeout(()=>{
        this.dataList = mockList
      }, 1000)
    }
  }
</script>    
```

