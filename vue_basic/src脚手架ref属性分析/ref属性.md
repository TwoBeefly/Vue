# ref属性
* 被用来给元素或子组件注册引用信息（id的替代者）
* 应用在html标签上获取的时真实的DOM元素，应用在组件标签上是组件实例对象（vc）
## 使用方式
### 打标识：
```javascript
//html：
<h1 ref="xxx">......</h1>
//组件：
<Company ref="xxx">......</Company>
```
### 获取：
```javascript
this.$refs.xxx
```