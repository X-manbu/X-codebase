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
        <el-menu-item index='1-1' route="/debugger">调试</el-menu-item>
        <el-menu-item index='1-2' route="/qs">qs</el-menu-item>
        <el-menu-item index='1-3' route="/map">地图</el-menu-item>
        <el-menu-item index='1-4' route="/upload">上传</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">表单验证</template>
        <el-menu-item index='2-1' route="/Rule">表单验证</el-menu-item>
        <el-menu-item index='2-2' route="/CustomRule">自定义校验规则</el-menu-item>
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
          <el-menu-item index='3-1' route="/paination">分页</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">Vue</template>
          <el-menu-item index='4-1' route="/route">route</el-menu-item>
      </el-submenu>
    </el-menu>
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
