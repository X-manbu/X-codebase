# X-codebase

个人前端代码库，用来提高开发效率

# vue-element-ui

基于 vue 和 element-ui 的功能模块

## views/ruleForm

表单验证，以及自定义表单验证

## views/utils/map

### 地图组件

使用地图组件,需要先安装插件，并在 main.js 中进行配置  
1、安装插件  
npm install vue-amap --save  
2、引入组件  
import VueAMap from 'vue-amap'  
Vue.use(VueAMap);

## 地图转换方法

1、安装插件  
npm install coordtransform --save
2、封装转换方法 src/utils/map.js  
使用时直接引用即可
