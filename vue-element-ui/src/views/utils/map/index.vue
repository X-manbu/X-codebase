<template>
    <div id="app">
        <h3 class="title">地图组件</h3>
        <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="'amap-vue'" :center="center">
                 <el-amap-marker vid="component-marker" :position="position"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>

<script>
import { mapSwitch } from '@/utils/map'
export default {
    data(){
        return {
            position: [121.5273285, 31.21515044],
            center: [121.5273285, 31.21515044],
            place:{
                longitude:'121.5273285',
                latitude:'31.21515044',
                lType:'2'
            }
        }
    },

    mounted(){
        let curr = mapSwitch(this.place.longitude,this.place.latitude,this.place.lType);
        this.position = curr;
        this.center = curr;
    }
}
</script>

<style scoped>
    .amap-wrapper {
        width: 500px;
        height: 500px;
    }
</style>