#  `vue`学习手册

## 常用配置

**去除语法检测**

在vue3.0中注释掉`module.exports`里面`extends`的`'@vue/standard'`

`package.json`文件下`eslintConfig`内的参数改成false

**删除`Vue-CLI`预设**

`Vue-CLI`会在`C盘下/用户/用户名目录`下自动生成一个名字为`.vuerc`的预设文件

在`presets`下删除保存的默认项目配置



**打包命令**

```yaml
npm run build
```

## `Vue`语法

**引入Vue**

```bash
#安装命令
npm install vue --save
```

**`npm install`安装失败的解决方法**

```bash
#1、Dos界面下运行
npm clean cache -force
#2、删除该目录下的npm-cache文件夹
C:\Users\ManBu\AppData\Roaming\npm-cache
```

**其他引入方式**

```js
<!-- 1、开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 2、生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

**报错**：`music.js:1 Uncaught ReferenceError: Vue is not defined`

```js
#解决办法:在第一行引入vue
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="js/music.js"></script>
```



### 生命周期

`beforeCreate`

实例进行初始化时调用，不能访问`data`中的数据和`methods`中的方法，不能操作DOM节点

`created`

实例初始化完成时调用，可以访问`data`中的数据和`methods`方法，这时仍然不能操作`DOM`

`beforeMount`

实例挂载之前调用，可以访问`data`中的数据和`methods`方法，这时仍然不能操作`DOM`

`mounted`

实例挂载完成时调用，可以访问`data`中的数据和`methods`方法，以及可以操作`DOM`

`beforeUpdate`

在数据发生变化时调用



**注意：**在生命周期钩子中，如果要等到整个视图都渲染完毕后再操作.

可以使用`vm.$nextTic`

```js
this.$nextTick(function(){
	//操作
})
```



### **计算属性vs方法**

本质：set get

**计算属性**:在多次使用时，只会调用一次，它有缓存

**方法**:在多次使用时，会调用多次，没有缓存



### 事件监听

btnClick  不带括号，默认传一个event

btnClick(abc,event) ->$event



### `v-if vs v-show`

`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。

**因此，**如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。



### 方法

**for in：** 可用于数组、对象的遍历

```js
//语法
for (const i in array) {
	array[i] = '新增的数据'
}
```

**filter 过滤器**

**作用：**经常用来过滤数组数据，返回true和false

**用法：**遍历list的数据，对每个数据进行判断是否小于等于40,返回为true的数据

```js
let lists = list.filter(function(n) {
	return n <= 40
})
```

**map**

**作用**：首次先遍历数组，然后在对数组中的每个数据进行操作，不会改变原数组。

**用法**：遍历list的数据，对每个数据加100,返回给addList

```js
const list = [5, 10, 20, 40, 50, 34, 78];
let addList = list.map(function(n) {
	return n + 100
})
```

**reduce**

**作用：**对数组中所有的内容进行汇总或其他操作

**用法：**接受两个参数：本例参数（函数 、0）

**temp**用来存汇总的数，**n**是list数组的每一个内容

```js
let allList = list.reduce(function(temp, n) {
	return temp + n
}, 0)
```



### 组件基础

组件是可复用的 Vue 实例与 ，`new Vue` 接收相同的选项

父组件：我们定义的组件；

子组件：使用的自定义组件。

### 注册组件

**全局注册**

```js
Vue.component('my-component-name', {
  // ... 选项 ...
})
```

**局部注册**

```js
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```

**在模块系统中局部注册**

通过 Babel 和 webpack 使用 ES2015 模块注册组件

```js
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  },
}
```

**动态组件**

在<component>上添加`is`可以实现动态组件

```vue
<template>
  <div>
    <button> 
      v-for="tab in tabs" 
      v-on:click="currentTab = tab"
      :key="tab">
        {{tab}}
    </button>
    <!--实现动态组件-->
    <component v-bind:is="view"></component>
  </div>
</template>

<script>
import Tab01 from '@/components/Tab01.vue'
import Tab02 from '@/components/Tab02.vue'
export default {
  name: 'Text',
  data:function(){
    return {
      currentTab: "Tab01",
      tabs: ['Tab01', 'Tab02']
    }
  },
  components:{
    Tab01,
    Tab02
  },
  //is用到的按钮列表
  computed:{
   view:function(){
      return this.currentTab;
    }
  }
}
</script>
```

**缓存**

想要使组件实例能够缓存，可以使用`keep-alive`

```vue
 <keep-alive>
    <component :is="view"></component>
 </keep-alive>
```



**父传子**需要在父组件中定义`props`

```vue
<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props:['title']
}
</script>
```

**子传父**：首先在模板中触发点击事件，然后在子组件中定义methods的点击事件，该事件使用$emit发送数据

**在模板中触发点击事件 btnClick** 

```html
<template id="myCpn">
  <div>
    <button @click="btnClick(item)" v-for="item in n">{{item.name}}</button>
  </div>
</template>
```



**子组件中定义methods的点击事件，发送 item-click事件 ** 

```js
methods: {
   btnClick(item) {
   *// console.log(item);*
   *//注意这里需要使用短横线命名*
   this.$emit('item-click', item)
  }
}
```



**监听item-click事件，然后在视图中渲染**

```html
<div id="app">
   <!-- 注意这里需要使用短横线连接 -->
   <cpn @item-click="cpnClick"></cpn>
</div>
```



### Prop父传子 

**传值问题**

如果父亲的数据是异步的，那么子组件获取的数据可能会为空。

这时有两种方法可以解决：

**1 使用watch进行监听**

```js
props:['worthlist'],
data(){
   return{
      worthList:this.worthlist
   }
 },
 //使用侦听器解决数据为空的问题
 watch: {
    worthlist(val) {
      this.worthList = val;
    }
 },
```

**2 使用计算属性computed**

```js
//无需在data中定义   
computed:{
  worthList:function(){
    return this.worthlist
  }
}
```



### 自定义事件名

自定义事件名不存在自动化大小写转换，触发的事件名需要完全匹配。

命名可以使用**短横线分割命名法**。



**自定义组件的`v-model`**

组件上的`v-model`默认会利用名为`value`的`prop`和`input`的事件,

而model可以更改`prop`和`event`



**将原生事件绑定到组件**

在组件的根元素上直接监听一个原生事件，可以使用`v-on`的`.native`



### 插槽`slot`

**具名插槽**

`slot`元素有一个`name`

```vue
<slot name="header"></slot>
```

使用`v-slot`给具名插槽提供内容

```vue
<template v-slot:header>
 	<p>Here's some contact info</p>
</template>
```

**注意`v-slot` 只能添加在 <template> 上** 。

**因为**父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

**所以**一般在父模板中不能使用子模板的数据，需要使用**作用域插槽**才能使用子模版中的数据。

作用域插槽**

2.6.0之前的版本使用`slot-scope`

*以下代码是基于element的表格组件写的*

```vue
<el-table-column label="操作">
    <!--也可以用在非template元素-->
    <template slot-scope="scope">
      <a href="#" class="ablock" @click="addval(scope)">添加</a>
    </template>
</el-table-column>
```



2.6.0之后推出了新语法，并且废弃了上面的`slot-scope`语法

```vue
<el-table-column label="操作" v-slot="slotProps">
    <!--用在template元素上，或者其他组件-->
   <a href="#" class="ablock" @click="addval(slotProps)">添加</a>
</el-table-column>
```

**注意：**如果出现多个插槽，请始终为*所有的*插槽使用完整的基于 `template` 的语法



**解构插槽Prop**

```vue
<!--解构-->
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>

<!--解构并重命名-->
<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>

<!--解构和重命名以及定义默认内容-->
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```



**异步组件**

### 事件

在组件上监听原生事件，可以使用 `v-on` 的 `.native` 修饰符

```vue
<base-input v-on:focus.native="onFocus"></base-input>
```



### 过渡&动画

**在进入/离开的过渡中，会有 6 个 class 切换。**

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

**示例** 

```vue
<!--显示与隐藏的动画效果-->
<template>
  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade" appear>
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
 name: 'About',
 data:function(){
   return {
     show: true
   }
 }
}
</script>
<style>
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{{
    transition: all .5s ease-in;
  }
</style>
```

**初始渲染过渡**

只需添加该代码`appear`即可

```vue
<transition appear>
  <!-- ... -->
</transition>
```

### 混入

混入对象可以包含组件里的选项，可以用来辅助组件。

1、组件使用混入对象时，混入对象的选项将被**混入组件本身的选项**。

2、组件和混入对象有**同名选项**时，将**优先使用组件的数据**。

```js
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    //message为同名选项，优先使用组件的message:'goodbye'
    //foo和bar不同明，将合并到data里
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

3、同名钩子函数将合并为一个数组，因此混入对象的钩子函数和组件钩子函数都将被调用。**混入对象的钩子**将在**组件自身钩子之前**调用。

```js
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

4、钩子函数的值为对象的选项，将被	合并为同一个对象，两个对象键名冲突时，优先取组件对象的键值对。

```js
var mixin = {
  methods: {
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    conflicting: function () {
      console.log('from self')
    }
  }
})
//函数里面的conflicting键名冲突了，优先取组件的键值对
vm.conflicting() // => "from self"
```



### `Vue`插件

通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

即使是多次调用`Vue.use`这个方法，只会注册一次，所以不用担心多次注册会带来性能消耗。



**MVVM**

`Model`（模型）-`View`（视图）-`ViewModel`（视图模型）



### `vue`响应式原理

**检测变化**

1. Vue **不能检测**数组和对象的变化
2. Vue **无法检测** property 的添加或移除,所以property必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的.
3. Vue **不允许**动态添加根级别的响应式 property
4. 为**已有对象赋值多个新 property**,应该用原对象与要混合进去的对象的 property **一起创建**一个新的对象。
5. 对于数组当你**利用索引**直接设置一个数组项时，当你**修改数组的长度**时，Vue 不能检测数组的变动



## Vue CLI

### `Vue CLI2`

```bash
#安装VueCli
cnpm install -g @vue/cli

#创建项目
vue create hello-world

#cli2创建项目
vue init webpack my-project
```



**创建项目**

```
安装
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同

创建 
vue init webpack my-project
```



**Eslint语法检测**

Eslint检测语法非常严格，不想用可以关闭

在项目config目录下的index.js文件中

找到 `useEslint: true,`

改为 `useEslint: false`,



**runtime-compiler与runtimeonly的区别**

runtime-compiler

template -> ast -> render -> virtualDOM -> UI

runtimeonly(步骤相对更少)

render -> virtualDOM -> UI



**卸载项目**

Vue CLI 的包名称由 `vue-cli` 改成了 `@vue/cli`。 

如果你已经全局安装了旧版本的 `vue-cli` (1.x 或 2.x)，

你需要先通过

```bash
npm uninstall vue-cli -g
或 
yarn global remove vue-cli
卸载它。
```



### `Vue CLI3`

**1 创建项目**

`vue ceate my-project`

**2 选择配置**

**default：**默认配置

**Manually select features:**自定义配置

```
Babel 语法转换
TypeScript 支持使用 TypeScript 书写源码
Progressive Web App (PWA) Support PWA 支持。
Router 支持 vue-router 。
Vuex 支持 vuex 。
CSS Pre-processors 支持 CSS 预处理器。
Linter / Formatter 支持代码风格检查和格式化。
Unit Testing 支持单元测试。
E2E Testing 支持 E2E 测试。
```



**请求代理**

根目录创建`vue.config.js`文件，利用`devServer.proxy`进行配置

```js
module.exports = {
  devServer: {
    proxy: {
      '/mobile': {
        target: 'https://qy.chinaunicom.cn/mobile',
        changeOrigin: true,
        pathRewrite: {
          '^/mobile': ''
        }
      }
    },
  }
}
```

**获取接口时就可以这样写**

```js
this.$axios.get(`/mobile/api/getTokenWithChannel`)
```

​	

## `vue-router`

### 路由配置

```js
//首先需要导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

**使用懒加载的模式导入组件**

```js
const Index = () => import ('../views/index/Index.vue')
const About = () => import ('../views/about/About.vue')
```

**将组件 (components) 映射到路由 (routes)**

```js
const routes = [{
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
   }]
```

**方法**

```js
this.$router //可以访问到整个路由器
this.route  //可以访问当前页面的路由
```



**单页面应用**

**原理 ：**将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们

**逻辑**：`app.vue`中<router>标签中的`to`与`index.js`中的`path`对应

**代码：**需要在三个地方写代码

```js
3、components创建vue组件
//需要导出每个组件
<script>
    export default {
      name: 'About'
    }
</script>

1、app.vue 
   
    //<router-link> 默认会被渲染成一个 `<a>`标签
    //通过传入 `to` 属性指定链接.
    <router-link to="/index">首页</router-link>
    <router-link to="/about">关于</router-link>
  	
	//路由出口：路由匹配到的组件将渲染在这里
  	<router-view></router-view>


2、router/index.js 
//导入
import Vue from 'vue'
import VueRouter from 'vue-router'

//1、安装插件
Vue.use(VueRouter)

//2、创建路由对象
const routes = [
    { path: '/index', component: index },
    { path: '/about', component: about }
]

const router = new Router({
   router
})

//3、导出路由
export default router

//4、在main.js文件中导入路由
new Vue({
  router
})
```



### 动态路由

```js
一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。

//new Router内部的routes中user的路径参数使用冒号标记
//文件index.js
{ path: '/user/:id', component: User }


<template>
  <div>{{userId}}</div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    //使用this.$route.params获取参数值
    userId(){
      return this.$route.params.id
    }
  }
}

//在地址栏中添加用户id
//文件app.vue
<template>
  <div id="app">
    <router-link :to="'/user/' + userId" tag="button" replace>用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'aaa'
    }
  },
}
</script>
```



**程序打包**

使用npm run build时，默认把js文件打包为3类文件

```js
目录为：dist/static/js
//项目相关业务代码
app
//底层支持
mainfest
//第三方插件
vendor
```



### 路由懒加载

打包构建项目时，默认会打包一个JavaScript文件，用户必须加载完这个文件才能渲染页面，可能会导致页面出现短暂的空白，当配置路由懒加载时，就能根据不同路由打包成不同的代码块，访问某路由时，就加载相应的代码，这样就很高效。

**懒加载实用方法**

```js
//定义路由时的写法
const Foo = () => import('./Foo.vue')

const router = new VueRouter({
  routes: [{ 
     path: '/foo', 
     component: Foo 
    }]
})

//也可以直接在router中写
const router = new VueRouter({
  routes: [{ 
     path: '/foo', 
     component: () => import('./Foo.vue')
    }]
})
```



### **路由嵌套使用**

**需要注意几点**

1、在某一组件下定义两个子组件，子组件路径不加 `'/'`

```js
{
  path: '/index',
  component: Index,
  children: [
  	//这里的path不加'/'
    { path: 'news', component: News },
    { path: 'message', component: Message }
  ]
},
       
//在组件中使用子组件
<template>
  <div>
    <h2>你好呀</h2>
    <div>我是首页</div>
	//这里要也写上父组件的路径
    <router-link to="/index/news">新闻</router-link>
    <router-link to="/index/message">消息</router-link>
    <router-view></router-view>
  </div> 
</template>
```



**$router和$route的区别**

$router为VueRouter的实例，想要导航到不同URL，则使用$router.push方法

$route为当前跳转对象里面可以获取name、path、query、parames等



**组件内的守卫**

```
 beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
```



### `TabBar`分离思想

**需求：**底部`tabbar`包括四个可点击的图标和文字，把`TabBar`和`TabBarItem`部分抽离出来封装成组件，最后在App.vue中导入这两个组件并注册，最后再使用它。

*两个组件可以重复使用*



**TabBar.vue**

```vue
<template>
  <div id="tab-bar">
    <!--插槽，用来插入TabBarItem里的东西-->
    <slot></slot>
  </div>
</template>
```



**TabBarItem.vue**

```vue
<template>
  <div class="tab-bar-item">
    <!--在调用该组件的模块中插入图标和文字-->
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
```



**App.vue**

```vue
<template>
  <div id="app">
     <!--3、使用这两个组件-->
    <tab-bar>
      <tab-bar-item>
        <!--插入图标和文字-->
        <img slot="item-icon" src="./assets/img/home.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  //1、导入组件
  import TabBar from './components/tabbar/TabBar' 
  import TabBarItem from './components/tabbaritem/TabBarItem' 

  export default {
    name: 'App',
    //2、注册这两个组件
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
 @import url('assets/css/base.css');
</style>
```



## `vuex`

vuex是为vue.js设计的状态管理库



**安装vuex**

`npm install vuex --save`

**创建vuex**

`scr`目录下新建`store`文件夹

创建`index.js`文件，引入vuex

```js
//导入vue vuex
import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

//创建一个 store
const store = new Vuex.Store({
  state: {
    count: 1000
  }
})

//导出store
export default store
```



## `axios`

**安装命令**

`npm install axios --save`

**拦截器**

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

**传参**

对于`get`请求，需要使用拼接字符串和`params`的方式传参。

```js
export function projectListQuery(query) {
  return request({
    url: '/project/list',
    method: 'get',
    params: query
  })
}
```



对于`post`请求，可以使用`data`、`params`和拼接字符串的方式传参。

```js
export function projectListQuery(data) {
  return request({
    url: '/project/list',
    method: 'post',
    data:data
  })
}
```



**注意：**当后台接受的参数为数组时，使用`axios`传参，需要配合`qs`进行传参

```js
export function deviceListDelete(query) {
  return request({
    url: '/order/device/deviceListDelete',
    method: 'post',
    params: query,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}
```



## 功能模板

**选择改变颜色**

**通过判断currentIndex是否等于index确定样式是否生效**

```html
#html

<div v-for="(item, index) in titles" :key="index" 
    :class="{active:index === currentIndex}" 
    @click="itemClick(index)">
</div>
```

```js
#js

itemClick(index){
    this.currentIndex = index;
}
```

```css
#css样式

.active{
    color: red;
}
```



### 防抖动

```js
#调用防抖动
const refresh = this.debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
   })

#防抖动函数
debounce(func, delay){
      let timer = null
      return function(...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this, args)
        }, delay)
      }
    }
```





`main.js`配置

```js
import Vue from 'vue'
import App from './App'
//导入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //把 store 的实例注入所有的子组件
  store,
  render: h => h(App)
})
```



**在组件中使用store**

通过 `store.state` 来获取状态对象，以及通过 `store.commit` 方法触发状态变更

```js
<template>
  <div id="app">
    <h3>{{$store.state.count}}</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    increase(){
      this.$store.commit('increment')
      },
    decrease(){
      this.$store.commit('decrement')
    }
  }
}
</script>
```





**基础知识**

### `better-scroll` 

**是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。**

**安装**

```bash
npm install better-scroll --save
```

**引入**

```js
import BScroll from 'better-scroll'
```

**各种插件**

```bash
npm install @better-scroll/pull-down@next @better-scroll/pull-up@next --save
```



### `webpack`

**安装webpack**

*webpack* 是一个现代 JavaScript 应用程序的*静态模块打包器(module bundler)*

在终端执行webpack-dev-server会在全局运行，但是全局没安装webpack，所以会报错，需要在package.json进行相关配置

**基本使用**

安装webpack需要先安装Node.js，因为webpack依赖于Node

1、查看node版本

`node -v`

2、全局安装webpack

`npm install webpack@3.6.0 -g`

3、基础打包命令

`webpack .\src\main.js .\dist\bundle.js`



**模块化**

在使用webpack之前需要进行模块的导入与导出

在main.js中导入js文件、css文件等



**安装**

使用webpack命令之前需要明确：默认可以对js进行打包，想要对其他文件打包可能需要安装相应的loader



**首先cd到对应目录**

**执行安装命令**

`npm install webpack@3.6.0 --save-dev`

--save-dev 是开发时依赖，项目打包后不需要继续使用

**在package.json添加脚本**

```js
"scripts": {
    "build": "webpack"
  },
```

package.json 的 scripts中添加 `"build": "webpack"`

最后，只要在终端里运行`npm run build`就能执行本地的webpack命令

**原理**

*package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。*

*首先，会寻找本地的node_modules/.bin路径中对应的命令。*

*如果没有找到，会去全局的环境变量中寻找。*



**安装loader**

打开网站

https://www.webpackjs.com/loaders/

点击loader,里面有相应的功能，这里以样式为例，选择css-loader



**运行安装命令**

```bash
npm install --save-dev css-loader
```



**在webpack.config.js配置**

```js
//自动获取当前绝对路径
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    //连接绝对路径，在该路径下生成bundler.js文件
    path: path.resolve(__dirname, 'dist'),
    //生成文件的名字
    filename: 'bundle.js'
  },
    
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        //这里还需要用相同的方式安装style-loader
        use: [ 'style-loader', 'css-loader' ]
      },
      	//在rules里配置less
       {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}
```



**安装less相应版本**

```
npm install --save-dev less-loader@4.1.0
```



**图片配置**

```
 {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
          	//设置大小，图片小于8000bit 使用url-loader，大于它使用file-loader
            limit: 8000,
            //对图片进行重命名
            //放在img文件夹里，命名规则为：原名字+5位哈希值+后缀
            name: 'img/[name].[hash:5].[ext]'
  }
```



**使用vue的配置**

**安装vue**

`npm install vue --save`

安装完成后，需要刷新一下才能在node_modules里显示



**在js的入口文件引入vue**

```
import vue from 'vue'
```

并创建vue实例

最后在index.html里用data里面的数据即可



**报错**

```
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

**在webpack.config.js中写入以下代码**

```js
 resolve: {
  alias: {
   'vue$': 'vue/dist/vue.esm.js'
  }
 }
```

**重新build解决问题**



**vue终极使用方案**

**1、首先在htmlz页面在显示的代码，可以在vue实例中编写**

```js
new Vue({
  el: '#app',
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click='btnClick'>按钮</button>
    </div>
  `,
})
```



**2、以上模板里面的代码可以抽取出来**

```js
const App = {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click='btnClick'>按钮</button>
    </div>
    `,
}
```

其中vue实例中的data、methods都可以抽取到这里，暂不演示



**3、抽离出的代码其实也可以封装在一个js文件里**

通过export default导出

```js
export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click='btnClick'>按钮</button>
    </div>
    `,
}
```

在里main.js引入即可

```
import App from './vue/app';
```



**4、这样的代码并不规范，可以在vue文件夹下面创建一个App.vue文件**

```bash
npm install vue-loader --save-dev
npm install vue-template-compiler --save-dev
```

webpack.config.js中手动引入以下代码

```js
 {
     test:/\.vue$/,
     use: ['vue-loader']
 }
```

**注意**

webpack有很多版本问题

首先，如果你安装的是最新版本，并且配置好vue-loader后

**应该，安装一个插件**

Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用：

```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
```



如果你的webpack是低版本

可以在package.json里面把原来的"vue-loader更改为"vue-loader": "^13.0.0",

再npm install即可



**安装插件plugin**

安装html-webpack-plugin，它的作用是：将index.html文件打包到dist目录下

**安装命令**

```
npm install html-webpack-plugin --save-dev
```

注意：b站版本@3.2.0



**然后再webpack.config.js里导入插件**

```js
const htmlWebpackPlugin = require('html-webpack-plugin')
 plugins: [
    new htmlWebpackPlugin({
    //作用：设置打包到dist目录下的文件是webpack.config.js同级目录的index.html模板
      template: 'index.html'
    })
  ]
```

然后该配置中output下的  publicPath: 'dist/'可以删除了



**搭建本地服务器**

**安装命令**

```
npm install webpack-dev-server@2.9.3 --save-dev
```



**module.exports下添加**

目的是找到dist这个路径

```js
devServer:{
	contentBase: '/dist',
	inline:true
}
```



编译程序的时候需要用到以下命令webpack-dev-server

但是它会在全局模式下运行这行代码，所以需要进行以下配置，作用是使代码在局部模式下执行

**package.json的script**

```
 "dev": "webpack-dev-server"
```



**webpack配置分离**

webpack生产版本与开发版本配置的分离

**安装依赖**

```
npm install webpack-merge --save-dev
```

将文件webpack.config.js文件进行分离

在根目录下创建build文件夹，创建三个文件

```
base-config.js  //基础文件

dev-config.js //开发文件

prod-config.js//生产文件
```



然后再让本项目指向该分离的文件

在package.json里面配置

```json
"build": "webpack --config ./build/prod.config.js",
"dev": "webpack-dev-server --open --config ./build/dev.config.js"
```



## 部署配置

**`vue.config.js`中的`publicPath`设置为相对路径**

`publicPath：' ./ '` 

不能使用基于 HTML5 `history.pushState` 的路由

`router`路由中的`mode: 'history'`需去掉

不能使用 `pages` 选项构建多页面应用

**执行打包命令**

`npm run build`

会自动在根目录生成`dist`文件夹，将该文件部署到服务器即可



### 语法检查

