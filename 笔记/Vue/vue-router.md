# Vue Router

Vue.js 的官方路由管理器

## 编程式的导航

```javascript
// 如果提供了 path，params 会被忽略，所以要通过params传参，必须使用name
this.$router.push({
    name: "User",
    params: { userId: "123" },
});
// 在user页面使用以下代码接受参数
this.$route.params.userId;
```

## history 和 hash 的区别

1、首先是地址栏的区别，hash 模式带有#号，history 模式不带#号
2、页面刷新 hash 模式的请求地址中不携带#后面的内容，不需要后端配合，history 模式请求的是当前地址的完整路径，需要后端配合  
3、hash 模式可以兼容一些低版本的浏览器，history 不兼容低版本浏览器  
4、路由跳转的实现，hash 是利用 window.onhashchange 监听 hash 的改变， history 利用 pushState 或者 replaceState Api 来完成 URL 跳转而无须重新加载页面

## 完整的导航解析流程

导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
