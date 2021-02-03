<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index='1'>
        <template slot="title">工具</template>
        <el-menu-item index='1-1' route="/utils/debugger">调试</el-menu-item>
        <el-menu-item index='1-2' route="/utils/qs">qs</el-menu-item>
        <el-menu-item index='1-3' route="/utils/map">地图</el-menu-item>
        <el-menu-item index='1-4' route="/utils/upload">上传</el-menu-item>
        <el-menu-item index='1-5' route="/utils/count">计数</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">表单验证</template>
        <el-menu-item index='2-1' route="/rule/rule">表单验证</el-menu-item>
        <el-menu-item index='2-2' route="/rule/customRule">自定义校验规则</el-menu-item>
        <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
        <!-- 子组件 增加选项 -->
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="3">
          <template slot="title">表格</template>
          <el-menu-item index='3-1' route="/table/paination">分页</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">Vue</template>
          <el-menu-item index='4-1' route="/route/route">route</el-menu-item>
          <el-menu-item index='4-2' route="/route/user">user</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
          <template slot="title">布局</template>
          <el-menu-item index='5-1' route="/layout/dashboard">dashboard</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view />
    <router-view class="main" name="main"/>
    
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
     return {
       activeIndex: '1',
     };
   },
   methods: {
     // 选择导航菜单时触发
     handleSelect(key, keyPath) {
    
     }
   }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 300px;
    border: 2px solid darkcyan;
}
</style>
