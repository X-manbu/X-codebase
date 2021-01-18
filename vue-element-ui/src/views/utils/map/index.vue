<template>
    <div id="app">
        <h3 class="title">地图组件</h3>
        <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="'amap-vue'">
                 <el-amap-marker vid="component-marker" :position="position"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            position: [121.5273285, 31.21515044],
        }
    }
}
</script>

<style scoped>
    .amap-wrapper {
        width: 500px;
        height: 500px;
    }
</style>