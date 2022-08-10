# 配置项props
---
**功能：让组件接收外部传过来的数据**

---
* 传递数据：
```javascript
<Demo name="xxx"></Demo> 
```
* 接收数据
```javascript
//第一种方式（只接受）：
props:['name']
//第二种方式（限制类型）：
props:{
    name:String
}
//第三种方式（限制类型、限制必要性、指定默认值）
props:{
    name:{
        type:String, //类型
        required: true, //必要性
        default:'pjc' //默认值
    }
}
```